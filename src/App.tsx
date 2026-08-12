import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Episodes from "./components/Episodes/Episodes";
import SubmitStory from "./components/SubmitStory/SubmitStory";
import About from "./components/About/About";
import BeAGuest from "./components/BeAGuest/BeAGuest";
import Footer from "./components/Footer/Footer";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

import { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(true);
  const [finishLoading, setFinishLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinishLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 600);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loading || finishLoading ? (
        <>
          <Navbar />

          <main>
            <Hero />

            <Episodes />

            <SubmitStory />

            <About />

            <BeAGuest />
          </main>

          <Footer />

          <ScrollToTop />

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4500,
              style: {
                background: "#151515",
                color: "#ffffff",
                border: "1px solid rgba(255,49,49,.35)",
                borderRadius: "12px",
              },
            }}
          />
        </>
      ) : null}

      {loading && <LoadingScreen finish={finishLoading} />}
    </>
  );
}

export default App;
