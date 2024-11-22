import { Badge } from "src/shared/ui/badge/Badge";
import { BenefitText, BenefitImage, IBenefitCard } from "..";
import { ReactNode, useMemo } from "react";
import { BenefitModal } from "src/features/modals/benefit/ui/BenefitModal";
import { useModal } from "src/shared/ui";

type Props = {
  isNewTag: boolean;
  benefit: IBenefitCard;
  actionSlot?: ReactNode;
  preview?: boolean;
};

export const Benefit = ({ isNewTag, benefit, actionSlot, preview }: Props) => {
  const {
    isOpen: isOpenBenefit,
    openModal: openBenefitModal,
    closeModal: closeBenefitModal,
  } = useModal();

  const content = useMemo(() => {
    return (
      <button
        className="animation relative mx-auto flex w-full min-w-[320px] flex-col justify-between gap-[16px] rounded-[16px] bg-card px-[16px] py-[16px]"
        onClick={openBenefitModal}>
        {isNewTag && <Badge text={"Новое"} />}
        <BenefitText name={benefit.name} card_name={benefit.card_name} />
        <BenefitImage cover_url={benefit.cover_url} />
      </button>
    );
  }, [isNewTag, benefit, openBenefitModal]);

  return (
    <div className="relative">
      {content}

      {actionSlot && (
        <div className="absolute bottom-[8px] right-[8px]">{actionSlot}</div>
      )}

      {isOpenBenefit && !preview && (
        <BenefitModal
          isOpen={isOpenBenefit}
          closeModal={closeBenefitModal}
          benefitId={benefit.id.toString()}
          benefitImg={benefit.cover_url}
        />
      )}
    </div>
  );
};
