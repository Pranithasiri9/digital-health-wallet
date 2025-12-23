import { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Typography, Button } from "@mui/material";

export default function SharedReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchSharedReports();
  }, []);

  const fetchSharedReports = async () => {
    const res = await axios.get("http://localhost:4000/api/share/me", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setReports(res.data);
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" mb={2}>
        Shared Reports
      </Typography>

      {reports.length === 0 ? (
        <Typography color="text.secondary">
          No reports have been shared with you.
        </Typography>
      ) : (
        reports.map((r) => (
          <Paper key={r.id} sx={{ p: 2, mb: 2 }}>
            <Typography>{r.report_type}</Typography>
            <Typography color="text.secondary">
              Date: {r.report_date}
            </Typography>
            <Button
              href={`http://localhost:4000/${r.file_path}`}
              target="_blank"
              size="small"
            >
              View
            </Button>
          </Paper>
        ))
      )}
    </Paper>
  );
}
