module.exports = function Subsidies (req,res) {
    const subsidies =                { title:"Subsidies",
                description:"Government Subsidies for Sustainable Agriculture",
                extraInfo:"Scheme: National Mission on Sustainable Agriculture (NMSA). Eligibility: Farmers adopting sustainable practices.",
                buttons:["Check Eligibility", "Download Resources"]}
    res.json(subsidies);
}