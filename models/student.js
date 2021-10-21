"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.Level, {
        foreignKey: "levelId",
        onDelete: "CASCADE",
      });

      Student.belongsTo(models.Department, {
        foreignKey: "departmentId",
        onDelete: "CASCADE",
      });

      Student.hasOne(models.Gender, {
        foreignKey: "genderId",
        onDelete: "CASCADE",
      });

      Student.hasMany(models.Attendance, {
        foreignKey: "studentId",
      });
    }
  }
  Student.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      levelId: DataTypes.INTEGER,
      genderId: DataTypes.INTEGER,
      departmentId: DataTypes.INTEGER,
      profilePics: DataTypes.STRING,
      matricNum: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
