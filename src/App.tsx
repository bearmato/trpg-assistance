//import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navBar";
import HomePage from "./pages/Home";
import RulesPage from "./pages/Rules";
import CharacterCreationPage from "./pages/CharacterCreation";
import AIGMPage from "./pages/AIGM";

export default function App() {
  return (
    <Router>
      {/* 让所有页面都有导航栏 */}
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route
            path="/character-creation"
            element={<CharacterCreationPage />}
          />
          <Route path="/ai-gm" element={<AIGMPage />} />
        </Routes>
      </Box>
    </Router>
  );
}
