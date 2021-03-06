"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      // define association here
      Attendance.belongsTo(models.Student, {
        foreignKey: "studentId",
        onDelete: "CASCADE",
      });

      Attendance.belongsTo(models.Lecturer, {
        foreignKey: "lecturerId",
        onDelete: "CASCADE",
      });
    }
  }
  Attendance.init(
    {
      studentId: DataTypes.INTEGER,
      classId: DataTypes.INTEGER,
      lecturerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Attendance",
    }
  );
  return Attendance;
};
