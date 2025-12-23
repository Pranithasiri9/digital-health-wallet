const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const reportRoutes = require("./routes/reports");
const vitalRoutes = require("./routes/vitals");
const shareRoutes = require("./routes/share");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ SERVE UPLOADED FILES
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/vitals", vitalRoutes);
app.use("/api/share", shareRoutes);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});




