// function to decode base64 to utf-8
const decodeBase64 = (data) => {
    return Buffer.from(data, 'base64').toString('utf-8')
}

const validateData = (data) => {
    // validate if the data is a string of 64 digits
    if (typeof Number(data) !== 'number' || data.length !== 64) {
        throw new Error('Invalid data sent')
    }
    return true
}

const sliceData = (data) => {
    if (!validateData(data)) return false
    return contents = {
        id: Number(data.slice(4, 14)),
        operation: Number(data.slice(0, 4)),
        originBank: Number(data.slice(14, 21)),
        originAccount: Number(data.slice(21, 31)),
        destinationBank: Number(data.slice(31, 38)),
        destinationAccount: Number(data.slice(38, 48)),
        amount: Number(data.slice(48, 64))
    }
}

const transactionDetails = (transaction) => {
    contents = sliceData(decodeBase64(transaction.message.data))
    contents.publishTime = transaction.message.publishTime
    return contents
}


module.exports = { transactionDetails }