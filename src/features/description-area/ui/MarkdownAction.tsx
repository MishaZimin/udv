import { MarkdownActionBtn } from "./MarkdownActionBtn";

type MarkdownActionProps = {
  applyMarkdown: (type: string) => void;
};

export const MarkdownAction = ({ applyMarkdown }: MarkdownActionProps) => {
  return (
    <div className="absolute bottom-[8px] left-[8px] h-6 rounded-[4px] bg-white bg-opacity-80 backdrop-blur-[1px]">
      <div className="flex flex-row gap-2">
        <MarkdownActionBtn
          iconName="Bold"
          onClick={() => applyMarkdown("Bold")}
        />
        <MarkdownActionBtn
          iconName="Header"
          onClick={() => applyMarkdown("Header")}
        />
        <MarkdownActionBtn
          iconName="Italic"
          onClick={() => applyMarkdown("Italic")}
        />
        <div className="h-6 w-[1px] bg-graphite bg-opacity-[4%]"></div>
        <MarkdownActionBtn
          iconName="Link"
          onClick={() => applyMarkdown("Link")}
        />
        <MarkdownActionBtn
          iconName="OrderList"
          onClick={() => applyMarkdown("OrderList")}
        />
        <MarkdownActionBtn
          iconName="UnorderedList"
          onClick={() => applyMarkdown("UnorderedList")}
        />
      </div>
    </div>
  );
};
