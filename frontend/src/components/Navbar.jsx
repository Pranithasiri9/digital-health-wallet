import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🩺 Digital Health Wallet
        </Typography>
        <Button color="inherit" onClick={() => navigate("/dashboard")}>
          Dashboard
        </Button>
        <Button color="inherit" onClick={() => navigate("/upload")}>
          Upload
        </Button>
        <Button color="inherit" onClick={() => navigate("/vitals")}>
          Vitals
        </Button>
        <Button color="inherit" onClick={() => navigate("/shared")}>
          Shared
        </Button>
      </Toolbar>
    </AppBar>
  );
}
