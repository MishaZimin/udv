export function CheckMail() {
  return (
    <>
      <div className="flex flex-col gap-[16px] text-center">
        <p className="text-center text-[20px] font-semibold">Проверьте почту</p>
        <p className="font-normal">
          Ссылка для входа отправлена
          <br /> на sotrudnik@udv.ru
        </p>
        <p className="text-[14px] opacity-40">
          Запросить новую ссылку можно через 03:30
        </p>
      </div>
    </>
  );
}
