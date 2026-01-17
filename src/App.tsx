import Index from './pages/Index';
import Navbar from './components/Navbar';
import GlyphorBadge from './utils/GlyphorBadge';

function App() {
  return (
    <div className="relative min-h-screen bg-arctic-950 text-white font-sans">
      <Navbar />
      <Index />
      <div className="fixed bottom-8 right-8 z-50 mix-blend-difference pointer-events-none">
        <GlyphorBadge />
      </div>
    </div>
  );
}

export default App;