import { MarkdownActionBtn } from "./MarkdownActionBtn";

interface Props {
  isMarkdownPreview: boolean;
  toggleMarkdownPreview: () => void;
  isActive?: boolean;
}

export const MarkdownPreviewButton = ({
  isMarkdownPreview,
  toggleMarkdownPreview,
  isActive,
}: Props) => {
  return (
    <div className="absolute right-[8px] top-[8px] z-50 rounded-[4px] bg-white bg-opacity-70 backdrop-blur-[1px]">
      <MarkdownActionBtn
        iconName={isMarkdownPreview ? "Eye" : "Eye"}
        onClick={toggleMarkdownPreview}
        isActive={isActive}
      />
    </div>
  );
};
