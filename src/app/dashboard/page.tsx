"use client";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { SidebarDemo } from "./layouts/Sidebar";
import { PublicationsManager } from "./components/PublicationsManager";

export default function PruebaPanelPage() {
  return (
    <ProtectedRoute>
      <SidebarDemo>
        <PublicationsManager />
      </SidebarDemo>
    </ProtectedRoute>
  );
}