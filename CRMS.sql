CREATE TABLE Customer
(
  Cust_ID INT NOT NULL,
  Name VARCHAR(20) NOT NULL,
  Age INT NOT NULL,
  Address VARCHAR(40) NOT NULL,
  EmailAddress VARCHAR(50) NOT NULL,
  PhoneNumber INT NOT NULL,
  DrvLicenseNo INT NOT NULL,
  StateProvince VARCHAR(25) NOT NULL,
  DrvExpire DATE NOT NULL,
  CreditC_No INT NOT NULL,
  BillingAddress VARCHAR(40) NOT NULL,
  CreditC_Exp DATE NOT NULL,
  Pref_Veh_type VARCHAR(30) NOT NULL,
  Rent_Dur VARCHAR(30) NOT NULL,
  Rent_Pickup VARCHAR(40) NOT NULL,
  Rent_Dropoff VARCHAR(40) NOT NULL,
  PRIMARY KEY (Cust_ID)
);

CREATE TABLE Vehicle
(
  Year INT NOT NULL,
  Veh_Vin INT NOT NULL,
  Model VARCHAR(30) NOT NULL,
  Make VARCHAR(30) NOT NULL,
  Color VARCHAR(20) NOT NULL,
  LPN VARCHAR(10) NOT NULL,
  Availability BOOLEAN NOT NULL,
  Odometer INT NOT NULL,
  Cust_ID INT NOT NULL,
  PRIMARY KEY (Veh_Vin),
  FOREIGN KEY (Cust_ID) REFERENCES Customer(Cust_ID)
);

CREATE TABLE Rentals_and_Returns
(
  rentalAgreementTerms VARCHAR(100) NOT NULL,
  rental_Period VARCHAR(40) NOT NULL,
  rental_Rate FLOAT NOT NULL,
  additional_Fees FLOAT NOT NULL,
  rental_Date DATE NOT NULL,
  _outstanding_Fees FLOAT NOT NULL,
  _rental_Status BOOLEAN NOT NULL,
  rental__returnDate DATE NOT NULL,
  preDamage_issues VARCHAR(100) NOT NULL,
  newDamage_issues VARCHAR(100) NOT NULL,
  amountCharged FLOAT NOT NULL,
  paymentMethod VARCHAR(20) NOT NULL,
  outstandingBal_Cre FLOAT NOT NULL,
  Cust_ID INT NOT NULL,
  Veh_Vin INT NOT NULL,
  FOREIGN KEY (Cust_ID) REFERENCES Customer(Cust_ID),
  FOREIGN KEY (Veh_Vin) REFERENCES Vehicle(Veh_Vin)
);