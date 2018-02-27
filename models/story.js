'use strict';
module.exports = (sequelize, DataTypes) => {
  var story = sequelize.define('story', {
    location: DataTypes.STRING,
    owner: DataTypes.INTEGER
  });
  return story;
};