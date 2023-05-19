'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transactions.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    operation: DataTypes.INTEGER,
    originBank: DataTypes.INTEGER,
    originAccount: DataTypes.INTEGER,
    destinationBank: DataTypes.INTEGER,
    destinationAccount: DataTypes.INTEGER,
    amount: DataTypes.BIGINT,
    publishTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};