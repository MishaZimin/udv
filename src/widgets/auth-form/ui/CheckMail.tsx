import { useState, useEffect } from "react";

import { useMailStore } from "../stores/use-user-mail-stroe";
import { useLogin } from "../api/mutations/use-login";
import { Loader } from "src/shared/ui";

export const CheckMail = () => {
  const { mail } = useMailStore();
  const [timeLeft, setTimeLeft] = useState(210);
  const [canRequestNewLink, setCanRequestNewLink] = useState(false);

  const { mutate: login, isPending } = useLogin({});

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      setCanRequestNewLink(true);
    }
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handleRequestNewLink = () => {
    console.log("Запрос новой ссылки отправлен");

    login({ email: mail });

    setTimeLeft(210);
    setCanRequestNewLink(false);
  };

  return (
    <>
      {isPending && <Loader />}

      <div className="flex flex-col gap-[16px] text-center">
        <p className="text-center text-[20px] font-semibold">Проверьте почту</p>
        <p className="font-normal">
          Ссылка для входа отправлена
          <br /> на {mail}
        </p>
        {canRequestNewLink ? (
          <button onClick={handleRequestNewLink}>
            <p className="text-[14px] text-mint">Запросить новую ссылку</p>
          </button>
        ) : (
          <p className="text-[14px] opacity-40">
            Запросить новую ссылку можно через {formatTime(timeLeft)}
          </p>
        )}
      </div>
    </>
  );
};
