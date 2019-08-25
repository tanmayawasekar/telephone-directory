const Sequelize = require('sequelize');
const sequelize = new Sequelize('', 'postgres', 'shahid', {
    host: 'test-postgres-compose',
    dialect: 'postgres',
    port: '5432',
    pool: {
        max: 9,
        min: 0,
        idle: 10000
    }
});

sequelize.query("CREATE DATABASE telephone_derectory;").then(data => {
    console.log("DataBase Created of name telephone-derectory");
    process.emit("DatabaseCreated");
}).catch(error => {
    console.log(error)
    process.emit("DatabaseCreated");
});
