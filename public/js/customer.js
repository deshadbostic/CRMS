
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

