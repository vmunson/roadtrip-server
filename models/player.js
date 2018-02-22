'use strict';
module.exports = (sequelize, DataTypes) => {
  var player = sequelize.define('player', {
    player:{
      type: DataTypes.STRING,
			allowNull: false
    },
    occupation: {
      type: DataTypes.STRING,
			allowNull: false
    },
    carType:{
      type: DataTypes.STRING,
			allowNull: false
    },
    owner: DataTypes.INTEGER
  });
  return player;
};