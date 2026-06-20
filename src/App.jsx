import { Routes, Route } from "react-router-dom";
import useDarkMode from "./hooks/useDarkMode";
import ThemeToggle from "./components/ThemeToggle";
import ChatWidget from "./components/ChatWidget";
import { ScheduleProvider } from "./components/ScheduleModal";
import Home from "./pages/Home";
import TechStackPage from "./pages/TechStackPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  const { theme, toggle } = useDarkMode();

  return (
    <ScheduleProvider>
      <div className="relative min-h-screen">
        <ThemeToggle theme={theme} toggleTheme={toggle} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-stack" element={<TechStackPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

        <ChatWidget />
      </div>
    </ScheduleProvider>
  );
}
