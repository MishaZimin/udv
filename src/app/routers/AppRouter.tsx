import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { NotFound } from "src/pages/error";
import { HomePage } from "src/pages/home";
import { BenefitPage } from "src/pages/benefit";
import { ProfilePage } from "src/pages/profile";
import { AuthPage, CheckMailPage } from "src/pages/auth";
import { DetailsPage, CoverPage, AvailabilityPage } from "src/pages/settings";
import {
  AdminApealsPage,
  AdminBenefitPage,
  AdminCategoriesPage,
  AdminEmployeesPage,
} from "src/pages/admin";
import { TokenPage } from "src/pages/auth/ui/pages/TokenPage";
import { ProtectedRoutes } from "./ProtectedRoute";
import { AdminRoute } from "./AdminRoute";
import { AuthRoutes } from "./AuthRoute";
import { ModalProvider } from "src/shared/ui/modal/ui/ModalProvider";

const queryClient = new QueryClient();

export const AppRouter = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Router>
          <Routes>
            <Route element={<AuthRoutes />}>
              <Route path="/users/authorize/:token" element={<TokenPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/check-mail" element={<CheckMailPage />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/benefit" element={<BenefitPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route element={<AdminRoute />}>
                <Route path="/create-benefit" element={<DetailsPage />} />
                <Route
                  path="/create-benefit/details"
                  element={<DetailsPage />}
                />
                <Route path="/create-benefit/cover" element={<CoverPage />} />
                <Route
                  path="/create-benefit/availability"
                  element={<AvailabilityPage />}
                />

                <Route path="/admin/benefit" element={<AdminBenefitPage />} />
                <Route path="/admin/apeals" element={<AdminApealsPage />} />
                <Route
                  path="/admin/employees"
                  element={<AdminEmployeesPage />}
                />
                <Route
                  path="/admin/categories"
                  element={<AdminCategoriesPage />}
                />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ModalProvider>
    </QueryClientProvider>
  );
};
