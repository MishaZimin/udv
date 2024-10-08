import Layout from "src/components/layout/Layout";
import { Benefits } from "src/components/benefits/Benefits";

export function HomePage() {
    return (
        <Layout>
            <div className="">
                <Benefits />
            </div>
        </Layout>
    );
}