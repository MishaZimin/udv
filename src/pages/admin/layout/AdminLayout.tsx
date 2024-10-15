type Props = {
  children: React.ReactNode;
};

export const AdminLayout = (props: Props) => {
  return (
    <>
      <div className="flex flex-row gap-[32px]">{props.children}</div>
    </>
  );
};
