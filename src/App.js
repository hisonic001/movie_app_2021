import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "bulgogi",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
    rating: 2.1,
  },
  {
    id: 3,
    name: "kimbap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating: 3.3,
  },
  {
    id: 4,
    name: "samgyetang",
    image:
      "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.1,
  },
];

function Food({ name, pic, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h3>Rating {rating}/5</h3>
      <img src={pic} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          pic={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
