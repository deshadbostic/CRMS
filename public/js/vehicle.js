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
