//Amit Maor 315406710
//May Gabay 322621590

/*const express = require("express");
const costsModel = require("../models/costs"); 
const usersModel = require("../models/users"); 
const addCostRouter = express.Router(); 
addCostRouter.post("/", async (req, res, next) => { 
 const { user_id, year, month, day, description, category, sum } = req.body; 
  try {
    let id = (new Date()).getTime();
    const cost = await new costsModel({id, user_id,year,month,day,description, category,sum}).save(); 
    res.json(cost); 
  } catch (error) {
    next(error); 
  }
});
module.exports = addCostRouter; */


const express = require("express");
const costsModel = require("../models/costs"); 
const usersModel = require("../models/users"); 
const addCostRouter = express.Router(); 

addCostRouter.post("/", async (req, res, next) => { 
  const { user_id, year, month, day, description, category, sum } = req.body;
  try {
    let id = (new Date()).getTime();
   
   const newCost = new Cost({
      user_id,
      year,
      month,
      day,
      description,
      category,
      sum
    });
    const savedCost = await newCost.save();
     res.json(savedCost);
  } catch (error) {
    next(error); 
  }
});

module.exports = addCostRouter;
