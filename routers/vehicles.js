const express=require('express');
const path=require('path');
const router=express.Router();
const bodyParser = require('body-parser');
var {db} = require('../server');


const {Sequelize, Model, DataTypes } = require('sequelize')

router.use(bodyParser.json()); 

router.get('/', function(req, res) {
    //await new Promise(resolve => setTimeout(resolve, 10000));
    if(('passport' in req.session)){
        if(('user' in req.session.passport)){
           //output videos
           Study=db.Study;
            let studies=[];
            studies=Study.findAll()
            
            studies.then( function(studie) {  
               let studieso=[];
               console.log(studie);
               console.log(studie);
            
        res.send(studie)
    })
           
}
}else{
   
     //output videos
     let videos=[];
     fs.readdir(process.cwd()+ '/public/images/videos/', function (err, files){
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        console.log(videos); 
        files.forEach(function (file) {
            // Do whatever you want to do with the file           
           videos.push(file)
           console.log(videos); 
        });
        res.send(videos);
     } );
 

}
});
router.post('/addvehicle', function (req, res) {
     const Year = Math.floor(100000000 + Math.random() * 900000000);;
     const Veh_Vin = req.body.vin;
     const Model = req.body.vec_model;
     const Make = req.body.vec_make;
     const Color = req.body.vec_color;
     const LPN = req.body.license_num;
     const Availability = req.body.availability;
     const Odometer = req.body.odom_reading;

     //req.checkBody('fname','Name is required').notEmpty();
     req.checkBody('Model', 'Name is required').notEmpty();

     let errors = req.validationErrors();
   
     if(errors){
         console.log("sending reg error"+JSON.stringify(errors));
         req.flash('error',JSON.stringify(errors));
      res.redirect('/')
       return
     } else {
     Vehicle=db.Vehicle;
     let  newStudy =Vehicle.build({
         Year:Year,
         Veh_Vin:Veh_Vin,
         Model:Model,
         Make: Make,      
         Color: Color,
         LPN: LPN,  
         Availability:Availability,  
         Odometer: Odometer
     });
    

            newStudy.save()
           
            req.flash('message','you have sucessfully registered')
              console.log(res.session)
              res.redirect('/')
  
     }
});
router.get('/loadvehicles', function (req, res) {
	
    Vehicle=db.Vehicle;
    let studies=[];
    studies=Vehicle.findAll()
          
    studies.then( function(studie) {  
        console.log(studie);
        console.log(studie);
     
 res.send(studie)
})
    
});
module.exports =router;