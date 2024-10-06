export function Mail() {
    return (
        <>
            <div className="flex flex-col gap-[12px]">
                <p>Почта</p>
                <div className="flex flex-row border-[1px] border-graphite border-opacity-[40%] rounded-[8px] active:border-mint">
                    <input className=" px-[12px] pt-[8px] pb-[10px] rounded-[8px] w-[235px] bg-card focus:outline-none" />
                    <p className="mx-auto my-auto text-graphite opacity-60 fonr-[16px] w-[65px]">
                        @udv.ru
                    </p>
                </div>
                <div className="flex flex-row gap-[8px]">
                    <input className="focus:ring-mint" type="checkbox" />
                    <p>Запомнить меня</p>
                </div>
            </div>
        </>
    );
}
