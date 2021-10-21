module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Attendances",
      [
        {
          studentId: 4,
          classId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 5,
          classId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Attendances", null, {});
  },
};
