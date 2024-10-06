// import Layout from "src/components/layout/Layout";
import BackButton from "src/shared/image/BackButton.svg";

import { useGoBack } from "src/shared/hooks/useGoBack";
import { Menu } from "src/components/menu/Menu";
import { BENEFIT } from "src/components/menu/menu.data";

export function BenefitPage() {
    return (
        <>
            <div className="mx-auto h-svh w-[1024px]">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-[8px] py-[32px]">
                        <button
                            onClick={useGoBack()}
                            className="w-[40px] h-[40px] my-auto">
                            <img className="mx-auto" src={BackButton} />
                        </button>
                        <p className="font-semibold text-[32px]">
                            Развивающая среда
                        </p>
                    </div>
                    <div className="flex flex-row gap-[32px]">
                        <div>
                            <Menu menu={BENEFIT} orientation="vertical" />
                        </div>
                        <div className="w-full h-[500px] bg-card p-[16px] rounded-[16px]">
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
