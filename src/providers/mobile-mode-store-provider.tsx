"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type MobileModeStore,
  createMobileModeStore,
  initMobileModeStore,
} from "@/stores/mobile-mode-store";

export type MobileModeStoreApi = ReturnType<typeof createMobileModeStore>;

export const MobileModeStoreContext = createContext<
  MobileModeStoreApi | undefined
>(undefined);

export interface MobileModeStoreProviderProps {
  children: ReactNode;
}

export const MobileModeStoreProvider = ({
  children,
}: MobileModeStoreProviderProps) => {
  const storeRef = useRef<MobileModeStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createMobileModeStore(initMobileModeStore());
  }

  return (
    <MobileModeStoreContext.Provider value={storeRef.current}>
      {children}
    </MobileModeStoreContext.Provider>
  );
};

export const useMobileModeStore = <T,>(
  selector: (store: MobileModeStore) => T
): T => {
  const mobileModeStoreContext = useContext(MobileModeStoreContext);

  if (!mobileModeStoreContext) {
    throw new Error(
      `useMobileModeStore must be used within MobileModeStoreProvider`
    );
  }

  return useStore(mobileModeStoreContext, selector);
};
