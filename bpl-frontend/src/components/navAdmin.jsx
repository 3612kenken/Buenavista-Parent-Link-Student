import React from "react";
import { Link } from "react-router-dom";

export default function NavAdmin() {
  return (
    <nav className="pc-sidebar">
      <div className="navbar-wrapper">
        <div className="m-header">
          <Link to="/dashboard/index.html" className="b-brand text-primary">
            <img src="/assets/bpl.png" alt="" className="logo logo-lg" />
          </Link>
        </div>
        <div className="navbar-content">
          <ul className="pc-navbar">
            <li className="pc-item pc-caption">
              <label>Dashboard</label>
              <i className="ti ti-dashboard"></i>
            </li>
            <li className="pc-item active">
              <Link to="/" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-dashboard"></i>
                </span>
                <span className="pc-mtext">Student Performance</span>
              </Link>
            </li>

            <li className="pc-item pc-caption">
              <label>Masterlists</label>
              <i className="ti ti-apps"></i>
            </li>
            <li className="pc-item">
              <Link to="/profile" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-users"></i>
                </span>
                <span className="pc-mtext">Students List</span>
              </Link>
            </li>
            <li className="pc-item">
              <Link to="/subjects" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-menu-2"></i>
                </span>
                <span className="pc-mtext">Subjects List</span>
              </Link>
            </li>
              <li className="pc-item">
              <Link to="/manageStudents" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-menu-2"></i>
                </span>
                <span className="pc-mtext">Manage Students</span>
              </Link>
            </li>
            <li className="pc-item">
              <Link to="/curriculum" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-news"></i>
                </span>
                <span className="pc-mtext">Curriculum Lists</span>
              </Link>
            </li>

            <li className="pc-item pc-caption">
              <label>Reports</label>
              <i className="ti ti-news"></i>
            </li>
            <li className="pc-item">
              <Link to="/attendance" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-list"></i>
                </span>
                <span className="pc-mtext">Attendance</span>
              </Link>
            </li>
            <li className="pc-item">
              <Link to="/performance" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-trending-up"></i>
                </span>
                <span className="pc-mtext">Performance</span>
              </Link>
            </li>

            <li className="pc-item">
              <Link to="/average-grade" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-math-symbols"></i>
                </span>
                <span className="pc-mtext">Average Grade</span>
              </Link>
            </li>

            <li className="pc-item pc-caption">
              <label>Other</label>
              <i className="ti ti-brand-chrome"></i>
            </li>

            <li className="pc-item">
              <Link to="/form-137" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-stack"></i>
                </span>
                <span className="pc-mtext">Form 137</span>
              </Link>
            </li>

            {/* External Link Example */}
            <li className="pc-item">
              <a
                href="https://www.external-site.com"
                target="_blank"
                className="pc-link"
                rel="noopener noreferrer"
              >
                <span className="pc-micon">
                  <i className="ti ti-link"></i>
                </span>
                <span className="pc-mtext">External Link</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
