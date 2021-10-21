module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      profilePics: {
        type: Sequelize.STRING,
      },
      matricNum: {
        type: Sequelize.STRING,
      },
      departmentId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Departments",
          key: "id",
          as: "departmentId",
        },
      },
      levelId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Levels",
          key: "id",
          as: "levelId",
        },
      },
      genderId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Genders",
          key: "id",
          as: "genderId",
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
    await queryInterface.dropTable("Students");
  },
};
