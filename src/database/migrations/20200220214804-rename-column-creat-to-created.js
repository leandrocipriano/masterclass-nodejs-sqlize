'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.renameColumn(
      'users', 
      'create_at', 
      'created_at'
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      'users', 
      'created_at', 
      'create_at'
      );
  }
};
