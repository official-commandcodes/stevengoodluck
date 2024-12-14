import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Faqs from "./Pages/Faqs";
import { ContactContextProvider } from "./context/ContactContext";

function App() {
  return (
    <BrowserRouter>
      <ContactContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </ContactContextProvider>
    </BrowserRouter>
  );
}

export default App;
