const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student_tbl' },
  subject: String,
  score: Number
});

module.exports = mongoose.model('Performance_tbl', performanceSchema);
