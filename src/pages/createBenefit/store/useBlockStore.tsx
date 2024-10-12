import create from "zustand";

interface BlockState {
  name: string;
  setName: (name: string) => void;
  blocks: { id: number; title: string; description: string }[];
  addBlock: () => void;
  deleteBlock: () => void;
  updateBlock: (id: number, title: string, description: string) => void;
}

export const useBlockStore = create<BlockState>((set) => ({
  name: "",
  setName: (name: string) => set({ name }),

  blocks: [{ id: 0, title: "", description: "" }],
  addBlock: () =>
    set((state) => ({
      blocks: [
        ...state.blocks,
        { id: state.blocks.length + 1, title: "", description: "" },
      ],
    })),
  deleteBlock: () =>
    set((state) => ({
      blocks:
        state.blocks.length > 1 ? state.blocks.slice(0, -1) : state.blocks,
    })),
  updateBlock: (id, title, description) =>
    set((state) => ({
      blocks: state.blocks.map((block) =>
        block.id === id ? { ...block, title, description } : block,
      ),
    })),
}));
