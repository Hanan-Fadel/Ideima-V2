import { useEffect, useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import Archive from "./Archieve";
import { ReservationProvider } from "./ReservationsContext";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );
  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>
      {/* 2- Provide Value to child components */}
      <ReservationProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </ReservationProvider>
    </section>
  );
}

export default App;
