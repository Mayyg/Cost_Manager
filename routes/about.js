//Amit Maor 315406710
//May Gabay 322621590

const express = require("express");
const about = express.Router();
about.get("/", async (req, res) => {
    const developers = [
        {
            firstname: 'amit' ,
            lastname:'maor' ,
            id:'1' ,
            email:'info.amit@gmail.com'
        },
        {
            firstname:'may' ,
            lastname:'gabay' ,
            id:'2' ,
            email: 'maygabaym@gmail.com'
        },
    ];
        res.json(developers);
});

module.exports = about;
