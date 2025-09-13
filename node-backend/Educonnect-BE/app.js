require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

app.use(cors({
  origin: true, // or use: origin: ['http://localhost:5173', 'https://yourdomain.com']
  credentials: true
})); // ✅ allow frontend requests
app.use(express.json());

// Routes
const studentApi = require('./api/apiStudents');
const teacherRoutes = require('./routes/teacherRoutes');

app.use('/api/students', studentApi);
app.use('/api/teachers', teacherRoutes);


// Start server here (NOT inside db.js)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

