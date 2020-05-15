import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Container">
          <div>
            <h5 className="footer-title">MovieFy </h5>
            <p>
              As a Small application MovieFy tends to provide an easy to use
              interface, a cool design with easy on the eyes styles and a great
              experience
            </p>
          </div>
          <div>
            <h5 className="footer-title">Contact Us</h5>
            <ul className="Link-List">
              <li className="list-styled">
                <a href="">Facebook</a>
              </li>
              <li className="list-styled">
                <a href="">Github</a>
              </li>
              <li className="list-styled">
                <a href="">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Copyrights">
          <h6>Copyrights and stuff</h6>
        </div>
      </div>
    );
  }
}

export default Footer;
