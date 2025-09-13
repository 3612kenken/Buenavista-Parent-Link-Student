const express = require('express');
const router = express.Router();

// Example student data (replace with DB integration)
let students = [
  { id: 1, name: 'John Doe', grade: 'A' },
  { id: 2, name: 'Jane Smith', grade: 'B' }
];

// Get all students
router.get('/', (req, res) => {
  console.log("Sending students array:", students); // debug log
  res.json(students);
});

// Optional: Seed/reset students for testing
router.post('/seed', (req, res) => {
  students = [
    { id: 1, name: 'John Doe', grade: 'A' },
    { id: 2, name: 'Jane Smith', grade: 'B' },
    { id: 3, name: 'Alice Brown', grade: 'C' }
  ];
  res.json({ message: 'Students seeded', students });
});

// Get single student by ID
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
});

// Create new student
router.post('/', (req, res) => {
  const { name, grade } = req.body;
  if (!name || !grade) {
    return res.status(400).json({ message: 'Name and grade are required' });
  }
  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    grade
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// Update student
router.put('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: 'Student not found' });
  const { name, grade } = req.body;
  if (!name || !grade) {
    return res.status(400).json({ message: 'Name and grade are required' });
  }
  student.name = name;
  student.grade = grade;
  res.json(student);
});

// Delete student
router.delete('/:id', (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Student not found' });
  const deleted = students.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
