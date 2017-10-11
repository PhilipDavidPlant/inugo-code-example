const express = require('express');
const router = express.Router();

const data = require('./server/model/mockdata');

/* GET api carparks. */
router.get('/carparks', (req, res) => {

  //Randomly take 3 carparks off of a parking structure
  var randomIndex = Math.floor((Math.random() * 6) + 0);
  if(data[randomIndex] != undefined && data[randomIndex] != 0){
    data[randomIndex] -= 3;
  }

  res.status(200).json(response);
});

router.post('/carpark', (req, res) =>{

})

module.exports = router;