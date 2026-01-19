import React from "react";
import { AppSidebar } from "./AppSidebar";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { AppNavbar } from "./AppNavbar";

type AppLayoutProps = {
  children: Readonly<React.ReactNode>;
  title?: string;
};

export default function AppLayout({ children, title }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppNavbar />
        <main className="w-full p-6">
          {title && <h5 className="text-2xl">{title}</h5>}
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
