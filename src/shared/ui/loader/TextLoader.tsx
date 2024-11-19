import { useEffect, useState } from "react";
import clsx from "clsx";

interface TextLoaderProps {
  height?: string;
  backgroundColor?: string;
}

export const TextLoader = ({
  height = "22px",
  backgroundColor = "bg-card",
}: TextLoaderProps) => {
  const [randomWidth, setRandomWidth] = useState<string>("");

  useEffect(() => {
    const randomWidthValue = Math.random() * 0.5 + 0.5;
    setRandomWidth(`${randomWidthValue * 100}%`);
  }, []);

  return (
    <div
      className={clsx("skeleton rounded-[8px]", backgroundColor)}
      style={{
        width: randomWidth,
        height: height,
      }}></div>
  );
};
