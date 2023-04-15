function loadvehicles(){
  return JSON.parse($.ajax({
       url:"/vehicles/loadvehicles",
       type:"GET",
       async:false,
       contentType:"application/json; charset=utf-8",
       dataType:"json",
  }).responseText);

 }

 let implementvehicleVehRen= async() =>{
  let vehicles = localStorage.getItem("vehicle")
  var vehiclefunc = await loadvehicles();
  var rr= document.getElementsByClassName("VIN");
  console.log(vehiclefunc);
  let x = 0; 
  for(let i = 0; i <  vehiclefunc.length; i++) {
   
     rr[i].value = vehiclefunc[x].Veh_Vin;
  x++;
  }
    }        
//veh_avl_report
                 let implementvehicleVehAvl= async() =>{
                   var vehiclefunc = await loadvehicles();
                   
                   var rr= document.getElementsByClassName("vfield");
                   console.log(vehiclefunc);
                   let x = 0; 
                   for(let i = 0; i <  vehiclefunc.length; i++) {
                    rr[i++].value = vehiclefunc[x].Veh_Vin;
                      rr[i++].value = vehiclefunc[x].Make;
                      rr[i].value = vehiclefunc[x].Model;
                   x++;
                   }
                     }

                     let implementsearch_vehicle = async()=>{
                      var loadveh =await loadvehicles();
                      var rr = document.getElementById("vehSelect");
                      var x = 0;
                      for(let i = 0; i < loadveh.length; i++){
                          var option= document.createElement("option");
                          option.value = loadveh[x].Veh_Vin;
                         // option.text= loadveh[x].Model;
                          option.text= loadveh[x].Make +" "+loadveh[x].Model;
                          rr.appendChild(option)
                        x++;
                        
                      }
                    }
