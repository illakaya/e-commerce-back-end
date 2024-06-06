// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, /* id is an integer (whole number) */
      allowNull: false, /* id cannot be null */
      primaryKey: true, /* has to be primary key to be used as for a foreign key */
      autoIncrement: true, /* automatically increase by 1 each time a new category is created */
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false, /* product name must not be an empty string */
    },
    price: {
      type: DataTypes.DECIMAL(10, 2) /* 10 digits in total, 2 decimal places */,
      allowNull: false, /* price cannot be null*/
      validate: {
        isNumeric: true, /* checks if the input is a number */
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false, /* stock is to be assigned an integer and cannot be null */
      validate: {
        isInt: true, /* checks if the input is an integer (whole number) */
      },
    },
    // This column will store a reference of the "id" of the "category" that the product fits into
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
