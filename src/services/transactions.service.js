const { Transactions } = require('../models');

class TransactionsService {
    async createTransaction(transaction) {
        try {
            const transactionDetails = await Transactions.create(transaction);
            return transactionDetails;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = TransactionsService;