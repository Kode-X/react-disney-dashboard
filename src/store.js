import { create } from "zustand";

const useStore = create((set) => ({
  disneyData: [],
  setDisneyData: (data) => set({ disneyData: data }),
}));

export default useStore;
