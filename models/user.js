const Sequelize = require('sequelize');

process.on("DatabaseConnected", function(sequalize) {
    console.log("User========>")
    const User = sequelize.define('user', {
        // attributes
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            // allowNull defaults to true
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        }
      }, {
        // options
      });
});