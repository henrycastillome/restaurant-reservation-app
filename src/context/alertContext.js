import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const alertWarning = () => {
    const toastOptions = {
      style: {
        color: "var(--primary-color-green)",
        fontFamily: "var(--body-font)",
      },
      progressStyle: { backgroundColor: "var(--primary-color-yellow" },
      position: "top-center",
    };

    toast.warning("coming soon", toastOptions);
  };

  const alertSucess = ({ name, lastName }) => {
    const toastOptions = {
      style: {
        color: "var(--primary-color-green)",
        fontFamily: "var(--body-font)",
      },
      position: "top-center",
    };

    toast.success(
      `Thanks ${name} ${lastName} your reservation has been confirmed! \n\n  `,
      toastOptions
    );
  };

  return (
    <AlertContext.Provider
      value={{
        handleClick,
        alertWarning,
        alertSucess,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
