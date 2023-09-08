const express = require("express");
const about = express.Router();
about.get("/", async (req, res) => {
    const developers = [
        {
            firstname: '' ,
            lastname:'' ,
            id:'' ,
            email:''
        },
        {
            firstname:'' ,
            lastname:'' ,
            id:'' ,
            email: ''
        },
    ];
        res.json(developers);
});

module.exports = about;
