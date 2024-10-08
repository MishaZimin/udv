import Profile from "src/shared/image/Profile.svg";

export function Employee() {
    return (
        <div className="flex flex-row gap-[32px]  text-left border-t py-[16px]">
            <div className="w-[48px] h-[48px] rounded-full bg-card">
                <img src={Profile} alt="avatar" className="w-full p-[8px]" />
            </div>
            <div className="w-full grid grid-flow-col gap-[32px] justify-stretch">
                <p className="my-auto">Константин Сергеев</p>
                <p className="my-auto">Продуктовый дизайнер</p>

                <p className="my-auto">до 3 месяцев</p>
            </div>
        </div>
    );
}
