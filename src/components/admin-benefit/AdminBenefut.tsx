import { Link } from "react-router-dom";

import { Benefit } from "src/components/benefit/Benefit";

import Delete from "src/shared/assets/svgs/Delete.svg";
import Pencil from "src/shared/assets/svgs/Pencil.svg";
import { useModal } from "../modal/hooks/useModal";
import Modal from "../modal/ui/Modal";
import Button from "src/shared/ui/button/Button";

type Props = {
  title: string;
  subtext: string;
  image?: string | null;
  isNewTag: boolean;
  link: string;
};

export function AdminBenefit({ title, subtext, link, isNewTag, image }: Props) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="relative">
      <Benefit
        title={title}
        subtext={subtext}
        isNewTag={isNewTag}
        link={link}
        image={image}
      />
      <div className="absolute bottom-[8px] right-[8px] flex h-[30px] w-[60px] flex-row rounded-[8px] bg-graphite bg-opacity-[4%]">
        <Link
          to={"/create-benefit/details"}
          className="animation cursor-pointer rounded-[8px] p-[4px] hover:bg-graphite hover:bg-opacity-[8%]"
        >
          <img src={Pencil} />
        </Link>
        <button
          onClick={openModal}
          className="animation cursor-pointer rounded-[8px] p-[4px] hover:bg-graphite hover:bg-opacity-[8%]"
        >
          <img src={Delete} />
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="flex flex-col gap-[32px]">
          <p className="text-center text-[20px] font-semibold leading-[28px]">
            Вы уверены, <br />
            что хотите удалить бенефит?
          </p>
          <div className="flex flex-col gap-[8px]">
            <Button text={"Удалить"} textColor={"light"} buttonType={"red"} />
            <Button
              onClick={closeModal}
              text={"Отмена"}
              textColor={"dark"}
              buttonType={"secondary"}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
