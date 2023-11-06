const { DataTypes } = require("sequelize");
const modelDependencies = {
  Ticket: ["Customer"],
};

module.exports = {
  name: "Ticket",
  define: (sequelize) => {
    const Ticket = sequelize.define("Ticket", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      sold: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });
    return Ticket;
  },
};
