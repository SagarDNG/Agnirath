const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// const CatchAsyncError = require('./utilities/catchAsyncError');
// const ExpressError = require('./utilities/expressError');
// const { validateUser } = require('./midleware');

const users = require('./controllers/users');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/agnirath';
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, from Agnirath - server');
});

// app.post('/', validateUser, CatchAsyncError(users.createUser));
// app.post('/', CatchAsyncError(users.createUser));
app.post('/', users.createUser);


// app.post('/', (req, res) => {
//     // res.send('Form SUbmitted!');
//     // res.redirect('http://localhost:3000/');
// })

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
});

// app.use((err, req, res, next) => {
//     const { statusCode = 500 } = err;
//     if (!err.message) err.message = 'Oh No, Something Went Wrong!'
//     res.status(statusCode).render('error', { err })
// });

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});