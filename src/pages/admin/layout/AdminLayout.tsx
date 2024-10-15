interface Props {
  children: React.ReactNode;
}

export const AdminLayout = (props: Props) => {
  return (
    <>
      <div className="flex flex-row gap-[32px]">
        {/* <div>
          <Menu menu={ADMINMENU} orientation="vertical" />
        </div> */}
        {props.children}
      </div>
    </>
  );
};
