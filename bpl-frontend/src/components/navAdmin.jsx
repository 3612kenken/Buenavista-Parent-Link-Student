import React from "react";

export default function NavAdmin() {
  return (
    <nav className="pc-sidebar">
      <div className="navbar-wrapper">
        <div className="m-header">
          <a href="/dashboard/index.html" className="b-brand text-primary">
            <img src="/assets/bpl.png" alt="" className="logo logo-lg" />
          </a>
        </div>
        <div className="navbar-content">
          <ul className="pc-navbar">
            <li className="pc-item pc-caption">
              <label>Dashboard</label>
              <i className="ti ti-dashboard"></i>
            </li>
            <li className="pc-item active">
              <a href="/dashboard/index.html" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-dashboard"></i>
                </span>
                <span className="pc-mtext">Student Performance</span>
              </a>
            </li>

            <li className="pc-item pc-caption">
              <label>Masterlists</label>
              <i className="ti ti-apps"></i>
            </li>
            <li className="pc-item">
              <a href="/elements/bc_typography.html" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-users"></i>
                </span>
                <span className="pc-mtext">Students List</span>
              </a>
            </li>
            <li className="pc-item">
              <a href="/elements/bc_color.html" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-menu-2"></i>
                </span>
                <span className="pc-mtext">Subjects List</span>
              </a>
            </li>
            <li className="pc-item">
              <a href="/elements/icon-tabler.html" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-news"></i>
                </span>
                <span className="pc-mtext">Curriculum Lists</span>
              </a>
            </li>

            <li className="pc-item pc-caption">
              <label>Reports</label>
              <i className="ti ti-news"></i>
            </li>
            <li className="pc-item">
              <a
                className="pc-link"
                target="_blank"
                href="/pages/login-v3.html"
              >
                <span className="pc-micon">
                  <i className="ti ti-list"></i>
                </span>
                <span className="pc-mtext">Attendance</span>
              </a>
            </li>
            <li className="pc-item">
              <a
                href="/pages/register-v3.html"
                target="_blank"
                className="pc-link"
              >
                <span className="pc-micon">
                  <i className="ti ti-trending-up"></i>
                </span>
                <span className="pc-mtext">Performance</span>
              </a>
            </li>

            <li className="pc-item">
              <a
                href="/pages/register-v3.html"
                target="_blank"
                className="pc-link"
              >
                <span className="pc-micon">
                  <i className="ti ti-math-symbols"></i>
                </span>
                <span className="pc-mtext">Average Grade</span>
              </a>
            </li>

            <li className="pc-item pc-caption">
              <label>Other</label>
              <i className="ti ti-brand-chrome"></i>
            </li>

            <li className="pc-item">
              <a href="/other/sample-page.html" className="pc-link">
                <span className="pc-micon">
                  <i className="ti ti-stack"></i>
                </span>
                <span className="pc-mtext">Form 137</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
