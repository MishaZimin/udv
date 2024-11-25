type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  application: any;
};

export const ApplicationText = ({ application }: Props) => {
  //запрос на профиль
  return (
    <button
      className="flex w-full flex-row items-start gap-[32px]"
      onClick={() => {
        console.log("user:", application.user_uuid);
      }}>
      <p className="w-[30%] text-left">Компенсация питания</p>
      <p className="w-[30%] text-left">{application.full_name}</p>
      <p className="w-[15%] text-left">2024.01.01</p>
      <p className="w-[25%] text-left">Ожидает</p>
    </button>
  );
};
