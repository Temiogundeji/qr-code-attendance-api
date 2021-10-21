module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Genders",
      [
        {
          genderName: "Male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genderName: "Female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Genders", null, {});
  },
};
