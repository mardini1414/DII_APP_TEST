import { Toaster } from "sonner";
import Router from "./router";

export default function App() {
  return (
    <>
      <Router />;
      <Toaster richColors position="top-center" />
    </>
  );
}
