import Delete from "src/shared/assets/svgs/Delete.svg";

export const DeleteBenefit = ({ openModal }: { openModal: () => void }) => {
  return (
    <button
      onClick={openModal}
      className="animation cursor-pointer rounded-[8px] p-[4px] hover:bg-graphite hover:bg-opacity-[8%]"
    >
      <img src={Delete} />
    </button>
  );
};
