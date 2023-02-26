import { create } from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  Theme: true,
  settheme: (mode) => set({ Theme: mode }),
  Bgcolor: "",
  setBgcolor: (color) => set({ Bgcolor: color }),
  HeaderColor: "#ffffff",
  SetHeadercolor: (color) => set({ HeaderColor: color }),
  BorderColor: "f0f0f0",
  SetBorderColor: (color) => set({ BorderColor: color }),
});
store = persist(store, { name: "customizetheme" });
const useStore = create(store);
export default useStore;
