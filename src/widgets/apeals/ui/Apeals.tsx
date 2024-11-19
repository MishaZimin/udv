import { useState } from "react";
import { Button } from "src/shared/ui";
import Toggle from "src/shared/ui/toggle/Toggle";

export const Apeals = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleClick = () => {
    window.open(
      "https://tally.so/forms/np7DvJ",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1>Опрос</h1>
        <p>
          В опросе два вопроса: какими бенефитами пользуются сотрудники
          <br /> и насколько они довольны сервисом.
        </p>
        <p>
          При включении опроса будет рассылка на почту всем пользователям
          <br />
          сервиса и появится баннер на главной странице
        </p>
        <div className="flex flex-row gap-2">
          <Toggle isChecked={isChecked} onToggle={handleToggle} />
          <p>Опрос для пользователей</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white">
        <h1>Фидбек</h1>
        <p>Для обращений используем сервис Tally</p>
        <div className="flex flex-col gap-2">
          <div>
            <Button
              onClick={handleClick}
              text={"Посмотреть обращения"}
              textColor={"light"}
              buttonType={"primary"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
