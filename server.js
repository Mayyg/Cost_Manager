//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const crypto = require('crypto');
    const connectionParams={
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
app.use(express.json());
    mongoose.connect('mongodb+srv://amitmay:amitmay1@cluster0.2xxxc54.mongodb.net/costs?retryWrites=true&w=majority'
        ,connectionParams);
    const db = mongoose.connection;
    db.on('error', () => {console.log('error connect to the server- please check your internet connection')});
    db.once('open', () => {
        console.log('connected to the ATLAS data base!');
    });

const addCostR = require('./routes/addcost.js');
const reportR = require('./routes/report.js');
const aboutR = require('./routes/about.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(addCostR);
app.use(reportR);
app.use(aboutR);

app.listen(3000, () => {
    console.log('server is up and running');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
