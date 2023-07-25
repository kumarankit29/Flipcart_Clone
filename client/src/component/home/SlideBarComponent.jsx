import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, styled,Typography } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Image = styled("img")({
  width: "100%",
  height: 280,
});
const SlideBarComponent = ({ products }) => {
  return (
    <Box>
      <Box>
        <Typography>Deal Of The Day</Typography>
      </Box>

      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        centerMode={true}
      >
        {products.map((product) => (
          <Image src={product.url} alt="banner" />
        ))}
      </Carousel>
    </Box>
  );
};
export default SlideBarComponent;
