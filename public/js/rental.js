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
    var loadrent = await loadrentals()
    let select = document.getElementById("Veh_Ren_His"); 
    select.innerHTML="";
     console.log( loadrent[0]);
    for(let i = 0; i <  loadrent.length; i++) {
        rr[i].textContent = loadrent[i].Cus_ID;
        rr[i].textContent = loadrent[i].rental_Date;
        rr[i].textContent = loadrent[i].rental_Rate;
        rr[i].textContent = loadrent[i].additional_Fees;
       
    }
      }

      let implementrentalCusRen= async ()=>{
        var loadrent = await loadrentals();
       var rr = document.getElementsByClassName("field");
       console.log(loadrent);
       let x = 0;
        for(let i = 0; i <  loadrent.length; i++) {
        rr[i++].value = loadrent[x].rental_Date;
        rr[i].value = loadrent[x].Veh_Vin;
        rr[i].value = loadrent[x].rental_Rate;
        rr[i].value = loadrent[x].additional_Fees;
        
        x++;
            
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
                    rr[i++].value = loadrent[x]._rental_Status;
                    rr[i].value = loadrent[x].Veh_Vin;
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
                        