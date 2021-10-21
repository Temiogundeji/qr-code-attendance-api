"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class.belongsTo(models.Level, {
        foreignKey: "levelId",
        onDelete: "CASCADE",
      });
      Class.belongsTo(models.Program, {
        foreignKey: "programId",
        onDelete: "CASCADE",
      });

      Class.belongsTo(models.Week, {
        foreignKey: "weekId",
        onDelete: "CASCADE",
      });

      Class.belongsTo(models.Course, {
        foreignKey: "courseId",
        onDelete: "CASCADE",
      });
    }
  }
  Class.init(
    {
      levelId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
      programId: DataTypes.INTEGER,
      weekId: DataTypes.INTEGER,
      remarks: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Class",
    }
  );
  return Class;
};
