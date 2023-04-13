
function loadvehicles(){
   return JSON.parse($.ajax({
        url:"/vehicles/loadvehicles",
        type:"GET",
        async:false,
        contentType:"application/json; charset=utf-8",
        dataType:"json",
   }).responseText);

  }
                  
//veh_avl_report
                  let implementvehicleVehAvl= async() =>{
                    var vehiclefunc = await loadvehicles();
                    var rr= document.getElementsByClassName("vfield");
                    console.log(vehiclefunc);
                    let x = 0; 
                    for(let i = 0; i <  vehiclefunc.length; i++) {
                       rr[i++].value = vehiclefunc[x].Make;
                       rr[i].value = vehiclefunc[x].Model;
                    x++;
                    }
                      }

                      async function implementvehicleLteRtn(){
                        var vehiclefunc = await loadvehicles();
                        let select = document.getElementById("Lte_Rtn_Rpt"); 
                        select.innerHTML="";
                         console.log( vehiclefunc[0]);
                        for(let i = 0; i <  vehiclefunc.length; i++) {
                            let opt =  vehiclefunc[i].name;
                            let el = document.createElement("option");
                            el.textContent = opt;
                            el.value =i;
                            select.appendChild(el);
                        }
                          }

                          async function implementvehicleVehTrnvr(){
                            var vehiclefunc = await loadvehicles();
                            let select = document.getElementById("Veh_Trnvr_Rpt"); 
                            select.innerHTML="";
                             console.log( vehiclefunc[0]);
                            for(let i = 0; i <  vehiclefunc.length; i++) {
                                let opt =  vehiclefunc[i].name;
                                let el = document.createElement("option");
                                el.textContent = opt;
                                el.value =i;
                                select.appendChild(el);
                            }
                              }
                             