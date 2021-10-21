module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Courses",
      [
        {
          courseCode: "COM 101",
          courseTitle: "Introduction to Computer",
          semesterId: 1,
          lecturerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseCode: "COM 121",
          courseTitle: "introduction to Digital Electronics",
          semesterId: 1,
          lecturerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseCode: "EEE 111",
          courseTitle: "Introduction to Electronics",
          semesterId: 1,
          lecturerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Courses", null, {});
  },
};

