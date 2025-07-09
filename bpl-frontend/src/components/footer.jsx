import React from "react";

export default function Footer() {



    return (  
 <footer className="pc-footer">
      <div className="footer-wrapper container-fluid">
        <div className="row">
          <div className="col-sm-6 my-1">
            <p className="m-0">
              Berry &#9829; crafted by Team
              <a href="https://themeforest.net/user/codedthemes" target="_blank">CodedThemes</a>
            </p>
          </div>
          <div className="col-sm-6 ms-auto my-1">
            <ul className="list-inline footer-link mb-0 justify-content-sm-end d-flex">
              <li className="list-inline-item"><a href="./index.html">Home</a></li>
              <li className="list-inline-item"><a href="https://codedthemes.gitbook.io/berry-bootstrap/" target="_blank">Documentation</a></li>
              <li className="list-inline-item"><a href="https://codedthemes.support-hub.io/" target="_blank">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    );
}