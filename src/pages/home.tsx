import { useStore } from "../store/useStore.tsx";

function Home() {
    const cost = useStore((state) => state.cost);
    const setCost = useStore((state) => state.setCost);

    return (
        <>
            <div className="flex flex-col h-svh">
                <div className="mx-auto my-auto ">
                    <div className="p-2 mb-12 font-mono text-2xl border-4 border-black ">
                        <p className="mb-0">U D V</p>
                        <p className="">{cost}</p>
                        <button
                            className=""
                            onClick={() => {
                                setCost(cost + 1);
                            }}>
                            btn+1
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
