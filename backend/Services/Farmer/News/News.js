module.exports = function News (req,res) {
      const tabContent = {
    News: [
      {
        title: "New Government Initiatives for Farmers",
        desc:
          "The government has announced new initiatives to support farmers in the upcoming season, including subsidies for seeds and fertilizers.",
        img:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB311kyWdkkheMDUSApiertldQlZ4mA3_JoUg_ct2X7G5KDfjwnj9ajY16CtYaEEFLjCr8wbK7g6DEs6R5I31YZW4kdrIa0MDxRMhw4Ere0XHUI_zk4m6Qf3OvglYjTeK0Strr6mImKqaZtWdKCdI4H8Me53iqNA201N67eXBWxIlaniXAvJqlZTRgqW-dsbhAgyzd_sfpz7-TO_9eYMThq6bEeIH7YmaD3elnRsOVtWNeVWAeixPoOGjAgG_uYOXnEluksia8dBoY",
      },
      {
        title: "Weather Impacts on Crop Yields",
        desc:
          "Recent weather patterns have significantly impacted crop yields in the southern regions, leading to concerns about food security.",
        img:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXm6YJivEGRBsl5btnVu2QyxkdcsuBck5m-2r3P6eKf7xPxbITo_6mjrNyT7FCmc87wk8f7lERI8QCSkGWp6ASvN2uyHqSxH9X2RT0aXewoL21_tDhfwdenE7krNbKlNkGzSlSf6xpG_5els0Iu_G2suziDNBf_h7FVKcQb1kvlpNWkPs7v-Q2iWSOft3_uaOP5FSyiNZ3bROpDETkKBDlZyRqsQ1MfTM8iZYeR1s6HA2u1ByqiDyFj8zxvb1YBV0pvT-O0eIQcU",
      },
    ],
    "MSP Updates": [
      { title: "MSP for Wheat Increased", desc: "The government has raised the MSP for wheat by 5% this year.", img: "https://via.placeholder.com/70" },
    ],
    Policies: [
      { title: "New Organic Farming Policy", desc: "A policy encouraging organic farming has been introduced.", img: "https://via.placeholder.com/70" },
    ],
    Schemes: [
      { title: "Subsidy Scheme for Irrigation", desc: "Farmers can now apply for irrigation subsidies online.", img: "https://via.placeholder.com/70" },
    ],
  };
    res.json(tabContent);
}