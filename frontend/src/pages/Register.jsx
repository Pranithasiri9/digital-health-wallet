import { Box, Paper, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await axios.post("http://localhost:4000/api/auth/register", {
      name,
      email,
      password,
    });
    navigate("/");
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ background: "linear-gradient(135deg,#2e7d32,#66bb6a)" }}
    >
      <Paper sx={{ p: 4, width: 360 }}>
        <Typography variant="h5" textAlign="center" mb={2}>
          Create Account 🩺
        </Typography>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={register}>
          Register
        </Button>
      </Paper>
    </Box>
  );
}
