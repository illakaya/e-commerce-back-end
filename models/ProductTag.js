const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // This table is the many to many relation that relates the product and tag table/model
    id: {
      type: DataTypes.INTEGER, /* id is an integer (whole number) */
      allowNull: false, /* id cannot be null */
      primaryKey: true, /* each value is unique */
      autoIncrement: true, /* automatically increase by 1 each time a new product tag relationship is created */
    },
    // This column will store a reference of the "id" of the "product"
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    // This column will store a reference of the "id" of the "tag"
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
