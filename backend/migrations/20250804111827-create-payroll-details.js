"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payroll_details", {
      payroll_detail_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      period_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "payroll_periods",
          key: "period_id",
        },
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "employees",
          key: "employee_id",
        },
      },
      total_working_days: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_attendance_days: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      base_salary: {
        type: Sequelize.DECIMAL(15, 0),
        allowNull: false,
      },
      total_allowances: {
        type: Sequelize.DECIMAL(15, 0),
        allowNull: false,
      },
      total_overtime_pay: {
        type: Sequelize.DECIMAL(15, 0),
        allowNull: false,
      },
      gross_salary: {
        type: Sequelize.DECIMAL(15, 0),
        allowNull: false,
      },
      pph21_deduction: {
        type: Sequelize.DECIMAL(15, 0),
        allowNull: false,
        defaultValue: 0,
      },
      bpjs_kesehatan_deduction: {
        type: Sequelize.DECIMAL(15, 0),
        allowNull: false,
        defaultValue: 0,
      },
      bpjs_ketenagakerjaan_deduction: {
        type: Sequelize.DECIMAL(15, 0),
        allowNull: false,
        defaultValue: 0,
      },
      other_deductions: {
        type: Sequelize.DECIMAL(15, 0),
        allowNull: false,
      },
      total_deductions: {
        type: Sequelize.DECIMAL(15, 0),
        allowNull: false,
      },
      net_salary: {
        type: Sequelize.DECIMAL(15, 0),
        allowNull: false,
      },
      payroll_status: {
        type: Sequelize.ENUM("draft", "final"),
        allowNull: false,
        defaultValue: "draft",
      },
      is_paid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      payment_date: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
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
        defaultValue: null,
      },
    });
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.dropTable('payroll_details');
  },
};
