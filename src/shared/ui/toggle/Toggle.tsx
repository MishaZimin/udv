type ToggleProps = {
  isChecked: boolean;
  onToggle: () => void;
};

const Toggle = ({ isChecked, onToggle }: ToggleProps) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={isChecked}
        onChange={onToggle}
      />
      <div className="animation peer relative h-6 w-10 rounded-full border-[2px] border-graphite bg-white after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border-[2px] after:border-none after:bg-graphite after:transition-all after:content-[''] peer-checked:bg-graphite peer-checked:after:translate-x-full peer-checked:after:bg-white"></div>
    </label>
  );
};

export default Toggle;