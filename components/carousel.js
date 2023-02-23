import Image from "next/image";
import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import ImageSlider from "./imageSlider";

// core components

const items = [
  {
    src: require("../assets/assembly.jpg"),
    alt: "Somewhere",
    caption: "Somewhere"
  },
  {
    src: require("../assets/assembly.jpg"),
    alt: "Somewhere else",
    caption: "Somewhere else"
  },
  {
    src: require("../assets/assembly.jpg"),
    alt: "Here it is",
    caption: "Here it is"
  }
];

function SectionCarousel() {
      return (
        <div>
          <ImageSlider images={items} />
        </div>
      )
}

export default SectionCarousel;