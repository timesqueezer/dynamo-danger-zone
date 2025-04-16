import React, { useRef } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  step?: number;
  onChange: (value: [number, number]) => void;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, value, step = 1, onChange }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  // Calculate percent positions
  const percent = (val: number) => ((val - min) / (max - min)) * 100;

  // Handle drag
  const handleDrag = (idx: 0 | 1, e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const move = (clientX: number) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      let percentPos = (clientX - rect.left) / rect.width;
      percentPos = Math.max(0, Math.min(1, percentPos));
      let newValue = Math.round(min + percentPos * (max - min));
      if (idx === 0) {
        newValue = Math.min(newValue, value[1] - step);
        onChange([newValue, value[1]]);
      } else {
        newValue = Math.max(newValue, value[0] + step);
        onChange([value[0], newValue]);
      }
    };
    const moveHandler = (ev: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in ev ? ev.touches[0].clientX : ev.clientX;
      move(clientX);
    };
    const upHandler = () => {
      window.removeEventListener('mousemove', moveHandler as any);
      window.removeEventListener('touchmove', moveHandler as any);
      window.removeEventListener('mouseup', upHandler);
      window.removeEventListener('touchend', upHandler);
    };
    window.addEventListener('mousemove', moveHandler as any);
    window.addEventListener('touchmove', moveHandler as any);
    window.addEventListener('mouseup', upHandler);
    window.addEventListener('touchend', upHandler);
  };

  return (
    <div className="w-full px-2 py-4 select-none">
      <div className="relative h-6 flex items-center" ref={trackRef}>
        {/* Track */}
        <div className="absolute h-2 w-full bg-gray-200 rounded" />
        {/* Selected range */}
        <div
          className="absolute h-2 bg-red-500 rounded"
          style={{
            left: `${percent(value[0])}%`,
            width: `${percent(value[1]) - percent(value[0])}%`,
          }}
        />
        {/* Handles */}
        {[0, 1].map((idx) => (
          <button
            key={idx}
            type="button"
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-red-500 rounded-full shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-300 z-10"
            style={{ left: `calc(${percent(value[idx as 0 | 1])}% - 12px)` }}
            tabIndex={0}
            aria-label={idx === 0 ? "Minimum Gefahrenlevel" : "Maximum Gefahrenlevel"}
            onMouseDown={e => handleDrag(idx as 0 | 1, e)}
            onTouchStart={e => handleDrag(idx as 0 | 1, e)}
          />
        ))}
        {/* Labels */}
        <div className="absolute -top-6 left-0 w-full flex justify-between text-xs text-gray-500">
          {Array.from({ length: max - min + 1 }, (_, i) => (
            <span key={i}>{min + i}</span>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-2 text-sm">
        <span>Min: <b>{value[0]}</b></span>
        <span>Max: <b>{value[1]}</b></span>
      </div>
    </div>
  );
};
