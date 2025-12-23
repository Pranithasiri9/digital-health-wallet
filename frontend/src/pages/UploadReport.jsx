import { Paper, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function UploadReport() {
  const [file, setFile] = useState(null);
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [success, setSuccess] = useState(false);

  const upload = async () => {
    if (!file || !type || !date) return;

    const form = new FormData();
    form.append("report", file);
    form.append("report_type", type);
    form.append("report_date", date);

    await axios.post("http://localhost:4000/api/reports/upload", form, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    setSuccess(true);
    setFile(null);
    setType("");
    setDate("");
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" mb={2}>
        Upload Medical Report
      </Typography>

      <TextField
        label="Report Type"
        fullWidth
        margin="normal"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <TextField
        type="date"
        fullWidth
        margin="normal"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ marginTop: 16 }}
      />

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={upload}
        disabled={!file || !type || !date}
      >
        Upload
      </Button>

      {success && (
        <Typography color="success.main" mt={2}>
          Report uploaded successfully
        </Typography>
      )}
    </Paper>
  );
}
