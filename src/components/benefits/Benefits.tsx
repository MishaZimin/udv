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
      <div className="grid gap-[32px] pb-[32px] pt-[16px] md:grid-cols-2 lg:grid-cols-3">
        {products.map(
          (product: {
            id: Key | null | undefined;
            title: string;
            total: string;
          }) => (
            <Benefit
              key={product.id}
              title={"Такси"}
              subtext={"Поездки между офисами и в командировках"}
              isNewTag={Math.random() < 0.4}
              link={"/benefit"}
            />
          ),
        )}
      </div>
    </>
  );
}
