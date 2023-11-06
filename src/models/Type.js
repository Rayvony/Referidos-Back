const { DataTypes } = require("sequelize");
const modelDependencies = {
  Type: ["User"],
};

module.exports = {
  name: "Type",
  define: (sequelize) => {
    const Type = sequelize.define("Type", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
