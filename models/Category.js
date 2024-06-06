const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, /* id is an integer (whole number) */
      allowNull: false, /* id cannot be null */
      primaryKey: true, /* has to be primary key to be used as for a foreign key */
      autoIncrement: true, /* automatically increase by 1 each time a new category is created */
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false, /* category name must not be an empty string */
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
