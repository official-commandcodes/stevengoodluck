import { createContext, useContext } from "react";

const ContactContext = createContext();

// eslint-disable-next-line react/prop-types
const ContactContextProvider = ({ children }) => {
  function handleContact() {
    const ContactSection = document.getElementById("ContactSection");
    ContactSection.scrollIntoView({ behavior: "smooth" });
  }

  return <ContactContext.Provider value={{ handleContact }}>{children}</ContactContext.Provider>;
};

function useContactContext() {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error("Provider can be found");
  }

  return context;
}

export { ContactContextProvider, useContactContext };
