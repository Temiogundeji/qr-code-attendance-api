"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      courseCode: {
        type: Sequelize.STRING,
      },
      courseTitle: {
        type: Sequelize.STRING,
      },
      lecturerId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Lecturers",
          key: "id",
          as: "lecturerId",
        },
        allowNull: false,
      },
      semesterId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Semesters",
          key: "id",
          as: "semesterId",
        },
        allowNull: false,
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
    await queryInterface.dropTable("Courses");
  },
};
