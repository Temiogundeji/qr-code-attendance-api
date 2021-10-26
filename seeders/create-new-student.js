module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Students",
      [
        {
          username: "adesare",
          email: "adesare@gmail.com",
          password:
            "$2b$10$XenvLTB9GfVimikNna9jSOFivzvbswYUcsIh74JZ0yzC9T2gzLyCG",
          profilePics:
            "loudinary.com/temiogundeji/image/upload/v1634750305/eebcbv5lu57tywkznqyn.jpg",
          matricNum: "H/CS/20/1928",
          levelId: 2,
          departmentId: 1,
          genderId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "omolola",
          email: "omolola@gmail.com",
          password:
            "$2b$10$.2LBtnkqoA1u3.aCsLLI6.fZDPO0nm0wmcSi8Hpn1S6e2pOLAhtgS",
          profilePics:
            "loudinary.com/temiogundeji/image/upload/v1634750305/eebcbv5lu57tywkznqyn.jpg",
          matricNum: "H/CS/20/1931",
          levelId: 1,
          departmentId: 2,
          genderId: 2,
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
