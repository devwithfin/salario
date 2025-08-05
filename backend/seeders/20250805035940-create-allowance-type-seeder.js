"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("allowance_types", [
      {
        allowance_name: "Tunjangan Makan",
        is_fixed: true,
        amount: 300000,
      },
      {
        allowance_name: "Tunjangan Transport",
        is_fixed: true,
        amount: 500000,
      },
      {
        allowance_name: "Tunjangan Jabatan",
        is_fixed: true,
        amount: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("allowance_types", null, {});
    await queryInterface.sequelize.query(
      "ALTER TABLE allowances AUTO_INCREMENT = 1"
    );
  },
};
