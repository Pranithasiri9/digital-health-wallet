const express = require("express");
const multer = require("multer");
const db = require("../database/db");
const auth = require("../middleware/auth");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/upload", auth, upload.single("report"), (req, res) => {
  const { report_type, report_date } = req.body;

  db.run(
    "INSERT INTO reports (owner_id, report_type, report_date, file_path) VALUES (?, ?, ?, ?)",
    [req.user.id, report_type, report_date, req.file.path],
    () => res.json({ message: "Report uploaded" })
  );
});

router.get("/", auth, (req, res) => {
  db.all(
    "SELECT * FROM reports WHERE owner_id = ?",
    [req.user.id],
    (err, rows) => res.json(rows)
  );
});

module.exports = router;
