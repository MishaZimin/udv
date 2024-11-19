import clsx from "clsx";

interface Props {
  isLoading: boolean;
  text: string;
  className?: string;
  skeletonClassName?: string;
}

export const Text = ({
  isLoading,
  text,
  className,
  skeletonClassName,
}: Props) => {
  return (
    <div className={clsx("relative", className)}>
      {isLoading ? (
        <div
          className={clsx(
            "animate-pulse rounded bg-gray-300",
            skeletonClassName || "h-4 w-24",
          )}
        />
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};
