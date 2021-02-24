const mongoose = require('mongoose');

const item = mongoose.Schema({
    name: String,
    checked: {
        type: Boolean,
        default: false
    }
}, {
    _id: false
});

const schema = mongoose.Schema({
    title: {
        type: String,
        default: "Untitled"
    },
    items: {
        type: [item],
        default: [{
            name: '',
            checked: false
        }]
    }
});

module.exports = mongoose.model('List', schema);
