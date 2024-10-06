export const NewTag = () => {
    return (
        <>
            {Math.random() < 0.5 ? (
                <div className="absolute top-[-8px] right-[-8px] rounded-full bg-yellow px-[8px] pt-[2px] pb-[4px]">
                    <p className="font-normal text-text">Новое</p>
                </div>
            ) : null}
        </>
    );
};
