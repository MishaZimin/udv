import { useQuery } from "@tanstack/react-query";

import { Benefit } from "src/components/benefit/Benefit";

import { BenefitServise } from "src/api/benefit.servise";
import { Key } from "react";

export function Benefits() {
    const {
        data: products,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["products"],
        queryFn: () => BenefitServise.getProducts(),
        select: ({ products }) => products,
    });

    console.log(products);

    if (isLoading) {
        return <></>;
    }

    if (error) {
        return <p>error</p>;
    }

    return (
        <>
            <div className="">
                <div className="grid grid-cols-3 gap-[32px] mx-auto pb-[48px] pt-[10px]">
                    {products.map(
                        (product: {
                            id: Key | null | undefined;
                            title: string;
                            total: string;
                        }) => (
                            <Benefit
                                key={product.id}
                                title={product.title}
                                subtext={product.total}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    );
}
