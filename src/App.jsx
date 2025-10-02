import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { createPageUrl } from './utils';

// Import pages
import Home from './pages/Home';
import RealityCheck from './pages/RealityCheck';
import RedFlags from './pages/RedFlags';
import Journal from './pages/Journal';
import Grounding from './pages/Grounding';
import Patterns from './pages/Patterns';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={createPageUrl("Home")} element={<Home />} />
          <Route path={createPageUrl("RealityCheck")} element={<RealityCheck />} />
          <Route path={createPageUrl("RedFlags")} element={<RedFlags />} />
          <Route path={createPageUrl("Journal")} element={<Journal />} />
          <Route path={createPageUrl("Grounding")} element={<Grounding />} />
          <Route path={createPageUrl("Patterns")} element={<Patterns />} />
          <Route path={createPageUrl("Resources")} element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
