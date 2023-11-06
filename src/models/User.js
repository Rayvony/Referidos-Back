const { DataTypes } = require("sequelize");

module.exports = {
  name: "User",
  define: (sequelize) => {
    const User = sequelize.define("User", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // Puedes usar una función para generar UUIDs aleatorios
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
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
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    });
    return User;
  },
};
