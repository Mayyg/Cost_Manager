//Amit Maor 315406710
//May Gabay 322621590
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
const MONGODBUR = 'mongodb+srv://amitmay:amitmay1@cluster0.2xxxc54.mongodb.net/costs?retryWrites=true&w=majority';
mongoose
    .connect(MONGODBUR, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB', error);
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
