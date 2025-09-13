import React, { useEffect, useState } from "react";
import NavAdmin from "../navAdmin";
import Header from "../header";
import Footer from "../footer";
import axios from "axios";

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", grade: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch students
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/students");
      console.log("Received students from API:", res.data); // debug log
      setStudents(Array.isArray(res.data) ? res.data : []);
      setError("");
    } catch (err) {
      console.error("API fetch error:", err); // log error for debugging
      setStudents([]);
      setError(
        err.response?.data?.message
          ? `Failed to fetch students: ${err.response.data.message}`
          : "Failed to fetch students"
      );
    }
    setLoading(false);
  };

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create student
  const handleCreate = async (e) => {
    e.preventDefault();
    // Frontend validation
    if (!form.name.trim() || !form.grade.trim()) {
      setError("Name and grade are required.");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/api/students", form);
      setForm({ name: "", grade: "" });
      setError("");
      fetchStudents();
    } catch (err) {
      setError(
        err.response?.data?.message
          ? `Failed to create student: ${err.response.data.message}`
          : "Failed to create student"
      );
    }
    setLoading(false);
  };

  // Edit student
  const handleEdit = (student) => {
    setEditId(student.id);
    setForm({ name: student.name, grade: student.grade });
  };

  // Update student
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`/api/students/${editId}`, form);
      setEditId(null);
      setForm({ name: "", grade: "" });
      fetchStudents();
    } catch (err) {
      setError("Failed to update student");
    }
    setLoading(false);
  };

  // Delete student
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/students/${id}`);
      fetchStudents();
    } catch (err) {
      setError("Failed to delete student");
    }
    setLoading(false);
  };

  return (
    <>
      <NavAdmin />
      <Header />
      <div className="pc-container">
        <div className="pc-content">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="card">
                <div className="card-body">
                  <h3>{editId ? "Edit Student" : "Add Student"}</h3>
                  <form onSubmit={editId ? handleUpdate : handleCreate}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Grade</label>
                      <input
                        type="text"
                        className="form-control"
                        name="grade"
                        value={form.grade}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      {editId ? "Update" : "Add"}
                    </button>
                    {editId && (
                      <button
                        type="button"
                        className="btn btn-secondary ms-2"
                        onClick={() => {
                          setEditId(null);
                          setForm({ name: "", grade: "" });
                        }}
                      >
                        Cancel
                      </button>
                    )}
                  </form>
                  {error && <div className="alert alert-danger mt-2">{error}</div>}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="card">
                <div className="card-body">
                  <h3>Student List</h3>
                  {/* Table lists students with Edit/Delete actions */}
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Grade</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(Array.isArray(students) ? students : []).length === 0 ? (
                          <tr>
                            <td colSpan="3" className="text-center">
                              No students found.
                            </td>
                          </tr>
                        ) : (
                          (Array.isArray(students) ? students : []).map((student, idx) => (
                            <tr key={student.id ?? idx}>
                              <td>{student.name}</td>
                              <td>{student.grade}</td>
                              <td>
                                <button
                                  className="btn btn-sm btn-info me-2"
                                  onClick={() => handleEdit(student)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => handleDelete(student.id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
