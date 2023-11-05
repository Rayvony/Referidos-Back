const { DataTypes } = require("sequelize");

module.exports = {
  name: "Ticket",
  define: (sequelize) => {
    const Ticket = sequelize.define("Ticket", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
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
