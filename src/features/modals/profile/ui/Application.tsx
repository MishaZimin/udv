import { Button } from "src/shared/ui";
type Props = {
  date: string;
  name: string;
  status: string;
  id: number;
};
export const Applicaition = ({ date, name, status, id }: Props) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-[16px] leading-[20px] text-opacity-60">{date}</p>
        <p className="font-semibold">{name}</p>
        <div className="flex flex-row gap-2">
          <div
            className={`my-auto h-2 w-2 rounded-full ${
              {
                pending: "bg-mint",
                rejected: "bg-rose",
                in_progress: "bg-orange",
                completed: "bg-graphite bg-opacity-[8%]",
              }["pending"] || "bg-graphite bg-opacity-[8%]"
            }`}></div>
          <p className="text-[16px] leading-[20px]">{status}</p>
        </div>
      </div>
      <div className="my-auto">
        <Button
          text={"Отменить"}
          textColor={"red"}
          buttonType={"none"}
          postion="right"
          onClick={() => {
            console.log("Отменить", id);
          }}
        />
      </div>
    </div>
  );
};
