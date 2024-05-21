import { useState } from "react";
import Slider from "react-slick";
import { useWordList } from "../WordListContext";
import Card from "../components/Card";
function Cards() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const wordList = useWordList();
  return (
    <div className="row slider-container py-2 m-0">
      <Slider arrows={false} {...settings}>
        {wordList.map((word) => {
          return <Card key={word.source} word={word}></Card>;
        })}
      </Slider>
    </div>
  );
}

export default Cards;
