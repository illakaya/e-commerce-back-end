// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Swapped the order as Category to Products is One to Many
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
