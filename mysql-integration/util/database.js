const {Sequelize} = require('sequelize');
const DB_PWD = process.env.DB_PWD;

const sequelize = new Sequelize('nodejs-complete', 'root', DB_PWD, {
  dialect: 'mysql', 
  host: 'localhost'
});

module.exports = sequelize;