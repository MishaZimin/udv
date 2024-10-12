import clsx from 'clsx';

interface RadioProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Radio({ checked, onChange }: RadioProps) {
  console.log(checked);
  return (
    <button
      onClick={() => onChange(!checked)}
      className={clsx(
        checked && ' border-mint',
        'w-[16px] h-[16px] rounded-full border p-[2px] hover:border-mint animation',
      )}
    >
      {checked && <div className="w-[8px] h-[8px] rounded-full m-auto bg-mint "></div>}
    </button>
  );
}
