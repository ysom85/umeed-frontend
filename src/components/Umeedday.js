import React, { Component } from "react";
import "./Umeedday.css";
import { ExternalLink } from "react-external-link";
import { NavBar, Footer } from "./";
class Umeedday extends Component {
  render() {
    const { images, title } = this.props;
    return (
      <>
        <NavBar />
        <div>
          <div className="gallary-img-title">
            <h2>{title}</h2>
          </div>
          <div className="gallary-grid-container">
            {images.map(({ id, src }) => {
              return (
                <div key={id} className="gallary-grid-item">
                  <ExternalLink href={src}>
                    <span>
                      <img src={src} alt="not uploaded" />
                    </span>
                  </ExternalLink>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Umeedday;
