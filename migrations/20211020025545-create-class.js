"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Classes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      levelId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Levels",
          key: "id",
          as: "levelId",
        },
        allowNull: false,
      },
      courseId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Courses",
          key: "id",
          as: "courseId",
        },
        allowNull: false,
      },
      programId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Programs",
          key: "id",
          as: "programId",
        },
        allowNull: false,
      },
      weekId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Weeks",
          key: "id",
          as: "Weeks",
        },
        allowNull: false,
      },
      remarks: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Classes");
  },
};
