const express = require("express");
const db = require("../database/db");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, (req, res) => {
  const { report_id, shared_with } = req.body;

  db.run(
    "INSERT INTO shared_access (report_id, shared_with, access_type) VALUES (?, ?, ?)",
    [report_id, shared_with, "read-only"],
    () => res.json({ message: "Access granted" })
  );
});

router.get("/me", auth, (req, res) => {
  db.all(
    `SELECT r.* FROM reports r
     JOIN shared_access s ON r.id = s.report_id
     WHERE s.shared_with = ?`,
    [req.user.id],
    (err, rows) => res.json(rows)
  );
});

module.exports = router;
