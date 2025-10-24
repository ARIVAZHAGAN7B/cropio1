import React from 'react';

const DetecedDisease = ({ detectionResult }) => {
  if (!detectionResult) {
    return (
      <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-[22px] font-bold mb-3">Detection Results</h2>
        <p className="text-base">Results will be displayed here after processing the image.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-[22px] font-bold mb-3">Detection Results</h2>
      <p><strong>Crop:</strong> {detectionResult.crop}</p>
      <p><strong>Disease:</strong> {detectionResult.disease}</p>
      <p><strong>Confidence:</strong> {detectionResult.confidence}</p>
      <p><strong>Treatment:</strong> {detectionResult.treatment}</p>
    </div>
  );
};

export default DetecedDisease;
