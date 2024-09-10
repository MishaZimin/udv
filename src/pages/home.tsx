import { useStore } from "../store/useStore.tsx";
import { Link } from "react-router-dom";

function Home() {
    const cost = useStore((state) => state.cost);
    const setCost = useStore((state) => state.setCost);

    return (
        <>
            <div className="flex flex-col h-svh">
                <div className="mx-auto my-auto ">
                    <div className="p-2 mb-12 font-mono text-2xl border-4 border-black ">
                        <Link to={"/test"}>
                            <p className="mb-0 transition duration-200 transform hover:text-teal-600">
                                U D V
                            </p>
                        </Link>
                        <p className="">{cost}</p>
                        <button
                            className=""
                            onClick={() => {
                                setCost(cost + 1);
                            }}>
                            <p className="transition duration-200 transform hover:text-teal-600">
                                btn+1
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
