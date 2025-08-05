'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable("employees", {
      employee_id : {
        type : Sequelize.INTEGER, 
        primaryKey : true, 
        autoIncrement : true, 
        allowNull : false 
      },
      position_id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : "positions",
          key : "position_id"
        },
        onUpdate : "CASCADE",
        onDelete : "RESTRICT"
      },
      department_id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : "departments",
          key : "department_id"
        },
        onUpdate : "CASCADE",
        onDelete : "RESTRICT"
      },
      user_id : {
        type : Sequelize.INTEGER,
        allowNull : true,
        unique : true
      }, 
      role : {
        type : Sequelize.ENUM("hr", "finance", "employee"),
        allowNull : false
      },
      employee_nik : {
        type : Sequelize.STRING(20),
        allowNull : false,
        unique : true
      },
      full_name : {
        type : Sequelize.STRING(100),
        allowNull : false,
      },
      dob : {
        type : Sequelize.DATEONLY,
        allowNull : false,
      },
      gender : {
        type : Sequelize.ENUM("M", "W"),
        allowNull : false,
      },
       address : {
        type : Sequelize.TEXT,
        allowNull : false,
      },
       phone_number : {
        type : Sequelize.STRING(15),
        allowNull : false,
      },
      email : {
        type : Sequelize.STRING(100),
        allowNull : false,
        unique : true
      },
      employment_status : {
        type : Sequelize.ENUM("permanent", "intern", "resigned"),
        allowNull : false,
      }, 
      join_date : {
        type : Sequelize.DATEONLY,
        allowNull : false,
      },
       resignation_date : {
        type : Sequelize.DATEONLY,
        allowNull : true,
      },
      ptkp : {
        type : Sequelize.ENUM("TK0", "TK1", "TK2", "TK3", "K0", "K1", "K2", "K3"),
        allowNull : false,
      }, 
      bank_name : {
        type : Sequelize.ENUM("Bank Mandiri", "Bank Central Asia", "Bank Nasional Indonesia", "Bank Rakyat Indonesia"),
        allowNull : false,
      },
      bank_account_number : {
        type : Sequelize.STRING(50),
        allowNull : false,
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
      await queryInterface.dropTable("employees")
  }
};
