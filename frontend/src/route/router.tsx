import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectDetails from "../pages/projectDetails";
import Home from "../pages/home";
import Projects from "../pages/projects";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
