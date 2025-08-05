"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("attendances", {
      attendance_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allwoNull: false,
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "employees",
          key: "employee_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      attendance_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      clock_in_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      clock_out_time: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM("present", "sick", "leave", "absent"),
        allowNul: false,
        defaultValue: "present",
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("attendances");
  },
};
