import { SelectedPage } from "@/shared/types";
import { create } from "zustand";

interface SelectedPageState {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
}

const useSelectedPageStore = create<SelectedPageState>((set) => ({
  selectedPage: SelectedPage.Home,
  setSelectedPage: (page) => set({ selectedPage: page }),
}));

export default useSelectedPageStore;
