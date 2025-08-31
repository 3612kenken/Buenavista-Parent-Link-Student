import React from "react";
import { useEffect } from "react";
import NavAdmin from "../navAdmin";
import Scripts from "../scripts"; // <-- import Scripts
import Header from "../header";
import Footer from "../footer";

export default function Profile() {
  return (
    <>
      <NavAdmin />

      <Header />
      <div className="pc-container">
        <div className="pc-content">
          <div className="row">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
