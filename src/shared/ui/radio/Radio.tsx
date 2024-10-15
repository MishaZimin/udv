import clsx from "clsx";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function Radio({ checked, onChange }: Props) {
  console.log(checked);
  return (
    <button
      onClick={() => onChange(!checked)}
      className={clsx(
        checked && "border-mint",
        "animation h-[16px] w-[16px] rounded-full border p-[2px] hover:border-mint",
      )}
    >
      {checked && (
        <div className="m-auto h-[8px] w-[8px] rounded-full bg-mint"></div>
      )}
    </button>
  );
}
