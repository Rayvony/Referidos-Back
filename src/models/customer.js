const { DataTypes } = require("sequelize");

module.exports = {
  name: "Customer",
  define: (sequelize) => {
    const Customer = sequelize.define("Customer", {
      dni: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Customer;
  },
};
