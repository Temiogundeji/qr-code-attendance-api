module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "NewAttendances",
      [
        {
          studentId: 4,
          classId: 1,
          lecturerId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 5,
          classId: 1,
          lecturerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("NewAttendances", null, {});
  },
};
