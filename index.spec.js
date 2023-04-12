
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
  const Customer = "{Name : 'Jacque Test' , Age :30 , Address :'Humble fields' , EmailAddress :'patriciah@hotmail.com' , PhoneNumber:2468258563, DrvLicenseNo : 142534526,StateProvince :'Bridgetown',DrvExpire:'2025-04-02',CreditC_No:1732874812,BillingAddress:'Lot 167 Humble Fields Christ.Church',CreditC_Exp:'2027-06-03',Pref_Veh_type :'Nissan',Rent_Dur:'7 Days',Rent_Pickup:'Sheraton',Rent_Dropoff:'Coverley'}";
  test("customer add works",done =>  {
    request(app)
                .post('customers/addcustomer')
                .send(Customer)
                .set('Content-type', 'multipart/form-data')
                .set('Accept', 'application/json')
  
       expect(200);
       done();
      });
      const Vehicle = {Year: '2007', Model: 'PathfinderXL', Make: 'toyota', Color:'Black', LPN:'X4653', Availability:'1', Odometer:'50000'}; 
  test("vehicle add works",done =>  {
    request(app)
                .post('vehicles/addvehicle')
                .send(Vehicle)
                .set('Content-type', 'multipart/form-data')
                .set('Accept', 'application/json')
  
       expect(200);
       done();
      });
      const RR = {rentalAgreementTerms:'I agree', rental_Period:'7 days', rental_Rate:'100', additional_Fees:'50', rental_Date:'2023-04-10', _outstanding_Fees:'20', rental_Status:'1', rental__returnDate:'2023-04-17', preDamage_issues: 'none', newDamage_issues: 'none', amountCharged:'170', paymentMethod:'debit', outstandingBal_Cre:'20', Cust_ID:' 123456789', Veh_Vin:'5N1AR1N25AC611339'};
     
      test("Rental add works",done =>  {
        request(app)
                    .post('rentals/addrental')
                    .send(RR)
                    .set('Content-type', 'multipart/form-data')
                    .set('Accept', 'application/json')
      
           expect(200);
           done();

          });

           
        
        test("load customers work",done => {
          request(app)
          .get('customers/loadcustomers')
          .expect('Content-Type', /html/)
          .expect(200,done)

        });
        test("load rentals work",done => {
          request(app)
          .get('rentals/loadrentals')
          .expect('Content-Type', /html/)
          .expect(200,done)

        });
        test("load vehicles work",done => {
          request(app)
          .get('vehicles/loadvehicles')
          .expect('Content-Type', /html/)
          .expect(200,done)

        });

