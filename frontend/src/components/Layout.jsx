import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box mt={4}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}
