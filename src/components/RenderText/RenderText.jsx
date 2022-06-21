import React from "react";

const RenderText = ({ text }) => {
  return (
    <div>
      {text.split("{'\n'}").map((i, key) => {
        return <div key={key}>{i}</div>;
      })}
    </div>
  );
};

export default RenderText;
