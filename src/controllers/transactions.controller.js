const express = require('express')
const helper = require('../helpers/decode.helper')
const router = express.Router()

router.post('/', (req, res) => {
    try{
        const transaction = req.body
        console.log(helper.transactionDetails(transaction))
        res.status(200).json(transaction)
    }catch(err){
        if (err.message === 'Invalid data sent') {
            res.status(400).json({message: err.message})
        } else {
            res.status(500).json({message: err.message})
        }
    }
}) 

module.exports = router