module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Students",
      [
        {
          username: "someone",
          email: "abc@gmail.com",
          password: "abc",
          matricNum: "H/CS/19/1128",
          levelId: 4,
          departmentId: 1,
          profilePics: "facebook.com/img",
          genderId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "cardo",
          email: "someonespecial@gmail.com",
          password: "musiak123",
          matricNum: "H/CS/19/1628",
          levelId: 1,
          departmentId: 1,
          profilePics: "facebook.com/img",
          genderId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "xpat",
          email: "whoareyou@gmail.com",
          password: "tijani__",
          matricNum: "H/CS/19/1928",
          levelId: 1,
          departmentId: 1,
          profilePics: "facebook.com/img",
          genderId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Students", null, {});
  },
};
