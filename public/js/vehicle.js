
function loadvehicles(){
    $.ajax({
        url:"/vehicles/loadvehicles",
        type:"GET",
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(response){
             console.log(response);
       return response;
}
    });
}

      function implementvehicleVehRen(){
        var vehiclefunc = loadvehicles();
        let select = document.getElementById("Veh_Ren_His"); 
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

          function implementvehicleCusRen(){
            var vehiclefunc = loadvehicles();
            let select = document.getElementById("Cus_Ren_His"); 
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

              function implementvehicleRenHis(){
                var vehiclefunc = loadvehicles();
                let select = document.getElementById("Ren_His_Rpt"); 
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
                  
//veh_avl_report
                  function implementvehicleVehAvl(){
                    var vehiclefunc = loadvehicles();
                    var rr= document.getElementsByClassName("vfield"); 
                    for(let i = 0; i <  vehiclefunc.length; i++) {
                       rr[i].textContent = vehiclefunc[i].Make;
                       rr[i].textContent = vehiclefunc[i].Model;
                    
                    }
                      }

                      function implementvehicleLteRtn(){
                        var vehiclefunc = loadvehicles();
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

                          function implementvehicleVehTrnvr(){
                            var vehiclefunc = loadvehicles();
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
                             