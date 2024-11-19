import { ReactNode } from "react";

interface LoadersListProps {
  count: number;
  children: ReactNode;
}

export const LoadersList = ({ count, children }: LoadersListProps) => (
  <>
    {Array.from({ length: count }).map((_, index) => (
      <div key={index}>{children}</div>
    ))}
  </>
);
