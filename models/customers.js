
const DataTypes = require('sequelize/lib/data-types');

var db = require('../index');
var Sequelize= require('sequelize');
var sequelize=db.sequelize;
class Customer extends Sequelize.Model {}
Customer.init(
  {
    UserId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Username: {type: DataTypes.STRING, primaryKey: false, allowNull: false},
    Fname:DataTypes.STRING,
    Lname:DataTypes.STRING,
    Password: DataTypes.STRING,
    Email:DataTypes.STRING,
    Role:DataTypes.STRING
  },
  { sequelize: sequelize, modelName: "Customer", tableName: 'Customers' }
);