
const {app} = require("./server");
const request = require("supertest");


  
  test("index route works", done => {
    request(app)
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200, done);
  }); 
  
  test("customer route works", done => {
    request(app)
      .get("/customer")
      .expect("Content-Type", /html/)
      .expect(200, done);
  }); 
  test("rentals route works", done => {
    request(app)
      .get("/rental")
      .expect("Content-Type", /html/)
      .expect(200, done);
  }); 
  test("vehicle route works", done => {
    request(app)
      .get("/vehicle")
      .expect("Content-Type", /html/)
      .expect(200, done);
  }); 
  const Customer = {Name : 'Patricia Holder' , Age :'30' , Address :'Humble fields' , EmailAddress :'patriciah@hotmail.com' , PhoneNumber:'2468258563', DrvLicenseNo : '142534526',StateProvince :'Bridgetown',DrvExpire:'2025-04-02',CreditC_No:'1732874812',BillingAddress:'Lot 167 Humble Fields Christ.Church',CreditC_Exp:'2027-06-03',Pref_Veh_type :'Nissan',Rent_Dur:'7 Days',Rent_Pickup:'Sheraton',Rent_Dropoff:'Coverley'};
  test("customer add works",done =>  {
    request(app)
                .post('customers/addcustomer')
                .timeout(10000)
                .send(Customer)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
    .then((response)=>{
       expect(response.statusCode).toBe(200);
       done();
       
    })
      });
      const Vehicle = {Year: '2007', Veh_Vin: '5N1AR1N25AC611339' , Model: 'PathfinderXL', Make: 'Nissan', Color:'Black', LPN:'X4653', Availability:'1', Odometer:'50000'}; 
  test("vehicle add works",done =>  {
    request(app)
                .post('vehicles/addvehicle')
                .timeout(10000)
                .send(Vehicle)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
    .then((response)=>{
       expect(response.statusCode).toBe(200);
       done();
       
    })
      });
      const RR = {rentalAgreementTerms:'I agree', rental_Period:'7 days', rental_Rate:'100', additional_Fees:'50', rental_Date:'2023-04-10', _outstanding_Fees:'20', rental_Status:'1', rental__returnDate:'2023-04-17', preDamage_issues: 'none', newDamage_issues: 'none', amountCharged:'170', paymentMethod:'debit', outstandingBal_Cre:'0', Cust_ID:' 123456789', Veh_Vin:'5N1AR1N25AC611339'};
     
      test("Rental add works",done =>  {
        request(app)
                    .post('rentals/addrental')
                    .timeout(10000)
                    .send(Vehicle)
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
        .then((response)=>{
           expect(response.statusCode).toBe(200);
           done();
           
        })
          });
        test("load customers work",done => {
          request(app)
          .get('customers/loadcustomers')
          .expect('Content-Type', /json/)
          .expect('Content-Length', '15')
          .expect(200,done)

        });
    