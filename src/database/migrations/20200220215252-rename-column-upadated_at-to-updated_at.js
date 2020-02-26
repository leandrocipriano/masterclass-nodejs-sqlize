'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.renameColumn(
      'users', 
      'upadated_at', 
      'updated_at'
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      'users', 
      'updated_at', 
      'upadated_at'
      );
  }
};
