// Controllers/Inputdiseased.js
function InputDieseased(req, res) {
  const { cropType, symptoms } = req.body;

  if (!cropType && !symptoms) {
    return res.status(400).json({
      success: false,
      message: "Please provide cropType or symptoms"
    });
  }

  // Example fake disease result (replace with real logic / DB later)
  const newDisease = {
    cropType,
    symptoms,
    detectedDisease: "Leaf Spot",
    severity: "Moderate",
    recommendation: "Use copper-based fungicide"
  };

  res.status(200).json({
    success: true,
    message: "Disease data stored successfully",
    data: newDisease
  });
}

module.exports =  InputDieseased ;
