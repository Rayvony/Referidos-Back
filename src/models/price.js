const { DataTypes } = require("sequelize");

module.exports = {
  name: "Price",
  define: (sequelize) => {
    const Price = sequelize.define("Price", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: 1,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    });
    return Price;
  },
};
