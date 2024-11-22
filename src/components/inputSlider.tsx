'use client';
import React from 'react';

interface InputSliderProps {
  pageviews: number;
  handlePageviewsChange: (value: number) => void;
  calculateFillPercentage: () => number;
}

const InputSlider: React.FC<InputSliderProps> = ({
  pageviews,
  handlePageviewsChange,
  calculateFillPercentage,
}) => {
  return (
    <>
      <input
        type="range"
        min="1000"
        max="1000000"
        step="1000"
        value={pageviews}
        onChange={(e) => handlePageviewsChange(Number(e.target.value))}
        className="w-full range-slider h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none"
        style={{
          background: `linear-gradient(to right, #66d1d1 ${calculateFillPercentage()}%, #d1d5db ${calculateFillPercentage()}%)`,
        }}
      />

      <style jsx global>{`
        .range-slider {
          width: 100%;
          height: 8px;
          background: gray;
          border-radius: 5px;
          appearance: none;
          outline: none;
        }

        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 30px;
          width: 30px;
          background: #26ccb2;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.3s ease;
        }

        .range-slider:hover::-webkit-slider-thumb {
          box-shadow: 2px 6px 25px #26ccb2;
          transform: scale(1.1);
        }

        .range-slider:focus::-webkit-slider-thumb {
          outline: none;
          transform: scale(1.1);
          box-shadow: 2px 6px 25px #26ccb2;
        }

        .range-slider::-moz-range-thumb {
          height: 30px;
          width: 30px;
          background: #66d1d1;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.3s ease;
        }

        .range-slider:hover::-moz-range-thumb {
          background: #45b3b3;
          box-shadow: 2px 6px 25px #26ccb2;
          transform: scale(1.1);
        }

        .range-slider:focus::-moz-range-thumb {
          outline: none;
          transform: scale(1.1);
          box-shadow: 2px 6px 25px #26ccb2;
        }
      `}</style>
    </>
  );
};

export default InputSlider;
