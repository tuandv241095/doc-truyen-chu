import React from "react";

const Stars = ({ number, size }) => {
  const stars = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= number) stars.push(<span className={"text-gold " + size}>★</span>);
    else {
      if (number % 1 >= 0.5)
        stars.push(<span className={"text-gold " + size}>✯</span>);
      else stars.push(<span className={"text-gold " + size}>☆</span>);
    }
  }
  return <div>{stars}</div>;
};

export default Stars;
