import Navbar from "./layout/Navbar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ServicePage from "./Pages/ServicePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./layout/Footer";

import { BookingProvider } from "./Context/BookingContext";
import BookingModal from "./components/BookingModal";

function App() {
  return (
    <Router>
      <BookingProvider>
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

          {/* Modal lives here globally */}
          <BookingModal />
        </div>
      </BookingProvider>
    </Router>
  );
}

export default App;
