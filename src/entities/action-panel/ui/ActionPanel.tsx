import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ActionPanel = ({ children }: Props) => {
  return (
    <div className="bottom-[8px] right-[8px] flex h-[30px] flex-row rounded-[8px] bg-card">
      {children}
    </div>
  );
};
