//Amit Maor 315406710
//May Gabay 322621590

const express = require('express');
const addCostRouter = express.Router();
const costs = require('../models/costs');
const users = require('../models/users');



// Handling POST requests to the root path ("/") of the add cost route
addCostRouter.post("/", async (req, res, next) => { 
  // Extracting the user_id from the request body
  const { user_id } = req.body; 
    
    try {
        const user = await User.findOne({ id: user_id });
      
        if(!user) {
            res.status(400).json('user doesn\'t exists');
            return;
        }
       let id = (new Date()).getTime();



    // Create a new cost document based on the request body and save it to the database
    const cost = await new costs({...req.body, id}).save(); 

    // Send a JSON response with the saved cost document and pass any caught error to the error-handling middleware
    res.json(cost);
    } catch (error) {
        res.status(500).json("failed to add cost");
    }
});

module.exports = addCostRouter;
