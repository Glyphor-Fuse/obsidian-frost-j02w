import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import GlyphorBadge from './utils/GlyphorBadge';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-arctic-950 text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <div className="fixed bottom-8 right-8 z-50 mix-blend-difference pointer-events-none">
          <GlyphorBadge />
        </div>
      </div>
    </Router>
  );
}

export default App;