const product = require("./model");
const category = require("../category/model");

product.hasOne(category, { foreignKey: "id" });
category.belongsTo(product, { foreignKey: "categoryId" });

return {
  category,
  product,
};
