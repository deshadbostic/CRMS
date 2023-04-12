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
router.post('/addrental', function (req, res) {
    const Rental_ID = Math.floor(100000000 + Math.random() * 900000000);;
     const Cust_ID = req.body.name;
     const outstandingBal_Cre = req.body.Age;
     const rentalAgreementTerms = req.body.Address;
     const rental_Period = req.body.EmailAddress;
     const additional_Fees = req.body.PhoneNumber;
     const rental_Rate = req.body.DrvLicenseNo;
     const rental_Date = req.body.StateProvince;
     const _outstanding_Fees = req.body.DrvExpire;
     const _rental_Status = req.body.CreditC_No;
     const rental__returnDate = req.body.BillingAddress;
     const preDamage_Issues = req.body.CreditC_Exp;
     const amountCharged = req.body.Pref_Veh_type;
     const newDamage_Issues = req.body.Rent_Dur;
     const paymentMethod = req.body.Rent_Pickup;
     const Veh_Vin = ""; 

     let errors = req.validationErrors();
   
     if(errors){
         console.log("sending reg error"+JSON.stringify(errors));
         req.flash('error',JSON.stringify(errors));
      res.redirect('/')
       return
     } else {
     console.log(Rental_ID);
     Rental_ID=parseInt(Rental_ID)
     Customer=db.rent;
     let  newStudy =Customer.build({
         Rental_ID:Rental_ID,
         outstandingBal_Cre:outstandingBal_Cre,
         rentalAgreementTerms:rentalAgreementTerms,
         rental_Period: rental_Period,      
         additional_Fees: additional_Fees,
         rental_Date: rental_Date,  
         _outstanding_Fees:_outstanding_Fees,  
         rental_Rate: rental_Rate,
         _rental_Status: _rental_Status,    
         rental__returnDate:rental__returnDate,    
         preDamage_Issues:preDamage_Issues,
         amountCharged:amountCharged,   
         newDamage_Issues: newDamage_Issues,
         paymentMethod: paymentMethod,  
         Veh_Vin:Veh_Vin  
     });
    

            newStudy.save()
           
            req.flash('message','you have sucessfully registered')
              console.log(res.session)
              res.redirect('/')
  
     }
});
router.get('/loadrentals', function (req, res) {
	
    rent=db.rent;
    let studies=[];
    studies=rent.findAll()
          
    studies.then( function(studie) {  
        console.log(studie);
        console.log(studie);
     
 res.send(studie)
})
    
});
module.exports =router;