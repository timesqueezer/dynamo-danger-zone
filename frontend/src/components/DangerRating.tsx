import React from "react";

// Map rating to image file names (place your images in build/ or assets/)
const dangerImages = [
  "/build/danger1.png",
  "/build/danger2.png",
  "/build/danger3.png",
  "/build/danger4.png",
  "/build/danger5.png",
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
          style={{ width: size, height: size, display: "inline-block" }}
          loading="lazy"
        />
      ))}
    </span>
  );
};
