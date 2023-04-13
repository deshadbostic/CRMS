
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

      function implementvehicle(){
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

          function implementvehicle(){
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

              function implementvehicle(){
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

                  function implementvehicle(){
                    var vehiclefunc = loadvehicles();
                    let select = document.getElementById("Veh_Ava_Rpt"); 
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

                      function implementvehicle(){
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

                          function implementvehicle(){
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