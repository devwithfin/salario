'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("employee_deductions", {
      emp_deduction_id : {
        type : Sequelize.INTEGER,
        autoIncrement : true, 
        primaryKey : true,
        allowNull : false
      },
      employee_id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : "employees",
          key : "employee_id"
        }
      },
      deduction_id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : "deductions-types",
          key : "deduction_id"
        }
      },
      amount : {
        type : Sequelize.DECIMAL(15,0),
        allowNull : false
      },
      effective_date : {
        type : Sequelize.DATEONLY,
        allowNull : false
      },
       end_date : {
        type : Sequelize.DATEONLY,
        allowNull : false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("employee_deductions")
  }
};
