const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dbUrl = 'mongodb://localhost:27017/agnirath';
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, from Agnirath - server');
});

app.post('/', (req, res) => {
    // res.send('Form SUbmitted!');
    res.redirect('http://localhost:3000/');
})

const port = '3001';
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});