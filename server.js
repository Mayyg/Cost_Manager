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

const addCostRouter = require('./routes/addcost');
const reportRouter = require('./routes/report');
const aboutRouter = require('./routes/about');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/addcost', addCostRouter);
app.use('/report', reportRouter);
app.use('/about', aboutRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
