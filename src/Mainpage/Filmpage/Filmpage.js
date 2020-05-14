import React, { Component } from "react";
import "./filmpage.css";
import Rating from "../../Rating";
class Filmpage extends Component {
  render() {
    return (
      <div className="Filmpage">
        <img className="MovieImage" src={this.props.el.image} alt="" />
        <div className="MovieInfos">
          <div className="movieDesc">
            <img src={""} alt="" />
            {this.props.isHidden ? (
              <div>
                <textarea
                  className="text-area"
                  value={this.props.newDescription}
                  onChange={(e) => this.props.DescriptionEditor(e.target.value)}
                  onFocus={() => this.props.GetIndex(this.props.el)}
                  autoFocus
                />
                <input
                  type="button"
                  className="ChangeBtn"
                  value="Change"
                  onClick={this.props.ChangeDescription}
                />
              </div>
            ) : (
              <div>
                <p className="Desc">{this.props.el.Description}</p>
                <button className="EditLogoBtn">
                  <img
                    className="EditLogo"
                    src={
                      "https://www.pngkey.com/png/full/0-5198_edit-pencil-png-pencil-edit-logo.png"
                    }
                    alt=""
                    onClick={this.props.Edit}
                  />
                </button>
              </div>
            )}
          </div>
          <Rating el={this.props.el} />
          <h2 className="title">{this.props.el.title}</h2>
        </div>
      </div>
    );
  }
}

export default Filmpage;
