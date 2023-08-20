import React from "react";
import Reviewcard from "../../components/Reviewcard/Reviewcard";
import Reviewlist from "../../constants/Reviewlist";
import "../../assets/styles/Review.css";

function Review() {
  return (
    <>
      <div className="review-wrapper">
        <div className="review-tag">
          <button>Review</button>
        </div>
        <div className="review-desc">
          <p>Nice things people have said about me:</p>
        </div>
        <div className="review-card-shown">
          {Reviewlist.map((item) => (
            <Reviewcard
              key={item.serial}
              src={item.src}
              alt={item.alt}
              rev={item.review}
              name={item.name}
              pos={item.position}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Review;
