// src/features/description/hooks/useApplyMarkdown.ts
import { useCallback } from "react";

export const useApplyMarkdown = (
  description: string,
  setDescription: (value: string) => void,
) => {
  const applyMarkdown = useCallback(
    (markdownType: string) => {
      const textarea = document.querySelector(
        "textarea",
      ) as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = description.slice(start, end);

      let newText;
      switch (markdownType) {
        case "Bold":
          if (selectedText.startsWith("**") && selectedText.endsWith("**")) {
            newText = selectedText.slice(2, -2);
          } else {
            newText = `**${selectedText}**`;
          }
          break;

        case "Header":
          if (selectedText.startsWith("## ")) {
            newText = selectedText.slice(3);
          } else {
            newText = `## ${selectedText}`;
          }
          break;

        case "Link":
          if (selectedText.startsWith("[") && selectedText.includes("](url)")) {
            newText = selectedText.slice(1, selectedText.indexOf("]"));
          } else {
            newText = `[${selectedText}](url)`;
          }
          break;

        case "OrderList":
          newText = selectedText
            .split("\n")
            .map((line, index) =>
              line.startsWith(`${index + 1}. `)
                ? line.slice(3)
                : `${index + 1}. ${line}`,
            )
            .join("\n");
          break;

        case "UnorderedList":
          newText = selectedText
            .split("\n")
            .map((line) =>
              line.startsWith("- ") ? line.slice(2) : `- ${line}`,
            )
            .join("\n");
          break;

        default:
          newText = selectedText;
      }

      const updatedDescription =
        description.slice(0, start) + newText + description.slice(end);
      setDescription(updatedDescription);

      textarea.focus();
      textarea.setSelectionRange(start, start + newText.length);
    },
    [description, setDescription],
  );

  return { applyMarkdown };
};
