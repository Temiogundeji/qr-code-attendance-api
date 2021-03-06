"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lecturer.belongsTo(models.Department, {
        foreignKey: "departmentId",
        onDelete: "CASCADE",
      });
      Lecturer.hasMany(models.Class, {
        foreignKey: "lecturerId",
        onDelete: "CASCADE",
      });
    }
  }
  Lecturer.init(
    {
      departmentId: DataTypes.INTEGER,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      profilePics: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Lecturer",
    }
  );
  return Lecturer;
};
