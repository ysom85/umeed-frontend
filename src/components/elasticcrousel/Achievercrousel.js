import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
class Achievercrousel extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1, itemsToScroll: 2 },
      { width: 850, itemsToShow: 1, itemsToScroll: 2 },
      { width: 1150, itemsToShow: 2, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 2, itemsToScroll: 2 },
      { width: 1750, itemsToShow: 2, itemsToScroll: 2 },
    ];
  }
  state = {
    items: [
      { id: 1, title: "/Imgs/cmp.jpg" },
      { id: 2, title: "/Imgs/cmp2.jpg" },
      { id: 3, title: "/Imgs/cmp4.jpeg" },
      { id: 4, title: "/Imgs/cmp3.jpeg" },
    ],
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <Carousel
          breakPoints={this.breakPoints}
          enableAutoPlay
          autoPlaySpeed={1500}
        >
          {items.map(({ id, title }) => (
            <img
              className="acheiver-size"
              key={id}
              src={title}
              alt="item1"
              style={{ width: "25rem", height: "20rem", overflowX: "auto" }}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Achievercrousel;
