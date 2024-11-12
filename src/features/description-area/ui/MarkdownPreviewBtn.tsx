// src/features/description/components/MarkdownPreviewButton.tsx
import { MarkdownActionBtn } from "./MarkdownActionBtn";

interface Props {
  isMarkdownPreview: boolean;
  toggleMarkdownPreview: () => void;
}

export const MarkdownPreviewButton = ({
  isMarkdownPreview,
  toggleMarkdownPreview,
}: Props) => {
  return (
    <div className="absolute right-[8px] top-[8px] rounded-[4px] bg-white">
      <MarkdownActionBtn
        iconName={isMarkdownPreview ? "Eye" : "Eye"}
        onClick={toggleMarkdownPreview}
      />
    </div>
  );
};
