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


          function implementrentalRenHis(){
            var loadrent = loadrentals()
            
              }


              function implementrentalVehAva(){
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