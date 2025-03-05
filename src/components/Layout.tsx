
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
