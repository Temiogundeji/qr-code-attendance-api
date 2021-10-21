module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Lecturers",
      [
        {
          departmentId: 1,
          username: "akinodun",
          email: "john@doe.com",
          password: "123456789",
          profilePics: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departmentId: 2,
          username: "akinade",
          email: "john@smith.com",
          password: "123456789",
          profilePics:
            "https://miro.medium.com/fit/c/96/96/1*q7r1sgssw85tgML8NTqYOA.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departmentId: 3,
          username: "olawale",
          email: "john@stone.com",
          password: "123456789",
          profilePics:
            "https://miro.medium.com/fit/c/96/96/1*q7r1sgssw85tgML8NTqYOA.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Lecturers", null, {});
  },
};
