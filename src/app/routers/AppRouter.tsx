import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NotFound } from "../../pages/errors/ErrorPage.tsx";
import { HomePage } from "../../pages/home/HomePage.tsx";
import { AuthPage } from "src/pages/auth/AuthPage.tsx";
import { CheckMailPage } from "src/pages/auth/CheckMailPage.tsx";
import { BenefitPage } from "src/pages/benefit/BenefitPage.tsx";
import { AdminApealsPage } from "src/pages/admin/AdminApeals.tsx";
import { AdminBenefitPage } from "src/pages/admin/AdminBenefit.tsx";
import { AdminCategoriesPage } from "src/pages/admin/AdminCategories.tsx";
import { AdminEmployeesPage } from "src/pages/admin/AdminEmployees.tsx";
import { ProfilePage } from "src/pages/profile/ProfilePage.tsx";
import { DetailsPage } from "src/pages/createBenefit/pages/DetailsPage.tsx";
import { CoverPage } from "src/pages/createBenefit/pages/CoverPage.tsx";
import { AvailabilityPage } from "src/pages/createBenefit/pages/AvailabilityPage.tsx";

const queryClient = new QueryClient();

export function AppRouter() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/check-mail" element={<CheckMailPage />} />
          <Route path="/benefit" element={<BenefitPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/create-benefit" element={<DetailsPage />} />
          <Route path="/create-benefit/details" element={<DetailsPage />} />
          <Route path="/create-benefit/cover" element={<CoverPage />} />
          <Route
            path="/create-benefit/availability"
            element={<AvailabilityPage />}
          />

          <Route path="/admin/benefit" element={<AdminBenefitPage />} />
          <Route path="/admin/apeals" element={<AdminApealsPage />} />
          <Route path="/admin/employees" element={<AdminEmployeesPage />} />
          <Route path="/admin/categories" element={<AdminCategoriesPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
