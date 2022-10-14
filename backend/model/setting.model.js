const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
    lastFetchedBlock: 'number',
    createDate: 'date',
    updatedDate: 'date',
},
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at' } });

const Setting = mongoose.model('setting', settingSchema);

module.exports = {
    Setting
}
