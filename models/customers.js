
const DataTypes = require('sequelize/lib/data-types');

var db = require('../index');
var Sequelize= require('sequelize');
var sequelize=db.sequelize;
class Customer extends Sequelize.Model {}
Customer.init(
  {
    Cust_ID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, primaryKey: false, allowNull: false},
    Age:DataTypes.INTEGER,
    Address:DataTypes.STRING,
    EmailAddress: DataTypes.STRING,
    PhoneNumber:DataTypes.INTEGER,
    DrvLicenseNo:DataTypes.INTEGER,
    StateProvince:DataTypes.STRING,
    DrvExpire:DataTypes.DATE,
    CreditC_No:DataTypes.INTEGER,
    BillingAddress:DataTypes.STRING,
    CreditC_Exp:DataTypes.DATE,
    Pref_Veh_type:DataTypes.STRING,
    Rent_Dur:DataTypes.STRING,
    Rent_Pickup:DataTypes.STRING,
    Rent_Dropoff:DataTypes.STRING,
  },
  { sequelize: sequelize, modelName: "Customer", tableName: 'Customer' }
);

db.Customer = Customer;
  module.exports = db;