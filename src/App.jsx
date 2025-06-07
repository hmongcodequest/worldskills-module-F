import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Section
import { Header } from "./Sections/Header";
import { LayoutCallToAction } from "./Sections/LayoutCallToAction";
import { LayoutMapAttraction } from "./Sections/LayoutMapAttraction";
import { LayoutVideo } from "./Sections/LayoutVideo";
import { LayoutEssentialInformation } from "./Sections/LayoutEssentialInformation";
import { LayoutOtherInformation } from "./Sections/LayoutOtherInformation";
import { ContactUs } from "./Sections/contactUs";
import { Footer } from "./Sections/Footer";
import useOnlineStatus from "./hook/OnlineStatus";

function App() {
  const isOnline = useOnlineStatus();
  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        // navigator.serviceWorker.getRegistrations().then((registrations) => {
        //   registrations.forEach((reg) => reg.unregister());
        // });
        navigator.serviceWorker
          .register("/ws01_module_c/service-worker.js")
          .then((registration) => {
            console.log("SW registered successfully:", registration);
          })
          .catch((error) => {
            console.error("SW registration failed:", error);
          });
      });
    }
  }, []);
  if (isOnline) {
    console.log("Online");
    document.title = "Lyou Online";
  } else {
    console.log("Offline");
    document.title = "Lyou Offline";
  }
  return (
    <>
      <Header />
      <main>
        <LayoutCallToAction />
        <LayoutMapAttraction />
        <LayoutVideo />
        <LayoutEssentialInformation />
        <LayoutOtherInformation />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}

export default App;
