import { Alert } from "flowbite-react";
import Dashboard from "./pages/dashboard/page.jsx";
import SideNav from "./pages/sidenav/page";
import Navbar from "./pages/navbar/page";

export default function Home() {
  return (
    <main>
      <div className="md:flex justify-start relative">
        <SideNav />
        <div className="md:absolute md:left-[27%] lg:left-[22%]">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </main>
  );
}
