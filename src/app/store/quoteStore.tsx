import { create } from "zustand";

export interface QuoteItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface QuoteStore {
  items: QuoteItem[];
  addToQuote: (item: QuoteItem) => void;
  removeFromQuote: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const useQuoteStore = create<QuoteStore>((set) => ({
  items: [],
  addToQuote: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
        };
      }
      return { items: [...state.items, item] };
    }),

  removeFromQuote: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
    })),
}));
