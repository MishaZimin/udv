/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadersList } from "src/shared/ui/loader/LoadersList";
import { Applicaition } from "./MyApplication";
import { useApplications } from "../api/queries/use-applications";
import { TextLoader } from "src/shared/ui/loader/TextLoader";

export const ApplicationsList = () => {
  const { data: applications, isLoading, isError } = useApplications();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (isLoading) {
    return (
      <LoadersList count={8}>
        <div className="mb-4 flex w-4/12 flex-col gap-2">
          <LoadersList count={3}>
            <TextLoader height="20px" backgroundColor="bg-white" />
          </LoadersList>
        </div>
      </LoadersList>
    );
  }

  if (isError) {
    return <p className="text-red-500">Ошибка загрузки заявок</p>;
  }
  console.log(applications);

  return (
    <div className="flex flex-col gap-4">
      {!applications && applications.length === 0 ? (
        <p>У Вас нет заявок</p>
      ) : (
        applications.map((application: any, index: number) => (
          <div key={index}>
            <Applicaition
              date={formatDate(application.creation_date)}
              name={application.name}
              status={application.status}
              id={application.request_id}
            />
          </div>
        ))
      )}
    </div>
  );
};
