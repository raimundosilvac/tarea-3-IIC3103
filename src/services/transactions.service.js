const { transactions } = require('../models');

class TransactionsService {
    async createTransaction(transaction) {
        try {
            const transactionDetails = await transactions.create(transaction);
            return transactionDetails;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = TransactionsService;