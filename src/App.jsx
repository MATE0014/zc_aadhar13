import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wlcm from "./components/Wlcm/Wlcm";
import Countdown from "./components/Countdown/Countdown";
import Registration from "./components/Registration/Registration";
import Events from "./components/EventsPage/EventsPage";
import countdownVideo from "./videos/cdbgv.mp4";
import OurEvents from "./components/OurEvents/OurEvents";
import CreditsSection from "./components/CreditsSection/CreditsSection";

function App() {
  return (
    <div id="root" style={{ margin: 0, padding: 0 }}>
      {/* Navbar (Header) */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main style={{ margin: 0, padding: 0 }}>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Wlcm />
                <Countdown
                  targetDate="2025-02-14T23:59:59"
                  backgroundVideo={countdownVideo}
                />
                <div style={{ padding: 0, margin: 0, height: "800px" }}>
                  <OurEvents />
                </div>
                <div style={{ padding: 0, margin: 0, height: "400px" }}>
                  <CreditsSection />
                </div>
              </>
            }
          />
          {/* Registration Page */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
