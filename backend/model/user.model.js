const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    address: 'string',
    name: 'string',
    email: 'string',
    createDate: 'date',
    updatedDate: 'date',
},
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at' } });

const User = mongoose.model('depositHistory', userSchema);

module.exports = {
    User
}
