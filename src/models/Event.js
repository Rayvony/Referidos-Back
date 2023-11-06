const { DataTypes } = require("sequelize");
const modelDependencies = {
  Event: ["Ticket", "User"],
};
module.exports = {
  name: "Event",
  define: (sequelize) => {
    const Event = sequelize.define("Event", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
    return Event;
  },
};
