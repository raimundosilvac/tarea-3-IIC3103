'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      operation: {
        type: Sequelize.INTEGER
      },
      originBank: {
        type: Sequelize.INTEGER
      },
      originAccount: {
        type: Sequelize.INTEGER
      },
      destinationBank: {
        type: Sequelize.INTEGER
      },
      destinationAccount: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.BIGINT
      },
      publishTime: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};