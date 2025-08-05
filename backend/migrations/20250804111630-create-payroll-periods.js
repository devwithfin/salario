'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("payroll_periods", {
      period_id : {
        type : Sequelize.INTEGER,
        autoIncrement : true, 
        primaryKey : true,
        allowNull : false
      },
      period_name : {
        type : Sequelize.STRING(50),
        allowNull : false, 
        unique : true
      },
      start_date : {
        type : Sequelize.DATEONLY,
        allowNull : false
      },
      end_date : {
        type : Sequelize.DATEONLY,
        allowNull : false
      },
      payroll_date : {
        type : Sequelize.DATEONLY,
        allowNull : false
      },
      start_date : {
        type : Sequelize.ENUM("open", "closed"),
        allowNull : false,
        defaultValue : "open"
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("payroll_periods")
  }
};
