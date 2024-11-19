export const DashedLine = ({
  color = "currentColor",
  dashArray = "3",
  strokeWidth = 0.5,
  borderRadius = 5,
}: {
  color?: string;
  dashArray?: string;
  strokeWidth?: number;
  borderRadius?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox={`0 0 100 100`}>
      <rect
        x={strokeWidth / 2}
        y={strokeWidth / 2}
        width={100 - strokeWidth}
        height={100 - strokeWidth}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
        rx={borderRadius}
        ry={borderRadius}
      />
    </svg>
  );
};
