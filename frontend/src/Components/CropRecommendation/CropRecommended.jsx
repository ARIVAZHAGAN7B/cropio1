import React from 'react';

const CropRecommended = ({ recommendations }) => {
    let cropName = null;

    // Check 1: If the prop is the object { recommendation: "Rice" }
    if (recommendations && typeof recommendations === 'object' && recommendations.recommendation) {
        cropName = recommendations.recommendation;
    } 
    // Check 2: If the Parent Component passed the raw string directly
    else if (typeof recommendations === 'string') {
        cropName = recommendations;
    }
    // Check 3: If the Parent Component passed { data: "Rice" }
    else if (recommendations && typeof recommendations === 'object' && recommendations.data) {
        // This is a common error: passing result.data when it should be result.data.recommendation
        cropName = recommendations.data;
    }


    // Handle the case where no recommendation is available or loading
    if (!cropName) {
        return (
            <div className="p-8 text-center text-gray-600">
                <p>No personalized crop recommendation available yet. Please submit the form.</p>
            </div>
        );
    }
    
    // ... rest of the stylish rendering code (which you already have)
    return (
        <div className="px-4 pt-5 pb-3">
            <h2 className="text-[22px] font-bold text-[#131811] mb-4">
                Your Predicted Crop
            </h2>
            
            <div className="p-4">
                <div className="rounded-xl bg-[#fafbf9] p-6 shadow hover:shadow-lg transition-shadow">
                    
                    <div className="flex flex-col gap-2 text-center">
                        <p className="text-2xl md:text-3xl font-extrabold text-green-800 uppercase tracking-wider">
                            {cropName}  {/* THIS IS THE LINE THAT SHOULD NOW WORK */}
                        </p>
                        
                        <div className="text-sm text-[#6d8560] mt-3 border-t pt-3 border-gray-200">
                            <p className="font-medium">
                                This recommendation is based on the NPK, climate, and rainfall data you provided.
                            </p>
                            <p className="mt-1">
                                For detailed variety information and yield projections, consult your local agricultural extension service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CropRecommended;