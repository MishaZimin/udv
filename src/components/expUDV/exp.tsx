import { Menu } from "src/components/menu/Menu";
import { EXPUDV } from "src/components/menu/menu.data";

export function ExpUDV() {
    return (
        <>
            <div>
                <div className="flex gap-[16px]">
                    <p className="my-auto text-[16px]">Опыт в UDV</p>
                    <Menu menu={EXPUDV} orientation="horizontal" />
                </div>
            </div>
        </>
    );
}
