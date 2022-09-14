const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    mobile: {
        type: Number,
        required: 'Mobile number is required',
        unique: true
    },
    subject: {
        type: String,
        required: 'Subject is required'
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema);