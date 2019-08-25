require("./initDb");
var databasecallback = function(response) {
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('telephone_derectory', 'postgres', 'shahid', {
        host: 'test-postgres-compose',
        dialect: 'postgres',
        port: '5432',
        pool: {
            max: 9,
            min: 0,
            idle: 10000
        }
    });
    // const sequelize = new Sequelize('postgres://user:pass@example.com:5432/telephone_derectory')

    sequelize.authenticate().then(() => {
        console.log("Success! Database connected");
        // process.emit("DatabaseConnected", sequelize);
    }).catch((err) => {
        console.log(err);
    });

    module.exports = sequelize;
};

process.on("DatabaseCreated", databasecallback)
