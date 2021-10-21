module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Weeks",
      [
        {
          weekNumber: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          weekNumber: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          weekNumber: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          weekNumber: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Levels", null, {});
  },
};
