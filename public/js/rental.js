function loadrentals(){
    $.ajax({
        url:"/rentals/loadrentals",
        type:"GET",
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(response){
             console.log(response);
       return response;
}
    });
}
function implementrentalVehRen(){
    var loadrent = loadrentals()
    var rr = document.getElementsByClassName("field"); 
    for(let i = 0; i <  loadrent.length; i++) {
        rr[i].textContent = loadrent[i].Cus_ID;
        rr[i].textContent = loadrent[i].rental_Date;
        rr[i].textContent = loadrent[i].rental_Rate;
        rr[i].textContent = loadrent[i].additional_Fees;
       
    }
      }

      function implementrentalCusRen(){
        var loadrent = loadrentals();
       var rr = document.getElementsByClassName("field");
        for(let i = 0; i <  loadrent.length; i++) {
        rr[i].textContent = loadrent[i].rental_Date;
        rr[i].textContent = loadrent[i].rental_Rate;
        rr[i].textContent = loadrent[i].additional_Fees;
        rr[i].textContent = loadrent[i].Veh_Vin;
            
        }
          }


          function implementrentalRenHis(){
            var loadrent = Array.from(loadrentals());
           var rr = document.getElementsByClassName("field");
           var total_num ;
           var total_bal;
           console.log(loadrent);
           for(let i = 0; i <  loadrent.length; i++) {
             rr[i].textContent =  loadrent[i].rental_Period;
             rr[i].textContent =  loadrent[i].rental_Rate;
            total_num++;
            total_bal += loadrent[i].amountCharged;

            let el = document.createElement("option");
            el.textContent = opt;
            el.value =i;
            select.appendChild(el);
        }
              }

//veh_avl_report
              function implementrentalVehAvl(){
                var loadrent = loadrentals()
                var rr = document.getElementsByClassName("field");
                for(let i = 0; i <  loadrent.length; i++) {
                    rr[i].textContent = loadrent[i]._rental_Status;
                    rr[i].textContent = loadrent[i].Veh_Vin;

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
                        