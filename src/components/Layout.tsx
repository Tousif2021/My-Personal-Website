
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { MatrixBackground } from "./MatrixBackground";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen soft-blue-gradient relative">
      {/* Tech patterns and overlays */}
      <div className="absolute inset-0 tech-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 circuit-pattern opacity-20 pointer-events-none"></div>
      
      {/* Binary corner decorations */}
      <div className="absolute top-0 left-0 text-primary/10 font-mono text-2xl p-4 pointer-events-none">
        01101100
      </div>
      <div className="absolute top-0 right-0 text-primary/10 font-mono text-2xl p-4 pointer-events-none">
        10110010
      </div>
      <div className="absolute bottom-0 left-0 text-primary/10 font-mono text-2xl p-4 pointer-events-none">
        11001010
      </div>
      <div className="absolute bottom-0 right-0 text-primary/10 font-mono text-2xl p-4 pointer-events-none">
        01011001
      </div>
      
      {/* Matrix background */}
      <MatrixBackground />
      
      <Navbar />
      <main className="flex-grow pt-16 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
