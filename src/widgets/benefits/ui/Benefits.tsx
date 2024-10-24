// import { useQuery } from "@tanstack/react-query";
// import { BenefitServise } from "src/shared/api/api";
// import { Key } from "react";

import { Benefit } from "src/entities/benefit";
import { benefits } from "..";
import { IBenefit } from "..";

export const Benefits = () => {
  // const {
  //   data: products,
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: () => BenefitServise.getProducts(),
  //   select: ({ products }) => products,
  // });

  // console.log(products);

  // if (isLoading) {
  //   return <></>;
  // }

  // if (error) {
  //   return <p>error</p>;
  // }

  return (
    <>
      <div className="grid gap-[32px] pb-[32px] pt-[16px] md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit: IBenefit) => (
          <div className="md:w-full lg:w-[320px]">
            <Benefit
              key={benefit.id}
              title={benefit.title}
              subtext={benefit.subtext}
              image={benefit.image}
              isNewTag={Math.random() < 0.4}
              link={"/benefit"}
            />
          </div>
        ))}
      </div>
    </>
  );
};
