import React from 'react';

const TreatmentOptions = ({ detectionResult }) => {
  if (!detectionResult) return null;

  return (
    <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-[22px] font-bold mb-3">Treatment Options</h2>
      <p className="text-base mb-3">
        Recommended treatment for <strong>{detectionResult.disease}</strong> in <strong>{detectionResult.crop}</strong>:
      </p>
      <p className="text-base mb-3">{detectionResult.treatment}</p>

      <div className="pt-3">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default TreatmentOptions;
