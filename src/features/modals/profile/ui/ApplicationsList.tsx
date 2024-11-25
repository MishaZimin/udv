import { LoadersList } from "src/shared/ui/loader/LoadersList";
import { Applicaition } from "./Application";

export const ApplicationsList = () => {
  return (
    <div className="flex flex-col gap-4">
      <LoadersList count={15}>
        <div className="">
          <Applicaition
            date={"08 ноября 2024"}
            name={"Страхование"}
            status={"Заявка одобрена"}
            id={1}
          />
        </div>
      </LoadersList>
    </div>
  );
};
