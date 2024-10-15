export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen">
        <div className="mx-auto my-auto flex w-[400px] flex-col justify-between gap-[40px] rounded-[16px] bg-card px-[40px] py-[48px]">
          {children}
        </div>
      </div>
    </>
  );
}
