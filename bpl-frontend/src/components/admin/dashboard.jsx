import React from "react";
import { useEffect } from "react";
import NavAdmin from "../navAdmin";
import Scripts from "../scripts"; // <-- import Scripts
import Header from "../header";
import Footer from "../footer";


export default function Dashboard() {
   
    

    return (
    
        <>
 
        <NavAdmin/>

    <Header />
 


    <div className="pc-container">
         
      <div className="pc-content">
  <div className="row">
             <div className="col-xl-4 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                               

                                <div className="input-group mb-3">
                                <label className="input-group-text" for="inputGroupSelect01">Academic Year</label>
                                <select className="form-select" id="inputGroupSelect01">
                                    <option selected disabled>Select...</option>
                                    <option value="2023-2024">2023-2024</option>
                                </select>
                                </div>
                        </div>
                    </div>
                </div>
            </div> 
            
             <div className="col-xl-4 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                               

                                <div className="input-group mb-3">
                                <label className="input-group-text" for="inputGroupSelect01">Grade & Sec</label>
                                <select className="form-select" id="inputGroupSelect01">
                                    <option selected disabled>Select...</option>
                                    <option value="1">1</option>
                                </select>
                             
                                <select className="form-select" id="inputGroupSelect01">
                                    <option selected disabled>Select...</option>
                                    <option value="1">1</option>
                                </select>
                                </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="col-xl-4 col-md-6 ">
                <div className="card bg-danger">
                   <div className="card-body">
                     <h3 className="text-white">Mrs. Sofia Chix</h3>
                    <p className="text-white">Assigned Teacher</p>
                   
                   </div>
                </div>
            </div> 
        </div> 
        <div className="row">
           
      
          <div className="col-xl-4 col-md-6">
            <div className="card bg-secondary-dark dashnum-card text-white overflow-hidden">
              <span className="round small"></span>
              <span className="round big"></span>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="avtar avtar-lg">
                      <i className="text-white ti ti-credit-card"></i>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="btn-group">
                      <a
                        href="#"
                        className="avtar avtar-s bg-secondary text-white dropdown-toggle arrow-none"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li><button className="dropdown-item">Import Card</button></li>
                        <li><button className="dropdown-item">Export</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <span className="text-white d-block f-34 f-w-500 my-2">
                  1350
                  <i className="ti ti-arrow-up-right-circle opacity-50"></i>
                </span>
                <p className="mb-0 opacity-50">Total Students</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card bg-primary-dark dashnum-card text-white overflow-hidden">
              <span className="round small"></span>
              <span className="round big"></span>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="avtar avtar-lg">
                      <i className="text-white ti ti-credit-card"></i>
                    </div>
                  </div>
                  <div className="col-auto">
                    <ul className="nav nav-pills justify-content-end mb-0" id="chart-tab-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link text-white active"
                          id="chart-tab-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#chart-tab-home"
                          role="tab"
                          aria-controls="chart-tab-home"
                          aria-selected="true"
                        >
                          Male
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link text-white"
                          id="chart-tab-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#chart-tab-profile"
                          role="tab"
                          aria-controls="chart-tab-profile"
                          aria-selected="false"
                        >
                          Female
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-content" id="chart-tab-tabContent">
                  <div className="tab-pane show active" id="chart-tab-home" role="tabpanel" aria-labelledby="chart-tab-home-tab" tabIndex={0}>
                    <div className="row">
                      <div className="col-6">
                        <span className="text-white d-block f-34 f-w-500 my-2">
                          200
                          <i className="ti ti-arrow-up-right-circle opacity-50"></i>
                        </span>
                        <p className="mb-0 opacity-50">Total Male</p>
                      </div>
                      <div className="col-6">
                        <div id="tab-chart-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="chart-tab-profile" role="tabpanel" aria-labelledby="chart-tab-profile-tab" tabIndex={0}>
                    <div className="row">
                      <div className="col-6">
                        <span className="text-white d-block f-34 f-w-500 my-2">
                          291
                          <i className="ti ti-arrow-down-right-circle opacity-50"></i>
                        </span>
                        <p className="mb-0 opacity-50">Total Female</p>
                      </div>
                      <div className="col-6">
                        <div id="tab-chart-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-12">
            <div className="card bg-secondary-dark dashnum-card dashnum-card-small text-white overflow-hidden">
              <span className="round bg-secondary small"></span>
              <span className="round bg-secondary big"></span>
              <div className="card-body p-3">
                <div className="d-flex align-items-center">
                  <div className="avtar avtar-lg">
                    <i className="text-white ti ti-credit-card"></i>
                  </div>
                  <div className="ms-2">
                    <h4 className="text-white mb-1">30</h4>
                    <p className="mb-0 opacity-75 text-sm">Passed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card dashnum-card dashnum-card-small overflow-hidden">
              <span className="round bg-danger small"></span>
              <span className="round bg-danger big"></span>
              <div className="card-body p-3">
                <div className="d-flex align-items-center">
                  <div className="avtar avtar-lg bg-light-warning">
                    <i className="text-danger ti ti-credit-card"></i>
                  </div>
                  <div className="ms-2">
                    <h4 className="mb-1">2</h4>
                    <p className="mb-0 opacity-75 text-sm">Failed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3 align-items-center">
                  <div className="col">
                    <small className="text-muted">By Subject</small>
                    <h3>Student Participation Rate</h3>
                  </div>
                
                </div>
                <div id="growthchart"></div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3 align-items-center">
                  <div className="col">
                    <h4>Top Performing Students</h4>
                  </div>
                  <div className="col-auto"></div>
                </div>
                <div className="rounded bg-light-secondary overflow-hidden mb-3">
                  <div className="px-3 pt-3">
                    <div className="row mb-1 align-items-start">
                      <div className="col">
                        <h5 className="text-secondary mb-0">Performance score</h5>
                 
                      </div>
                  
                    </div>
                  </div>
                  <div id="bajajchart"></div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0">
                    <div className="row align-items-start">
                      <div className="col">
                        <h5 className="mb-0">1. MAILA MARINDUQUE</h5>
                        <small className="text-success">99%</small>
                      </div>
                      <div className="col-auto">
                        <h4 className="mb-0">
                          Sec 3-Rose
                          <span className="ms-2 align-top avtar avtar-xxs bg-light-success"><i className="ti ti-chevron-up text-success"></i></span>
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item px-0">
                    <div className="row align-items-start">
                      <div className="col">
                        <h5 className="mb-0">2. ROSE LUSLOS</h5>
                        <small className="text-info">98.2%</small>
                      </div>
                      <div className="col-auto">
                        <h4 className="mb-0">
                          Sec 3-Rose
                          <span className="ms-2 align-top avtar avtar-xxs bg-light-info"><i className="ti ti-chevron-down text-info"></i></span>
                        </h4>
                      </div>
                    </div>
                  </li>
                  
                </ul>
                <div className="text-center">
                  <a href="#!" className="b-b-primary text-primary">
                    View all
                    <i className="ti ti-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
  <div className="col-xl-12 col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="col">
             
                    <h3>Student Lists</h3>
                  </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Section</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Juan Dela Cruz</td>
                        <td>3</td>
                        <td>Rose</td>
                        <td>9</td>
                        <td>Male</td>
                        <td>
                            <button className="btn btn-sm btn-primary">Details</button>
                       </td>
                    </tr>
                    <tr>
                        <td>Maria Santos</td>
                        <td>3</td>
                        <td>Rose</td>
                        <td>10</td>
                        <td>Female</td>
                        <td>
                            <button className="btn btn-sm btn-primary">Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Carlos Reyes</td>
                        <td>2</td>
                        <td>Lily</td>
                        <td>8</td>
                        <td>Male</td>
                        <td>
                            <button className="btn btn-sm btn-primary">Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ana Cruz</td>
                        <td>1</td>
                        <td>Sunflower</td>
                        <td>7</td>
                        <td>Female</td>
                        <td>
                            <button className="btn btn-sm btn-primary">Details</button>
                        </td>
                    </tr>
                </tbody>
            </table>
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