const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const mainRouter = require('./routers/main');
const userRouter = require('./routers/user');
const formRouter = require('./routers/form');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'src/views');
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('src/public'));
app.use(session({
    secret: "mysecret",
    saveUninitialized: true,
    resave: false
}));
app.use(methodOverride('_method'));
app.use(mainRouter);
app.use('/user', userRouter);
app.use('/form', formRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`App has connected to Mongodb! Server running on PORT ${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});