//const { loadvehicles } = require("./vehicle.js");


      function loadcustomers(){
        return JSON.parse($.ajax({
            url:"/customers/loadcustomers",
            type:"GET",
            async:false,
            contentType:"application/json; charset=utf-8",
            dataType:"json",
        }).responseText);
    }
 /*
          let implementcustomers = async () =>{
            var loadcus = loadcustomers();
            var rr = document.getElementsByClassName("field");
          var x= 0;
            for(let i = 0; i <  loadcus.length; i++) {
              rr[i].value = ;
                el.value =i;
                select.appendChild(el);
            }
              }*/

              let implementsearch_customer = async()=>{
                var loadcus =await loadcustomers();
                var rr = document.getElementById("cusSelect");
                var x = 0;
                for(let i = 0; i < loadcus.length; i++){
                    var option= document.createElement("option");
                    option.value= loadcus[x].Cust_ID;
                    option.text= loadcus[x].Name;
                    rr.appendChild(option)
                  x++;
                  
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

                                 exports = { loadcustomers};