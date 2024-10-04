import { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { useUserStore } from "./store/useUserStore.ts";

export const UserStoreContext = createContext<ReturnType<typeof useUserStore>>(
  null!
);

const Root = () => {
  const store = useUserStore();

  return (
    <UserStoreContext.Provider value={store}>
      <App />
    </UserStoreContext.Provider>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
