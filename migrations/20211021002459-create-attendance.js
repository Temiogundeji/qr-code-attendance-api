"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Attendances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      studentId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Students",
          key: "id",
          as: "studentId",
        },
      },
      classId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Classes",
          key: "id",
          as: "classId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Attendances");
  },
};
