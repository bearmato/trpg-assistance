//import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navBar";
import HomePage from "./pages/HomePage";
import RulesPage from "./pages/RulesPage";
import CharacterCreationPage from "./pages/CharacterCreationPage";
import AIGMPage from "./pages/AIGMPage";

export default function App() {
  return (
    <Router>
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
