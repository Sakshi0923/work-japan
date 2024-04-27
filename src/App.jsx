import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import ContactUs from "./pages/ContactUs";
import Techonology from "./pages/Techonology";
import Food from "./pages/Food";
import Culture from "./pages/Culture";
import AboutJapan from "./pages/AboutJapan";
import JobListing from "./pages/JobListing";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/techonology":
        title = "";
        metaDescription = "";
        break;
      case "/food":
        title = "";
        metaDescription = "";
        break;
      case "/culture":
        title = "";
        metaDescription = "";
        break;
      case "/about-japan":
        title = "";
        metaDescription = "";
        break;
      case "/job-listing":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/techonology" element={<Techonology />} />
      <Route path="/food" element={<Food />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/about-japan" element={<AboutJapan />} />
      <Route path="/job-listing" element={<JobListing />} />
    </Routes>
  );
}
export default App;
