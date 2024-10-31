import { Layout } from "src/app/layout/ui/Layout";
import { Employees } from "src/widgets/employees";
import { useEmployees } from "../model/hooks/useEmployees";
import Loader from "src/shared/ui/loader/Loader";

export const AdminEmployeesPage = () => {
  const { employees, error, isLoading } = useEmployees();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>error</p>;
  }
  console.log(employees);
  return (
    <Layout>
      <Employees />
    </Layout>
  );
};
