import { Paper, Typography, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

/**
 * Dummy vitals data
 * (You can later replace this with backend data)
 */
const bpData = [
  { date: "Sep 1", value: 120 },
  { date: "Sep 5", value: 118 },
  { date: "Sep 10", value: 122 },
];

export default function Vitals() {
  return (
    <Paper sx={{ p: 4 }}>
      {/* Page Title */}
      <Typography variant="h5" mb={1}>
        Vitals Overview
      </Typography>

      {/* Source Information */}
      <Typography color="text.secondary" mb={3}>
        Extracted from Blood Test Report (04-05-2024)
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Blood Pressure</Typography>
            <Typography>120 / 80 mmHg</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Blood Sugar</Typography>
            <Typography>98 mg/dL</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Heart Rate</Typography>
            <Typography>72 bpm</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Trend Chart */}
      <Typography variant="h6" mb={2}>
        Blood Pressure Trend
      </Typography>

      <LineChart width={700} height={300} data={bpData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#1976d2"
          strokeWidth={2}
        />
      </LineChart>
    </Paper>
  );
}
