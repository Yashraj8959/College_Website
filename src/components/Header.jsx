import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Header() {
  return (
    <div>
      <div className="top-menu">
        <div className="container">
          <div className="col-md-4">
            <ul>
              <li>
                {/* <a href="#main-content">Skip to main content</a> */}
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <ul className="list-inline list-unstyled pull-right">
              <li>youtube</li>
              <li>collaboration</li>
              <li>RTI</li>
              <li>Alumni</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
