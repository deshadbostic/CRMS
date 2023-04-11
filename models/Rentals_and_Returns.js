
const DataTypes = require('sequelize/lib/data-types');

var db = require('../index');
var Sequelize= require('sequelize');
var sequelize=db.sequelize;
class Rentals_and_Returns extends Sequelize.Model {}
Rentals_and_Returns.init(
  {
    rentalAgreementTerms:DataTypes.STRING,
    rental_Period:DataTypes.STRING,
    rental_Rate: DataTypes.FLOAT,
    additional_Fees:DataTypes.FLOAT,
    rental_Date:DataTypes.DATE,
    _outstanding_Fees:DataTypes.FLOAT,
    _rental_Status:DataTypes.BOOLEAN,
    rental__returnDate:DataTypes.DATE,
    preDamage_Issues:DataTypes.STRING,
    newDamage_Issues:DataTypes.STRING,
    amountCharged:DataTypes.FLOAT,
    paymentMethod:DataTypes.STRING,
    outstandingBal_Cre:DataTypes.FLOAT,
    Cust_ID: {type: DataTypes.INTEGER, foreignKey: true},
    Veh_Vin: {type: DataTypes.STRING, foreignKey: true},
  },
  { sequelize: sequelize, modelName: "Rentals_and_Returns", tableName: 'Rentals_and_Returns' }
);

db.rent = Rentals_and_Returns;
  module.exports = db;