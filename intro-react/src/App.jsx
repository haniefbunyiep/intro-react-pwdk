import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/cores/Navbar";
import Footer from "./components/cores/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
