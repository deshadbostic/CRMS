

      let loadcustomers=()=>{
        $.ajax({
            url:"/customers/loadcustomers",
            type:"GET",
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: function(response){
            console.log(response);
            return response;
    }
        });
    }
 
          function implementcustomers(){
            var loadcus = loadcustomers();
            var rr = document.getElementsByClassName("field");
            for(let i = 0; i <  loadcus.length; i++) {
              rr[i].textContent = 
                el.value =i;
                select.appendChild(el);
            }
              }

/*
              function implementcustomers(){
                var loadcus = loadcustomers();
                
                let select = document.getElementById("Cus_Ren_His"); 
                select.innerHTML="";
                 console.log( loadcus[0]);
                for(let i = 0; i <  loadcus.length; i++) {
                    let opt =  loadcus[i].name;
                    let el = document.createElement("option");
                    el.textContent = opt;
                    el.value =i;
                    select.appendChild(el);
                }
                  }


                  function implementcustomers(){
                    var loadcus = loadcustomers();
                    
                    let select = document.getElementById("Ren_His_Rpt"); 
                    select.innerHTML="";
                     console.log( loadcus[0]);
                    for(let i = 0; i <  loadcus.length; i++) {
                        let opt =  loadcus[i].name;
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value =i;
                        select.appendChild(el);
                    }
                      }

                      function implementcustomers(){
                        var loadcus = loadcustomers();
                        
                        let select = document.getElementById("Veh_Ava_Rpt"); 
                        select.innerHTML="";
                         console.log( loadcus[0]);
                        for(let i = 0; i <  loadcus.length; i++) {
                            let opt =  loadcus[i].name;
                            let el = document.createElement("option");
                            el.textContent = opt;
                            el.value =i;
                            select.appendChild(el);
                        }
                         
                      
                      }

                          function implementcustomers(){
                            var loadcus = loadcustomers();
                            
                            let select = document.getElementById("Lte_Rtn_Rpt"); 
                            select.innerHTML="";
                             console.log( loadcus[0]);
                            for(let i = 0; i <  loadcus.length; i++) {
                                let opt =  loadcus[i].name;
                                let el = document.createElement("option");
                                el.textContent = opt;
                                el.value =i;
                                select.appendChild(el);
                            }
                              }

                              function implementcustomers(){
                                var loadcus = loadcustomers();
                                
                                let select = document.getElementById("Veh_Trnvr_Rpt"); 
                                select.innerHTML="";
                                 console.log( loadcus[0]);
                                for(let i = 0; i <  loadcus.length; i++) {
                                    let opt =  loadcus[i].name;
                                    let el = document.createElement("option");
                                    el.textContent = opt;
                                    el.value =i;
                                    select.appendChild(el);
                                }
                                  }*/

                                 // module.exports = { loadcustomers};