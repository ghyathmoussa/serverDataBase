const { sequelize, Sequelize } = require(".");

module.exports = (sequelize,Sequelize) => {
    const Taxi = sequelize.define('taxi',{
        plate:{
            type:Sequelize.STRING
        },
        model:{
            type:Sequelize.STRING
        },
        dnumber:{
            type:Sequelize.INTEGER
        }
    });
    return Taxi;
}