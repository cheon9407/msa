'use strict';
module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define('Items', {
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER
  }, {});
  Items.associate = function(models) {
    // associations can be defined here
  };
  return Items;
};