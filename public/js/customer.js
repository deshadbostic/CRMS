
var name = document.querySelector("#name") ;
var address = document.querySelector("#address");
var phone = document.querySelector("#phone");
var email = document.querySelector("#email");

      document.querySelector('#btn1').addEventListener('click', ()=>{
       
        document.querySelector("#rtwo").style.display = "block";
        document.querySelector("#rone").style.display = "none";
        
      })

      document.querySelector('#btn2').addEventListener('click', ()=>{
        document.querySelector("#rthree").style.display = "block";
        document.querySelector("#rtwo").style.display = "none";
       
      })

      document.querySelector('#btn2P').addEventListener('click', ()=>{
        document.querySelector("#rone").style.display = "block";
        document.querySelector("#rtwo").style.display = "none";
       
      })

      document.querySelector('#btn3').addEventListener('click', ()=>{
        document.querySelector("#rfour").style.display = "block";
        document.querySelector("#rthree").style.display = "none";
       
      })

      document.querySelector('#btn3P').addEventListener('click', ()=>{
        document.querySelector("#rtwo").style.display = "block";
        document.querySelector("#rthree").style.display = "none";
       
      })

      function loadcustomers(){
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
            
            let select = document.getElementById("Veh_Ren_His"); 
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
                                  }