"use client";

import { createContext, useContext, useState } from "react";

type ViewContextType = {
  jsonMode: boolean;
  toggle: () => void;
};

const ViewContext = createContext<ViewContextType>({
  jsonMode: true,
  toggle: () => { },
});

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [jsonMode, setJsonMode] = useState(true);
  return (
    <ViewContext.Provider value={{ jsonMode, toggle: () => setJsonMode((v) => !v) }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  return useContext(ViewContext);
}
