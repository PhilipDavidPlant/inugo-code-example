// var redis = require("redis"),
// jsonify = require('redis-jsonify'),
// client = jsonify(redis.createClient());

// client.on("error", function (err) {
//     console.log("Error " + err);
// });



// client.addCarPark = function(jsonPacket,callback){

//     this.exsists('keyRef',function(err,result){
//         if(result){
//             setPacket(jsonPacket);
//         }else{
//             this.set('keyRef',1);
//             setPacket(jsonPacket);
//         }
//     });

//     function setPacket(json){
//         this.get('keyRef', function(err, result) {
//             this.set(result,json,function(err, result){
//                 this.incr('keyRef',1,function(err, result){
//                     callback(err, result);
//                 });
//             });
//         }); 
//     }

// }

// client.getAllCarParks = function(callback){
    
// }

// client.addCarPark({ city:"CBD", name:"Britomart Parking", amount: 10 });
// client.addCarPark({ city:"CBD", name:"Downtown", amount: 20 });
// client.addCarPark({ city:"North Shore", name:"Takapuna", amount: 30 });
// client.addCarPark({ city:"North Shore", name:"Albany", amount: 40 });

// client.get('asdf', function (err, result) {
//     console.log(result); 
//     // should be { foo : "bar" } and not [Object object] 
    
// });

var data = [
    { key:1, city:"CBD", name:"Britomart Parking", amount: 10, profileImagePath:"165-office.png"},
    { key:2, city:"CBD", name:"Downtown", amount: 20, profileImagePath:"144-school.png"},
    { key:3, city:"North Shore", name:"Takapuna", amount: 30, profileImagePath:"134-building-12.png"},
    { key:4, city:"North Shore", name:"Albany Central", amount: 40, profileImagePath:"105-building-21.png"},
    { key:5, city:"North Shore", name:"Browns Bay Parking", amount: 40, profileImagePath:"057-office-block.png"},
    { key:6, city:"Manakau", name:"Clarks Parking", amount: 40, profileImagePath:"047-bank-6.png"},
    { key:7, city:"CBD", name:"Ponsonby Parking", amount: 40, profileImagePath:"050-building-31.png"},
]

module.exports = data;