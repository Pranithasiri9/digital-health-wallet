import { Box, Paper, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:4000/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ background: "linear-gradient(135deg,#1976d2,#42a5f5)" }}
    >
      <Paper sx={{ p: 4, width: 360 }}>
        <Typography variant="h5" textAlign="center" mb={2}>
          Welcome Back 👋
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate("/register")}>
          Create an account
        </Button>
      </Paper>
    </Box>
  );
}
