
const DataTypes = require('sequelize/lib/data-types');

var db = require('../index');
var Sequelize= require('sequelize');
var sequelize=db.sequelize;
class Vehicle extends Sequelize.Model {}
Vehicle.init(
  {
    Year:DataTypes.INTEGER,
    Veh_Vin: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Model: DataTypes.STRING,
    Make:DataTypes.STRING,
    Color:DataTypes.STRING,
    LPN:DataTypes.STRING,
    Availability:DataTypes.BOOLEAN,
    Odometer:DataTypes.INTEGER,
    Cust_ID: {type: DataTypes.INTEGER, foreignKey: true},
  },
  { sequelize: sequelize, modelName: "Vehicle", tableName: 'Vehicle' }
);

db.Vehicle = Vehicle;
  module.exports = db;