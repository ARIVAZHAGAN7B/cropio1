module.exports = function SustainablePractices (req,res) {
      const tips = [
    {
      title: "Organic Farming",
      description: "Learn about organic farming techniques.",
      image: "http://localhost:5000/images/farming.png",
    },
    {
      title: "Soil Conservation",
      description: "Discover soil conservation practices.",
      image: "http://localhost:5000/images/soil.png",
    },
    {
      title: "Water Saving Methods",
      description: "Explore water saving methods.",
      image: "http://localhost:5000/images/water_saving.png",
    },
    {
      title: "Biodiversity",
      description: "Enhance biodiversity on your farm.",
      image: "http://localhost:5000/images/biodiversity.png",
    },
  ];
  res.json(tips);
}