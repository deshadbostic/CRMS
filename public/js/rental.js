//const { loadcustomers} = require("./customer.js");

 function loadrentals(){
     return JSON.parse($.ajax({
        url:"/rentals/loadrentals",
        type:"GET",
        async:false,
        contentType:"application/json; charset=utf-8",
        dataType:"json",
    }).responseText);
}
async function implementrentalVehRen(){
  var loadrent = await loadrentals();
  let customer = localStorage.getItem("vehicle")
     var loadcustomer = await loadcustomers();
     console.log(customer);
     var loadvehicle = await loadvehicles();
console.log(loadvehicle);

     for(let p = 0; p <  loadvehicle.length; p++) 
     {
      if(loadvehicle[p].Veh_Vin==customer){
        var customerrecord =loadvehicle[p]
        break;
      }

    }
//customerrecord is rlly vehicle record just named bad
     console.log(customerrecord);
     var elem = document.getElementById('replicable');
 var rr = document.getElementsByClassName("rfield");

 console.log(loadrent);
 var vin = document.getElementById("VIN");
 vin.value=customerrecord.Veh_Vin;
 let x = 0;
  for(let i = 0; i <  loadrent.length; i++) {
    console.log(customerrecord.Veh_Vin)
    if(loadrent[x].Veh_Vin==customerrecord.Veh_Vin){ //only uses records made by vehicle
      if(i<0){
        let clone = elem.cloneNode(true);
      clone.id = `elem${i}`;
      document.getElementById('rone').appendChild(clone);
      }
      rr = document.getElementsByClassName("rfield")
      for(let p = 0; p <  loadcustomer.length; p++) {
        if(loadcustomer[p].Cust_ID==loadrent[x].Cust_ID){
          rr[i++].value = loadcustomer[p].Name;
          break;
        } }
      rr[i++].value = loadrent[x].rental_Date;
     
      
      rr[i++].value = loadrent[x].rental_Rate;
      rr[i].value = loadrent[x].additional_Fees;
    
    x++;

    }

  }
    }
  

      let implementrentalCusRen= async ()=>{
        var loadrent = await loadrentals();
        let customer = localStorage.getItem("customer")
           var loadcustomer = await loadcustomers();
           console.log(customer);
           var loadvehicle = await loadvehicles();
           var elem = document.getElementById('replicable');
           //finds the correct customer based on a customer id that is sent to this file
           for(let x = 0; x <  loadcustomer.length; x++) {
            if(loadcustomer[x].Cust_ID==customer){
             var customerrecord=loadcustomer[x].Cust_ID; //saves the customer record that is the one we want
              break;
            }
           }
           console.log(customerrecord);
          
       var rr = document.getElementsByClassName("field");
       console.log(loadrent);
       let x = 0;
        for(let i = 0; i <  loadrent.length; i++) {
          if(i<0){
            let clone = elem.cloneNode(true);
          clone.id = `elem${i}`;
          document.getElementById('rone').appendChild(clone);
          }
          rr = document.getElementsByClassName("field")
          if(loadrent[x].Cus_ID==customerrecord.Cus_ID){ //only uses records made by customer
            rr[i++].value = loadrent[x].rental_Date;
            for(let p = 0; p <  loadvehicle.length; p++) {
              console.log(loadvehicle[p].Veh_Vin);
              console.log(loadrent[x].Veh_Vin)
              if(loadvehicle[p].Veh_Vin==loadrent[x].Veh_Vin){
                rr[i++].value = loadvehicle[p].Model;
                break;
              }
             }
            rr[i++].value = loadrent[x].rental_Rate;
            rr[i].value = loadrent[x].additional_Fees;
          
          x++;

          }
  
        }
          }


            let implementrentalRenHis= async ()=>{
            var loadrent =  await loadrentals();       
              var rr = document.getElementsByClassName("rptfield");
              var total= document.getElementById("no_of_rec")
              var totalBal = document.getElementById("t_revenue")
              var total_num=0 ;
              var total_bal =0;
              console.log(loadrent);
              let x=0;
              for(let i = 0; i <  loadrent.length; i++) {
                rr[i++].value =  loadrent[x].rental_Period;
                rr[i].value =  loadrent[x].rental_Rate;
               total_num++;
               total_bal += loadrent[x].amountCharged;
                x++;
               
               //select.appendChild(el);
           }
          
           

           //set total text box 
            //set number of
            total.value =total_num;
            totalBal.value = total_bal;

              }

//veh_avl_report
              let implementrentalVehAvl= async() =>{
                var loadrent = await loadrentals();
                var rr = document.getElementsByClassName("rfield");
                console.log(loadrent);
                let x=0;
                for(let i = 0; i <  loadrent.length; i++) {
                    rr[i].value = loadrent[x]._rental_Status;
                   
                    x++;
                }
            }
               
                
              

//lte_rtn_report
                  function implementrentalLteRtn(){
                    var loadrent = loadrentals()
                    var rr = document.getElementsByClassName("rfield"); 
                    for(let i = 0; i <  loadrent.length; i++) {
                        rr[i].textContent =  loadrent[i]._outstanding_Fees;
                        
                    }
                      }

//vrh_trnovr_Report
                      function implementrentalVehTrnvr(){
                        var loadrent = loadrentals()
                        let select = document.getElementById("Veh_Trnvr_Rpt"); 
                        select.innerHTML="";
                         console.log( loadrent[0]);
                        for(let i = 0; i <  loadrent.length; i++) {
                            let opt =  loadrent[i].name;
                            let el = document.createElement("option");
                            el.textContent = opt;
                            el.value =i;
                            select.appendChild(el);
                        }
                          }
                     
                          exports = { loadrentals};
                        