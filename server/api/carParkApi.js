const express = require('express');
const router = express.Router();

const data = require('../data/mockdata');

/* GET api carparks. */
router.get('/carparks', (req, res) => {

  //Randomly take 3 carparks off of one parking structure.
  var randomIndex = Math.floor((Math.random() * 7) + 0);
  if(data[randomIndex] != undefined){
    data[randomIndex].amount -= 3;
    if(data[randomIndex].amount < 0){data[randomIndex].amount = 0;}
  }

  res.status(200).json(data);
});

router.post('/carpark', (req, res) =>{

})

module.exports = router;