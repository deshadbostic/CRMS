require("supertest");
require("customers.js");
require("vehicles.js");
require("Rentals_and_Returns.js");

let var0 = loadcustomers();
expect(var0).toBe
([{
    "Cust_ID":123456789,"Name":"Patricia Holder","Age":30,"Address":"Humble fields","EmailAddress":"patriciah@hotmail.com","PhoneNumber":2468258563,"DrvLicenseNo":142534526,"StateProvince":"Bridgetown","DrvExpire":"2025-04-02","CreditC_No":1732874812,"BillingAddress":"Lot 167 Humble Fields Christ.Church","CreditC_Exp":"2027-06-03","Pref_Veh_type":"Nissan","Rent_Dur":"7 Days","Rent_Pickup":"Sheraton","Rent_Dropoff":"Coverley"},{"Cust_ID":259607691,"Name":"Randy Fox","Age":34,"Address":"Hillaby, St Thomas","EmailAddress":"aaa@hotmail.com","PhoneNumber":2399999,"DrvLicenseNo":465443,"StateProvince":"bridgetwn","DrvExpire":"2023-04-12","CreditC_No":1627172,"BillingAddress":"Mose","CreditC_Exp":"2023-04-12","Pref_Veh_type":"axio","Rent_Dur":"6 days","Rent_Pickup":"Bridgetown","Rent_Dropoff":"Holetown"},{"Cust_ID":673795536,"Name":"RandyFox","Age":34,"Address":"Hillaby, St Thomas","EmailAddress":"aaa@hotmail.com","PhoneNumber":2399999,"DrvLicenseNo":465443,"StateProvince":"bridgetwn","DrvExpire":"2023-04-09","CreditC_No":20342223,"BillingAddress":"Mose","CreditC_Exp":"2023-04-21","Pref_Veh_type":"axio","Rent_Dur":"6 days","Rent_Pickup":"Bridgetown","Rent_Dropoff":"Holetown"},{"Cust_ID":936794568,"Name":"RandyFox","Age":34,"Address":"Hillaby, St Thomas","EmailAddress":"aaa@hotmail.com","PhoneNumber":2399999,"DrvLicenseNo":465443,"StateProvince":"bridgetwn","DrvExpire":"2023-04-12","CreditC_No":886665,"BillingAddress":"Mose","CreditC_Exp":"2023-04-12","Pref_Veh_type":"axio","Rent_Dur":"6 days","Rent_Pickup":"Bridgetown","Rent_Dropoff":"Holetown"}
]);

let var1 = loadrentals();
expect(var1).toBe
([{
    "Rental_ID":0,"rentalAgreementTerms":"I agree","rental_Period":"7 days","rental_Rate":100,"additional_Fees":50,"rental_Date":"2023-04-10","_outstanding_Fees":20,"_rental_Status":true,"rental__returnDate":"2023-04-17","preDamage_Issues":"none","newDamage_Issues":"none","amountCharged":170,"paymentMethod":"debit","outstandingBal_Cre":0,"Cust_ID":123456789,"Veh_Vin":"5N1AR1N25AC611339"}
]);

let var2 = loadvehicles()
expect(var2).toBe
([{
    "Year":463277644,"Veh_Vin":"123abc","Model":"Corolla","Make":"Toyota","Color":"Red","LPN":"A382","Availability":true,"Odometer":3920000},{"Year":974821451,"Veh_Vin":"26d7sha78","Model":"Corolla","Make":"BMW","Color":"Red","LPN":"A382","Availability":true,"Odometer":3920000},{"Year":898782116,"Veh_Vin":"3231fs","Model":"Corolla","Make":"BMW","Color":"Red","LPN":"A382","Availability":true,"Odometer":3920000},{"Year":2007,"Veh_Vin":"5N1AR1N25AC611339","Model":"PathfinderXL","Make":"Nissan","Color":"Black","LPN":"X4653","Availability":true,"Odometer":50000}
]);