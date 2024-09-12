import { create } from "zustand";

const useStore = create((set) => ({
  disneyData: [],
  loading: true,
  setDisneyData: (data) => set({ disneyData: data, loading: false }),
  setLoading: (loading) => set({ loading }),
}));

export default useStore;
