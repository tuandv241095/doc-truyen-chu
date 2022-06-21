import React from "react";
import { comments } from "../../data/comments";
import Comment from "../Comment/Comment";

const Reviews = () => {
  return (
    <div>
      <Comment cm={comments[0]} />
    </div>
  );
};

export default Reviews;
