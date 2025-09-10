module.exports = function Loans (req,res) {
    const loanData = {title:"Loans",
                description:"Kisan Credit Card (KCC)",
                extraInfo:"Crop Type: Rice, Wheat, Maize. Interest Rate: 7% per annum (subject to change).",
                buttons:["Apply Now"]}
                res.json(loanData);
}