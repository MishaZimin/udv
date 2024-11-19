import { Button } from "src/shared/ui";
import { useBenefit } from "src/pages/benefit";
import Markdown from "react-markdown";
import { BigModal } from "src/shared/ui/modal/ui/BigModal";
import { useEffect } from "react";
import { TextLoader } from "src/shared/ui/loader/TextLoader";
import { LoadersList } from "src/shared/ui/loader/LoadersList";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  benefitId: string;
};

export const BenefitModal = ({ isOpen, closeModal, benefitId }: Props) => {
  const { benefitData, error, isLoading } = useBenefit(Number(benefitId));

  useEffect(() => {
    console.log(benefitData);
  }, [benefitData]);

  if (error) {
    return <p>error {error.message}</p>;
  }

  const header = isLoading ? (
    <TextLoader height="36px" backgroundColor="bg-white" />
  ) : (
    <>{benefitData.name}</>
    // <TextLoader height="36px" backgroundColor="bg-white" />
  );

  const footer = (
    <>
      <Button
        text={"Подать заявку"}
        textColor={"light"}
        buttonType={"primary"}
        onClick={closeModal}
        disabled={isLoading}
      />
    </>
  );
  const children = isLoading ? (
    <div className="mt-2 flex flex-col gap-4">
      <LoadersList count={3}>
        <div className="mb-4 w-1/2">
          <TextLoader backgroundColor="bg-white" />
        </div>
        <LoadersList count={3}>
          <div className="mb-4">
            <TextLoader backgroundColor="bg-white" />
          </div>
        </LoadersList>
      </LoadersList>
    </div>
  ) : (
    <>
      <p className="text-[14px] leading-[20px] text-opacity-[60%]">Описание</p>
      <div className="prose">
        <Markdown
          components={{
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mint no-underline visited:text-mintactive hover:text-minthover">
                {children}
              </a>
            ),
          }}>
          {benefitData.text}
        </Markdown>
      </div>
    </>
  );
  return (
    <BigModal
      isOpen={isOpen}
      onClose={closeModal}
      closeModal={closeModal}
      header={header}
      footer={footer}
      children={children}></BigModal>
  );
};
