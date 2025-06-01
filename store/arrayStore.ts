import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ArrayStore {
  array: string[];
  add: (item: string) => void;
  remove: (item: string) => void;
}

const useArrayStore = create<ArrayStore>()(
  persist(
    (set) => ({
      array: ["ALI", "REZA", "MAHDI"],
      add: (item) => set((state) => ({ array: [...state.array, item] })),
      remove: (item) =>
        set((state) => ({ array: state.array.filter((i) => i !== item) })),
    }),
    {
      name: "__ARRAY_STORE",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useArrayStore;
