import { createContext, useContext } from "react";
import { useUserStore } from "../store/useUserStore";

export const UserStoreContext = createContext<ReturnType<
  typeof useUserStore
> | null>(null);

export const useUserStoreContext = () => {
  const context = useContext(UserStoreContext);
  if (!context) {
    throw new Error(
      "useUserStoreContext must be used within a UserStoreContext.Provider"
    );
  }
  return context;
};
