const mongoose = require('mongoose');
const mCollection = require('../models/collection');
const Form = require('../models/form');
const User = require('../models/user');
const PDFDocument = require('pdfkit');
const puppeteer = require('puppeteer');
require('dotenv').config();


// GET: Get a collection
exports.getCollection = (req, res, next) => {

    mCollection.findById(req.params.id)
    .then((data) => {
        res.render('form/collection', { collection: data });
    })
    .catch((err) => {
        res.json({msg: err});
    });

}

// POST: Create a new collection
exports.createCollection = (req, res, next) => {

    const userId = req.session.user._id;
    const name = req.body.name;

    const newCollection = {
        user_id: userId,
        name: name,
        size: 0,
        forms: []
    }

    mCollection.create(newCollection)
    .then(() => {
        console.log('Collection created');
        res.redirect('/');
    })
    .catch((err) => {
        res.json({msg:err});
    });

}


// POST: Create a new form
exports.createForm = (req, res, next) => {

    const { name, columns } = req.body;

    const newForm = {
        name: name,
        user_id: req.session.user._id,
        columns: columns,
        rows: [],
        favorite: false
    }

    Form.create(newForm)
    .then(() => {
        res.redirect('/');
    })
    .catch((err) => {
        res.json({msg:err});
    });

}

// GET: Get a form
exports.getForm = (req, res, next) => {

    const { userId, formId } = req.params;

    try {

        Form.findById({ _id: formId })
        .then((data) => {

            if (data.entries.length == 0) {
                res.redirect(`/form/edit/${data._id}`);
            } else {
                res.render('form/form', { form: data, loggedIn: true });
            }

        });

    } catch(e) {
        res.json({msg:e});
    }

}

// GET: Get the page to edit a form
exports.editForm = async (req, res, next) => {

    const { formId } = req.params;

    try {

        Form.findById({ _id: formId })
        .then((data) => {
            res.render('form/editForm', { form: data, loggedIn: true });
        });

    } catch(e) {
        res.json({msg:e});
    }

}


// POST: Update a form
exports.updateForm = async (req, res, next) => {

    const { formId } = req.params;
    const entries = [];

    // Get the entries
    for (const entry in req.body) {

        var newEntry = {
            form_id: formId,
            data: req.body[entry],
            createdAt: new Date()
        }

        entries.push(newEntry);

    }

    // Update the form
    Form.findByIdAndUpdate({ _id: formId }, { entries: entries })
    .then(() => {
        res.redirect(`/form/${req.session.user._id}/${formId}`);
    })
    .catch((err) => {
        res.json({ msg: err });
    });

}

// GET: Generate a pdf of the form
exports.generatePDF = async (req, res, next) => {

    const { userId, formId } = req.params;
    
    // Create browser instance
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Website url to exports as pdf
    const websiteUrl = `http://localhost:${process.env.PORT}/form/${ userId }/${ formId }`;

    // Open page in url
    await page.goto(websiteUrl, { waituntil: 'networkidle0'});
    await page.emulateMediaType('screen');

    // Generate pdf
    const pdf = await page.pdf({
        printBackground: true,
        format: 'A4',
    });

    await browser.close();
    res.setHeader('Content-type', 'application/pdf');
    res.send(pdf);

}
