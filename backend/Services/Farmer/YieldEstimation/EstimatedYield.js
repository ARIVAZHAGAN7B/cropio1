module.exports = function EstimatedYield(req, res) {
    // Predefined yield data options
    const yieldOptions = [
        {
            title: "High Wheat Yield",
            description: "Your predicted wheat yield is significantly higher than the regional average. Factors: Loamy soil, Drip irrigation. Tips: Maintain fertilizer schedule. Confidence Score: 90%"
        },
        {
            title: "Moderate Rice Yield",
            description: "Your predicted rice yield is slightly below the regional average. Factors: Clay soil, Flood irrigation. Tips: Improve water management. Confidence Score: 78%"
        },
        {
            title: "Good Corn Yield",
            description: "Your corn yield is expected to match the regional average. Factors: Sandy soil, Sprinkler irrigation. Tips: Consider crop rotation. Confidence Score: 85%"
        },
        {
            title: "High Soybean Yield",
            description: "Your soybean yield is above average. Factors: Loamy soil, Manual irrigation. Tips: Use disease-resistant seeds. Confidence Score: 88%"
        },
        {
            title: "Low Barley Yield",
            description: "Your barley yield is below average. Factors: Silt soil, Flood irrigation. Tips: Optimize fertilizer use. Confidence Score: 75%"
        },
        {
            title: "Excellent Cotton Yield",
            description: "Your cotton yield is very high. Factors: Peaty soil, Drip irrigation. Tips: Monitor soil moisture regularly. Confidence Score: 92%"
        },
        {
            title: "Moderate Wheat Yield",
            description: "Your wheat yield is close to the regional average. Factors: Clay soil, Sprinkler irrigation. Tips: Check soil nutrients. Confidence Score: 80%"
        },
        {
            title: "High Rice Yield",
            description: "Your rice yield is above average. Factors: Loamy soil, Drip irrigation. Tips: Optimize irrigation timing. Confidence Score: 89%"
        },
        {
            title: "Low Corn Yield",
            description: "Your corn yield is below average. Factors: Sandy soil, Manual irrigation. Tips: Improve soil fertility. Confidence Score: 72%"
        },
        {
            title: "Good Barley Yield",
            description: "Your barley yield matches the regional average. Factors: Silt soil, Sprinkler irrigation. Tips: Consider crop rotation. Confidence Score: 84%"
        },
        {
            title: "High Cotton Yield",
            description: "Your cotton yield is above average. Factors: Peaty soil, Flood irrigation. Tips: Use high-quality seeds. Confidence Score: 87%"
        },
        {
            title: "Excellent Soybean Yield",
            description: "Your soybean yield is very high. Factors: Loamy soil, Drip irrigation. Tips: Maintain proper spacing between plants. Confidence Score: 93%"
        }
    ];

    // Pick a random item
    const randomIndex = Math.floor(Math.random() * yieldOptions.length);
    const randomData = yieldOptions[randomIndex];

    // Send response
    res.status(200).json(randomData);
};
