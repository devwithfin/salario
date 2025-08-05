'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("overtime_requests", {
    request_id : {
      type : Sequelize.INTEGER,
      primaryKey : true, 
      autoIncrement : true,
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
    request_date : {
      type : Sequelize.DATE,
      allowNull : false,
      defaultValue : Sequelize.NOW
    },
    overtime_date : {
      type : Sequelize.DATEONLY,
      allowNull : false,
    },
    start_time : {
      type : Sequelize.TIME,
      allowNull : false,
    },
    end_time : {
      type : Sequelize.TIME,
      allowNull : false,
    }, 
    reason : {
      type : Sequelize.TEXT,
      allowNull : false,
    },
    submitted_by : {
      type : Sequelize.INTEGER,
      allowNull : false,
      references : {
        model : "employees", 
        key : "employee_id"
      }
    },
    approval_status : {
      type : Sequelize.ENUM("pending", "approved", "rejected"),
      allowNull : false,
      defaultValue : "pending"
    },
    approved_by_hrd : {
      type : Sequelize.INTEGER,
      allowNull : true,
      references : {
        model : "employees",
        key : "employee_id"
      }
    },
    approval_date_hrd : {
      type : Sequelize.DATEONLY,
      allowNull : true
    },
    notes_approval : {
      type : Sequelize.TEXT,
      allowNull : true
    },
     created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("overtime_requests")
  }
};
