const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student_tbl' },
  subject: String,
  grade: String
});

module.exports = mongoose.model('Grade_tbl', gradeSchema);
