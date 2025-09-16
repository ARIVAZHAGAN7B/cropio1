module.exports = function EstimatedYield (req,res) {
    const data = {
        title:"Estimeated title", 
        description:"Compared to the average yield of 2200 kg/acre in your region your predicted yield is higher. Factors influencing your yield include soil type and irrigation method. Tips for improvement Optimize fertilizer use and consider crop rotation. Confidence Score: 85%" 
    }
    res.json(data);
    }