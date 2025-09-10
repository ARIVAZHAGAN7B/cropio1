module.exports = function SustainablePractices (req,res) {
      const tips = [
    {
      title: "Organic Farming",
      description: "Learn about organic farming techniques.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD69N_Lhm1Z-lzq5P2T1vnoVkIQdxf8Vn8ZAIfEzTQVBhMbak0BXbjLW-SxGusGbPTv_CwtjzQmVjVzYtUTpE2u_u31E1pyLlDVKeZuIwU5xvgZGEhJ-g7oFYY6X1FybmKtjpwT26V7c3MrlMi6rRX-OTcxT1gmcgWn5nRyhA9jOrpusuFVrlUbUAXi1eJQljChqg2omvAo2psHu7sttdnngJytLzY8QH5IB8i-HDLUm-j5RnFreVN7e6rPb-kOXts_-DYmuCka44c",
    },
    {
      title: "Soil Conservation",
      description: "Discover soil conservation practices.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAGm8RNYWX0AlXgvKZL9JiStzvZpuuYdWGHicR7txylZC8SbIj7eZMURv_RC8_z3m-gMG886d0sCTiyoYezYHpPSZZNc6XSBnYJ1lDRcAQ8rE-gp9ytQNjeSwI5a0R88_DvnU2oVw3AXLm2UT9PepdXYD-n766PJuV5S05gsMt1XRPylKbihYJYNLkVfJVey1TSVwOQHRZwvt0zp1EPClASvD9xntBsG5eEw1G1dLtGoutsr7YvTCw0fWLDYsXlGNi2EAbbj6tuF0Y",
    },
    {
      title: "Water Saving Methods",
      description: "Explore water saving methods.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBOyiFhMCGBTQJK-0UPLl1bqdxBNp7iKf8pXJ93PRdcFElEBT3H2NfIgZGUlHu9I6uXPsX-LDc4qg_w0FUzvq-bJajRBz8dO9QuQIhD6VeU_waalfW3BhL3a3RIYhv2iGrEo9Cdi5kdDBH5kk9n4g3Ibomblum9jaS1PMr5hUbsO9vCmSLatUTP6f_hQalr2brSAYNTPGr7kjpXpceY4u8gyYnIpplFHQrtxBp9yeeuTpuO4U6x3RTqEt46f1z2VaxTZiQR4j0qVoQ",
    },
    {
      title: "Biodiversity",
      description: "Enhance biodiversity on your farm.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkC0jhH_0NtnQ5SS4HwqBzQXoL9rOgWnCNFtmxt7eu-sB6nSyLEo9nBM45oKJUKfe4bjZoYAzeB9SU7ai3W1vFb4gE_fiVhmdk-5vWzkMEPwdWfV3wohj7g7KX-0eeXgGd0imfRAAD366OhuQUX5qwQXezPq1NRSI81aFT6Yv5OCsz5xNnYqNPNKq_Bw-Catfe9A6IPhXF5ZC4MlvF4AX8wFbYxZaMI7PjFwna5C8RRwkrTq9ZG8ucywyEKDdN6e3dwvaYI2F8OcA",
    },
  ];
  res.json(tips);
}