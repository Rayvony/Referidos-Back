const { DataTypes } = require("sequelize");

module.exports = {
  name: "Type",
  define: (sequelize) => {
    const Type = sequelize.define("Type", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Puedes usar una función para generar UUIDs aleatorios
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    });
    return Type;
  },
};
