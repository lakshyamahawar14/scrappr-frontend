"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type DarkModeStore,
  createDarkModeStore,
  initDarkModeStore,
} from "@/stores/dark-mode-store";

export type DarkModeStoreApi = ReturnType<typeof createDarkModeStore>;

export const DarkModeStoreContext = createContext<DarkModeStoreApi | undefined>(
  undefined
);

export interface DarkModeStoreProviderProps {
  children: ReactNode;
}

export const DarkModeStoreProvider = ({
  children,
}: DarkModeStoreProviderProps) => {
  const storeRef = useRef<DarkModeStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createDarkModeStore(initDarkModeStore());
  }

  return (
    <DarkModeStoreContext.Provider value={storeRef.current}>
      {children}
    </DarkModeStoreContext.Provider>
  );
};

export const useDarkModeStore = <T,>(
  selector: (store: DarkModeStore) => T
): T => {
  const darkModeStoreContext = useContext(DarkModeStoreContext);

  if (!darkModeStoreContext) {
    throw new Error(
      `useDarkModeStore must be used within DarkModeStoreProvider`
    );
  }

  return useStore(darkModeStoreContext, selector);
};
