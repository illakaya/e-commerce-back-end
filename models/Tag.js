const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, /* id is an integer (whole number) */
      allowNull: false, /* id cannot be null */
      primaryKey: true, /* has to be primary key to be used as for a foreign key */
      autoIncrement: true, /* automatically increase by 1 each time a new category is created */
    },
    tag_name: {
      type: DataTypes.STRING, /* product name is to be a string, readME did not specify the allowNull property */
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
