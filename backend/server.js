const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const FarmerRoutes = require("./Routes/FarmerRoutes");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/farmer", FarmerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
