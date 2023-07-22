import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "./Newcrosel.css";
class Newscrousel extends Component {
  render() {
    return (
      <div>
        <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={1500}>
          <img
            className="news-croselsize"
            src={process.env.PUBLIC_URL + `/Imgs/news1.jpg`}
            alt="item1"
          />
          <img
            className="news-croselsize"
            src={process.env.PUBLIC_URL + `/Imgs/news1.jpg`}
            alt="item1"
          />
        </Carousel>
      </div>
    );
  }
}

export default Newscrousel;
