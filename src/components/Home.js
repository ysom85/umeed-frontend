import React, { Component } from "react";
import {
  NavBar,
  Noticebar,
  Slider,
  Footer,
  Gallery,
  Aboutumeed,
  Achiever,
} from "./";
class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Slider />
        <Aboutumeed />
        <Noticebar />
        <Achiever />
        <Gallery />
        <Footer />
      </>
    );
  }
}

export default Home;
