import { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Dashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const res = await axios.get("http://localhost:4000/api/reports", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setReports(res.data);
  };

  // helper to extract filename
  const getFileName = (path) => {
    return path.split("/").pop();
  };

  return (
    <>
      <Typography variant="h5" mb={3}>
        My Medical Reports
      </Typography>

      {reports.length === 0 ? (
        <Paper sx={{ p: 3 }}>
          <Typography color="text.secondary">
            No reports uploaded yet.
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {reports.map((report) => (
            <Grid item xs={12} md={4} key={report.id}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <DescriptionIcon color="primary" />
                  <Typography variant="subtitle1" mt={1} noWrap>
                    {getFileName(report.file_path)}
                  </Typography>
                  <Typography color="text.secondary">
                    Type: {report.report_type}
                  </Typography>
                  <Typography color="text.secondary">
                    Date: {report.report_date}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    href={`http://localhost:4000/${report.file_path}`}
                    target="_blank"
                    download
                  >
                    View / Download
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
