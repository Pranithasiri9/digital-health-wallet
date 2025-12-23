import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadReport from "./pages/UploadReport";
import Vitals from "./pages/Vitals";
import SharedReports from "./pages/SharedReports";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<UploadReport />} />
          <Route path="/vitals" element={<Vitals />} />
          <Route path="/shared" element={<SharedReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

