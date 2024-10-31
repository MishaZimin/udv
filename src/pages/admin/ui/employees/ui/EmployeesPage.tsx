import { Layout } from "src/app/layout/ui/Layout";
import { Employees } from "src/widgets/employees";
// import { useEmployees } from "../model/hooks/useEmployees";
// import Loader from "src/shared/ui/loader/Loader";

export const AdminEmployeesPage = () => {
  return (
    <Layout>
      <Employees />
    </Layout>
  );
};
