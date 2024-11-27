import { Button } from "src/shared/ui";
import { useCancelApplication } from "../api/mutations/use-cancel";
type Props = {
  date: string;
  name: string;
  status: string;
  id: number;
};

export const Applicaition = ({ date, name, status, id }: Props) => {
  const { mutate: cancelApplication } = useCancelApplication();

  const handleCancel = (id: number) => {
    console.log(id);
    cancelApplication(id, {
      onSuccess: () => {
        // closeModal();
        console.log("cacel apllication");
      },
    });
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-[14px] leading-[20px] text-opacity-60">{date}</p>
        <p className="text-[16px] font-semibold">{name}</p>
        <div className="flex flex-row gap-2">
          <div
            className={`my-auto h-2 w-2 rounded-full ${
              {
                "Заявка одобрена": "bg-mint",
                "Заявка отклонена": "bg-rose",
                "Заявка в обработке": "bg-orange",
                "Заявка завершена": "bg-graphite bg-opacity-[8%]",
              }[status] || "bg-graphite bg-opacity-[8%]"
            }`}></div>
          <p className="text-[14px] leading-[20px]">{status}</p>
        </div>
      </div>
      {status !== "Заявка отклонена" && (
        <div className="my-auto">
          <Button
            text={"Отменить"}
            textColor={"red"}
            buttonType={"none"}
            postion="right"
            onClick={() => {
              handleCancel(id);
            }}
          />
        </div>
      )}
    </div>
  );
};
