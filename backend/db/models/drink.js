'use strict';

module.exports = (sequelize, DataTypes) => {
  const Drink = sequelize.define('Drink', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
    },
    drinkImg: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Drink.associate = function(models) {
    Drink.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Drink;
};