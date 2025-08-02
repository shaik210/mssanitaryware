import { create } from "zustand";

interface QuoteModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useQuoteModal = create<QuoteModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
