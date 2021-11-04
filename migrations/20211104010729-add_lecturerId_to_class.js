module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Classes", "lecturerId", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Lecturers",
          key: "id",
          as: "lecturerId",
        },
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.removeColumn("Classes", "lecturerId")]);
  },
};
