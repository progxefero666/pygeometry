//src\app\page.tsx
"use client";

import { CollectionsPanel } from "@/application/dashboard/CollectionsPanel";
import { SearchPanel } from "@/application/dashboard/SearchPanel";
import { ExportPanel } from "@/application/dashboard/ExportPanel";
import { AppShell } from "@/radix/bar/appbar";


export default function DashboardPage() {
  return (
    <AppShell>
      <section id="collections" className="min-h-[calc(100vh-4rem-6rem)] scroll-mt-16 max-w-screen-xl mx-auto"> {/* Adjust padding for sticky header */}
        <CollectionsPanel />
      </section>
      <section id="search" className="min-h-[calc(100vh-4rem-6rem)] scroll-mt-16 max-w-screen-xl mx-auto">
        <SearchPanel />
      </section>
      <section id="export" className="min-h-[calc(100vh-4rem-6rem)] scroll-mt-16 max-w-screen-xl mx-auto">
        <ExportPanel />
      </section>
    </AppShell>
  );
}