import Navbar from "./layout/Navbar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from "./Pages/ServicePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./layout/Footer";
 import { Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Always visible */}
        <Navbar />

        {/* Page-specific content */}
        <main className="flex-grow">
 

<Routes>
  <Route path="/" element={<Navigate to="/home" replace />} />
  <Route path="/home" element={<HomePage />} />
  <Route path="/services" element={<ServicePage />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
        </main>

        {/* Always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
