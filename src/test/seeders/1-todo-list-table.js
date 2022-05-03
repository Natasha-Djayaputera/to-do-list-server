const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tasklists", {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      task: {
        allowNull: false,
        field: "task",
        type: DataTypes.STRING(2_048),
      },
      isDone: {
        allowNull: false,
        defaultValue: false,
        field: "isDone",
        type: DataTypes.BOOLEAN,
      },
      dueDate: {
        allowNull: true,
        defaultValue: null,
        field: "dueDate",
        type: DataTypes.DATEONLY,
      },
      tagNames: {
        allowNull: true,
        defaultValue: null,
        field: "tagNames",
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      listName: {
        allowNull: true,
        defaultValue: null,
        field: "listName",
        type: DataTypes.STRING(128),
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        field: "createdAt",
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        field: "updatedAt",
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        defaultValue: null,
        field: "deletedAt",
        type: DataTypes.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tasklists");
  },
};
