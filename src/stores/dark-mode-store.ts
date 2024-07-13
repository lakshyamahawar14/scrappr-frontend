import { createStore } from "zustand/vanilla";

export type DarkModeState = {
  isDarkMode: boolean;
};

export type DarkModeActions = {
  toggleDarkMode: () => void;
};

export type DarkModeStore = DarkModeState & DarkModeActions;

const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return false;
  }
  return localStorage.getItem(key);
};

const setLocalStorage = (key: string, value: boolean) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const initDarkModeStore = (): DarkModeState => {
  const isDarkModeFromStorage = getFromLocalStorage("isDarkMode");
  // const isDarkMode = isDarkModeFromStorage
  //   ? JSON.parse(isDarkModeFromStorage)
  //   : false;
  const isDarkMode = true;
  return { isDarkMode };
};

export const defaultInitState: DarkModeState = {
  isDarkMode: true,
};

export const createDarkModeStore = (
  initState: DarkModeState = defaultInitState
) => {
  return createStore<DarkModeStore>()((set) => ({
    ...initState,
    toggleDarkMode: () =>
      set((state) => {
        setLocalStorage("isDarkMode", !state.isDarkMode);
        return { isDarkMode: !state.isDarkMode };
      }),
  }));
};
