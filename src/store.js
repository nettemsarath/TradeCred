import create from "zustand";
import { persist, devtools } from "zustand/middleware";

const store = (set) => ({});

const useStore = create(
  process.env.NODE_ENV !== "production" ? devtools(store) : store
);

export default useStore;
