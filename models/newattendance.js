"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NewAttendance extends Model {
    static associate(models) {
      // define association here
      NewAttendance.belongsTo(models.Student, {
        foreignKey: "studentId",
        onDelete: "CASCADE",
      });

      NewAttendance.belongsTo(models.Lecturer, {
        foreignKey: "lecturerId",
        onDelete: "CASCADE",
      });
    }
  }
  NewAttendance.init(
    {
      studentId: DataTypes.INTEGER,
      classId: DataTypes.INTEGER,
      lecturerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "NewAttendance",
    }
  );
  return NewAttendance;
};
