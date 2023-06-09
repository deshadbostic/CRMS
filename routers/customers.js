const express=require('express');
const path=require('path');
const router=express.Router();
const bodyParser = require('body-parser');
var {db,callWhenComplete} = require('../server');


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
router.post('/addcustomer', function (req, res) {
    var Cust_ID = Math.floor(100000000 + Math.random() * 900000000);;
     const Name = req.body.name;
     const Age = req.body.Age;
     const Address = req.body.Address;
     const EmailAddress = req.body.EmailAddress;
     const PhoneNumber = req.body.PhoneNumber;
     const DrvLicenseNo = req.body.DrvLicenseNo;
     const StateProvince = req.body.StateProvince;
     const DrvExpire = req.body.DrvExpire;
     const CreditC_No = req.body.CreditC_No;
     const BillingAddress = req.body.BillingAddress;
     const CreditC_Exp = req.body.CreditC_Exp;
     const Pref_Veh_type = req.body.Pref_Veh_type;
     const Rent_Dur = req.body.Rent_Dur;
     const Rent_Pickup = req.body.Rent_Pickup;
     const Rent_Dropoff = req.body.Rent_Dropoff;

console.log(CreditC_Exp);

     //req.checkBody('fname','Name is required').notEmpty();
     req.checkBody('name', 'Name is required').notEmpty();

     let errors = req.validationErrors();
   
     if(errors){
         console.log("sending reg error"+JSON.stringify(errors));
         req.flash('error',JSON.stringify(errors));
      res.redirect('/')
       return
     } else {
     console.log(Cust_ID);
     Cust_ID = parseInt(Cust_ID)
     Customer=db.Customer;
     let  newStudy =Customer.build({
         Cust_ID:Cust_ID,
         Name:Name,
         Age:Age,
         Address: Address,      
         EmailAddress: EmailAddress,
         PhoneNumber: PhoneNumber,  
         DrvLicenseNo:DrvLicenseNo,  
         StateProvince: StateProvince,
         DrvExpire:new Date(DrvExpire),    
         CreditC_No:CreditC_No,    
         BillingAddress:BillingAddress,
         CreditC_Exp:new Date(CreditC_Exp),   
         Pref_Veh_type:Pref_Veh_type, 
         Rent_Dur: Rent_Dur,
         Rent_Pickup: Rent_Pickup,  
         Rent_Dropoff:Rent_Dropoff  
     });
    

            newStudy.save()
           
            req.flash('message','you have sucessfully registered')
              console.log(res.session)
              res.redirect('/')
  
     }
});
router.get('/loadcustomers', function (req, res) {
	
    Customer=db.Customer;
    let studies=[];
    studies=Customer.findAll()
          
    studies.then( function(studie) {  
        console.log(studie);
        console.log(studie);
    res.status(200) 
 res.send(JSON.stringify(studie))
})
callWhenComplete()
});
module.exports =router;