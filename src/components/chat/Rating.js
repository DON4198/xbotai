import { useState } from "react";
import star from "../../assets/icons/Star.svg";
import starFilled from "../../assets/icons/Star-filled.svg";

export default function Rating({ onRate }) {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating">
      {[1,2,3,4,5].map((n) => (
        <img
          key={n}
          src={n <= rating ? starFilled : star}
          alt="star"
          onClick={() => {
            setRating(n);
            onRate(n);
          }}
        />
      ))}
    </div>
  );
}
