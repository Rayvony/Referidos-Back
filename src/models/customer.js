const { DataTypes } = require("sequelize");
const modelDependencies = {
  Customer: ["Ticket", "Event", "Price"],
};

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
