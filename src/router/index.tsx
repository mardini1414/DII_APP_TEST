import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import PatientForm from "../pages/PatientForm";
import PatientList from "../pages/PatientList";
import AppLayout from "@/components/layout/AppLayout";
import NotFoundPage from "@/pages/404";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path="patient-form"
          element={
            <AppLayout title="Input Pasien">
              <PatientForm />
            </AppLayout>
          }
        />
        <Route
          path="patients"
          element={
            <AppLayout title="Daftar Pasien">
              <PatientList />
            </AppLayout>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
