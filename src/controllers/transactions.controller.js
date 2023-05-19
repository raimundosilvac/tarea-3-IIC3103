const express = require('express')
const helper = require('../helpers/decode.helper')
const router = express.Router()
const TransactionsService = require('../services/transactions.service')

const transactionsService = new TransactionsService()

router.post('/', async (req, res) => {
    try{
        const transaction = req.body
        const transactionDetails = helper.transactionDetails(transaction)
        const transactionCreted = await transactionsService.createTransaction(transactionDetails)
        console.log(transactionCreted)
        res.status(200).json(transaction)
    }catch(err){
        if (err.message === 'Invalid data sent') {
            res.status(400).json({message: err.message})
        } else {
            res.status(500).json({message: err.message})
            console.log(err)
        }
    }
}) 

module.exports = router