import { createStore } from "zustand/vanilla";

export type MobileModeState = {
  isMobileMode: boolean;
  isMobileMenu: boolean;
};

export type MobileModeActions = {
  toggleMobileMode: () => void;
  toggleMobileMenu: () => void;
};

export type MobileModeStore = MobileModeState & MobileModeActions;

const getInitialMobileMode = () => {
  if (typeof window !== "undefined" && window.innerWidth <= 640) {
    return true;
  }

  return false;
};

export const initMobileModeStore = (): MobileModeState => {
  const isMobileMode = getInitialMobileMode();
  return { isMobileMode, isMobileMenu: false };
};

export const defaultInitState: MobileModeState = {
  isMobileMode: false,
  isMobileMenu: false,
};

export const createMobileModeStore = (
  initState: MobileModeState = defaultInitState
) => {
  return createStore<MobileModeStore>()((set) => ({
    ...initState,
    toggleMobileMode: () =>
      set((state) => {
        return { isMobileMode: !state.isMobileMode };
      }),
    toggleMobileMenu: () =>
      set((state) => ({
        isMobileMenu: !state.isMobileMenu,
      })),
  }));
};
