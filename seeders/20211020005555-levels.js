module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Levels",
      [
        {
          levelName: "ND1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelName: "ND2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelName: "HND1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelName: "HND2",
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
