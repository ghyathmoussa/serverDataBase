const { sequelize, Sequelize } = require(".");

module.exports = (sequelize,Sequelize) => {
    const taxiDriver = sequelize.define('taxi_drivers',{
        id:{
            type:Sequelize.INTEGER
        },
        name:{
            type:Sequelize.STRING
        },
        surname:{
            type:Sequelize.STRING
        },
        plate:{
            type:Sequelize.STRING
        }
    });
    return taxiDriver;
}