'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    drinkId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: "userId"})
    Review.belongsTo(models.Drink, { foreignKey: "drinkId" })
  };
  return Review;
};