import React from "react";

import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";

// Map rating to image file names (place your images in build/ or assets/)
const dangerImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

interface DangerRatingProps {
  rating: number; // 1-5
  size?: number; // px, optional
}

export const DangerRating: React.FC<DangerRatingProps> = ({ rating, size = 40 }) => {
  // Clamp rating between 1 and 5
  const safeRating = Math.max(1, Math.min(5, rating));
  return (
    <span style={{ display: "inline-flex", gap: 4 }}>
      {Array.from({ length: safeRating }).map((_, idx) => (
        <img
          key={idx}
          src={dangerImages[idx]}
          alt={`Danger rating: ${idx + 1}`}
          style={{ width: size, height: size, display: "inline-block", filter: "invert(1)" }}
          loading="lazy"
        />
      ))}
    </span>
  );
};
