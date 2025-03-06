
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { MatrixBackground } from "./MatrixBackground";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen soft-blue-gradient relative">
      <div className="absolute inset-0 tech-pattern opacity-30 pointer-events-none"></div>
      <MatrixBackground />
      <Navbar />
      <main className="flex-grow pt-16 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
