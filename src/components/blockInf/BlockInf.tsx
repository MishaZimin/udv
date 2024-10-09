import { useBlockStore } from "src/pages/createBenefit/store/useBlockStore";
import { useState } from "react";
import Input from "src/shared/ui/input/Input";

interface BlockInfProps {
    id: number;
}

export function BlockInf({ id }: BlockInfProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const block = useBlockStore((state: any) =>
        state.blocks.find((block: BlockInfProps) => block.id === id)
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateBlock = useBlockStore((state: any) => state.updateBlock);

    const [title, setTitle] = useState(block?.title || "");
    const [description, setDescription] = useState(block?.description || "");

    const handleTitleChange = (value: string) => {
        setTitle(value);
        updateBlock(id, value, description);
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescription(e.target.value);
        updateBlock(id, title, e.target.value);
    };

    return (
        <>
            <p className="font-semibold text-[20px]">Блок с информацией</p>
            <Input
                inputType={"default"}
                value={title}
                onChange={handleTitleChange}
                placeholder="Заголовок блока"
            />
            <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Описание блока"
                className="border-graphite w-full min-h-[120px] px-[12px] pt-[8px] pb-[10px] rounded-[8px] border border-opacity-[40%] focus:outline-none focus:border-opacity-[80%] transition duration-300 transform"
            />
        </>
    );
}
