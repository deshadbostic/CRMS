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
        let opt =  loadrent[i].name;
        let el = document.createElement("option");
        el.textContent = opt;
        el.value =i;
        select.appendChild(el);
    }
      }

      function implementrentalCusRen(){
        var loadrent = loadrentals()
        let select = document.getElementById("Cus_Ren_His"); 
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


            let implementrentalRenHis= async ()=>{
            var loadrent =  await loadrentals();       
              var rr = document.getElementsByClassName("field");
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
              }


              function implementrentalVehAvl(){
                var loadrent = loadrentals()
                let select = document.getElementById("Veh_Ava_Rpt");
                 
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


                  function implementrentalLteRtn(){
                    var loadrent = loadrentals()
                    let select = document.getElementById("Lte_Rtn_Rpt"); 
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
                        