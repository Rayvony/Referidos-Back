require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/referidos`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
//carga automatica de modelos

const basename = path.basename(__filename);
const modelDefiners = [];
// Objeto para almacenar las definiciones de modelos
const modelDefinitions = {};

// Lee y carga las definiciones de modelos
fs.readdirSync(path.join(__dirname, "/models"))
  .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, "/models", file));
    const modelName = modelDefiner.name; // Supongamos que cada definición tiene una propiedad "name" que es el nombre del modelo
    modelDefiners.push(modelDefiner);
    modelDefinitions[modelName] = modelDefiner;
  });

// Función para cargar los modelos resolviendo dependencias
const loadModels = (modelDefs, modelDeps) => {
  const loadedModels = new Set();

  const loadModel = (modelName) => {
    if (!loadedModels.has(modelName)) {
      const modelDef = modelDefs[modelName];

      if (modelDeps[modelName]) {
        modelDeps[modelName].forEach((depName) => {
          loadModel(depName);
        });
      }
      modelDef.define(sequelize); // Carga el modelo
      loadedModels.add(modelName);
    }
  };

  // Inicializa el proceso de carga
  Object.keys(modelDefs).forEach((modelName) => {
    loadModel(modelName);
  });
};

// Define las dependencias entre modelos (supongamos que cada modelo tiene una propiedad "dependencies" que es un arreglo de nombres de modelos en los que depende)
const modelDependencies = {};
Object.keys(modelDefinitions).forEach((modelName) => {
  const dependencies = modelDefinitions[modelName].dependencies || [];
  modelDependencies[modelName] = dependencies;
});

// Carga los modelos en el orden correcto
loadModels(modelDefinitions, modelDependencies);
// Capitaliza los nombres de modelos
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map(([modelName, modelDefinition]) => [modelName.charAt(0).toUpperCase() + modelName.slice(1), modelDefinition]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Type, Event, Ticket, Customer } = sequelize.models;

User.hasOne(Type, {
  foreignKey: "typeId",
  as: "userType",
});

Event.hasMany(Ticket, {
  foreignKey: "eventId",
  as: "tickets",
});

Event.belongsToMany(User, {
  through: "UserEvent",
  foreignKey: "eventId",
  otherKey: "userId",
});

Ticket.belongsToMany(Customer, { through: "TicketCustomer" });
Customer.belongsToMany(Ticket, { through: "TicketCustomer" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
