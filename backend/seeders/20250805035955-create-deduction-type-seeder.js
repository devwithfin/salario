"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("deduction_types", [
      {
        deduction_name: "Pinjaman Karyawan",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("deduction_types", null, {});
    await queryInterface.sequelize.query(
      "ALTER TABLE deduction_types AUTO_INCREMENT = 1"
    );
  },
};
