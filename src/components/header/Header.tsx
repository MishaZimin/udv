import { LogoUDV } from "src/shared/ui/logo/logo";
import { Link } from "react-router-dom";
// import { Menu } from "../menu/Menu";
// import { HEADERMENU } from "../menu/menu.data";

const Header = () => {
    return (
        <>
            <div className="fixed z-10 w-full bg-white">
                <header className="flex justify-between align-middle py-auto h-[120px] w-[1024px]">
                    <div className="my-auto pb-[12px]">
                        <LogoUDV width={"w-[160px]"} />
                    </div>
                    {/* <div className="my-auto pb-[12px]">
                        <Menu menu={HEADERMENU} orientation="horizontal" />
                    </div> */}
                    <div className="flex my-auto gap-[20px] pb-[12px]">
                        <Link to={"/profile"}>
                            <img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFxcXFRcXFxcXFxcVFxcXFxcVFxUYHSggGB0lHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFRAPFS0dFRktLS0rLSstNy0rLS0rKy0rNy0tLTctLSs3Ky0rKysrKysrKysrKysrKysrLSsrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIRABAQEAAQMEAwAAAAAAAAAAAAER8BIxQQKhweEhUZH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A5CqRWVVCqCKJgGKigAAKJAUAEhoACgCYqACKCBFBBUBFABWdUEXAAAgCgAGAKAAFQFAwAACIoAmKAgYoIBQANAEAXIM4oKIUFEUBUBVhQAoCIAKAUAoYAAAAAlUAQAAoUEBQTQUEUBQFoIRSCFRQUAEFgYKRFQQCqCBQBFoCClBKLUgCYtAEUBcGec/AClAUiouAACBAqAqTuQAVFFqKAVKsSgBFBAAImNIAi4AhioBYWACjPVzAFEUUVFAEAXTEUBYigYi6AFSrBARQSBggFoKAEgAqAIUAMVKC4iKAuM1QURQNEUAFAEXUCiLADUVQAAiEAUEAAAAARTQQsVAMDAAgaC1KUBQhoEAAtVCAolAFAChCAIoAgiDSCKLQQFQAKFNAyiYApgALggLAAAACgCopKCKCACUFSlVRKEKAUoAgAFACgACAVQAIEKCoEAUTQUwAXCRlaCoAGAQFENAAAS1UBUwiggAAICidPOUAABUFABAUCAYqRZQEUAoQAgAAAAAGmoAsQxAUKgKJSAmgoAFAVmtAIYAoAEAANKAuiLQEUBFTQFQAIIAtENAA0AEoLonUAuIEAVFACGgAAqBoKRAFAAoigipAACAFDQAQFQAKCAoaASiFoKCAqoAKkAUQBaAAAAAAkU0BFqAKVAIABoIAUAXRkAi0AKvkATnsoAXyfYAlXz/VASJ6fgAagAL+mVAL2QAWAAgAJU9XYAXysAE57FAEAB//2Q=="
                                alt="avatar"
                                className="w-[40px] rounded-full"
                            />
                        </Link>
                        <Link to={"/exit"}>
                            <button className="py-[8px] px-[16px] bg-card rounded-[8px] duration-300 transform hover:shadow-sm">
                                <p>Выйти</p>
                            </button>
                        </Link>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
