import create from "zustand";

interface BlockState {
    name: string;
    setName: (name: string) => void;
    blocks: { id: number; title: string; description: string }[];
    addBlock: () => void;
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
    updateBlock: (id, title, description) =>
        set((state) => ({
            blocks: state.blocks.map((block) =>
                block.id === id ? { ...block, title, description } : block
            ),
        })),
}));

// import create from "zustand";
// import { persist } from "zustand/middleware";

// // Создаем Zustand store с использованием middleware persist для сохранения в localStorage
// interface BlockState {
//     blocks: { id: number; title: string; description: string }[];
//     addBlock: () => void;
//     updateBlock: (id: number, title: string, description: string) => void;
// }

// export const useBlockStore = create<BlockState>(
//     persist(
//         (set) => ({
//             blocks: [],
//             addBlock: () =>
//                 set((state) => ({
//                     blocks: [
//                         ...state.blocks,
//                         {
//                             id: state.blocks.length + 1,
//                             title: "",
//                             description: "",
//                         },
//                     ],
//                 })),
//             updateBlock: (id, title, description) =>
//                 set((state) => ({
//                     blocks: state.blocks.map((block) =>
//                         block.id === id
//                             ? { ...block, title, description }
//                             : block
//                     ),
//                 })),
//         }),
//         {
//             name: "block-storage",
//         }
//     )
// );
