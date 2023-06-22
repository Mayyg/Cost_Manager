//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', true);
const crypto = require('crypto');
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect('mongodb+srv://amitmay:amitmay1@cluster0.2xxxc54.mongodb.net/costs?retryWrites=true&w=majority', connectionParams)
  .then(() => {
    console.log('Connected to the ATLAS database!');
  })
  .catch((error) => {
    console.error('Error connecting to the server:', error);
  });

const addCost = require('./routes/addcost');
const report = require('./routes/report');
const about = require('./routes/about');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/addcost', addCost);
app.use('/report', report);
app.use('/about', about);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
