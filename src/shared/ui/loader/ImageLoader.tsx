interface Props {
  height?: string | "card";
  backgroundColor?: string;
}

export const ImageLoader = ({
  height = "22px",
  backgroundColor = "bg-card",
}: Props) => {
  return (
    <div
      className={`skeleton w-full rounded-[8px] ${height === "card" && "pb-[51.4%]"} ${backgroundColor}`}
      style={{
        height: height,
      }}></div>
  );
};

// export const ImageLoader = () => {
//   return <div className="skeleton h-[22px] w-full rounded-[8px] bg-card"></div>;
// };
