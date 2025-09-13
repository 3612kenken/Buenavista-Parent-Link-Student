const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    subject: { type: String, required: true },
    experience: { type: Number, default: 0 }
});


module.exports = mongoose.model('Teacher_tbl', teacherSchema);
