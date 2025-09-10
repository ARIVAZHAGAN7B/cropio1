module.exports = function CropInsurances (req,res) {

const cropInsuranceData = {
  title: "Crop Insurance Schemes",
  description: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
  extraInfo:
    "Eligibility: All farmers growing notified crops in notified areas. Coverage: Covers yield losses due to natural calamities, pests, and diseases.",
  button:"Learn More",
}
res.json(cropInsuranceData);
}
