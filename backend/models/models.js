const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    goto: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    playground_title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)