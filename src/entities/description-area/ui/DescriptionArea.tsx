import { useRef } from "react";

type Props = {
  description: string;
  setDescription: (value: string) => void;
};

export const DescriptionArea = ({ description, setDescription }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="flex flex-col gap-[8px]">
      <textarea
        ref={textareaRef}
        value={description}
        onChange={handleInput}
        placeholder="Описание блока"
        className="animation w-full resize-none rounded-[8px] border border-graphite border-opacity-[20%] px-[12px] pb-[10px] pt-[8px] focus:border-opacity-[80%] focus:outline-none"
        style={{ minHeight: "160px" }}
      />
    </div>
  );
};
