import { createContext } from "react";

export type AppContextType = {
  name: string | null;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);