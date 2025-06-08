//src\radix\appshell.tsx


"use client";

import * as React from "react";
import Link from "next/link";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  SidebarSeparator,
} from "@/radix/sidebar";
import { Button } from "@/radix/button";
import { ScrollArea } from "@/radix/scroll-area";

import { Database, Search, Download, Settings, LogOut, UserCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Logo } from "./icons/logo";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [activeSection, setActiveSection] = React.useState("collections");

  const menuItems = [
    { id: "collections", label: "Collections", icon: Database, href: "#collections" },
    { id: "search", label: "Search", icon: Search, href: "#search" },
    { id: "export", label: "Export", icon: Download, href: "#export" },
  ];

  const handleScroll = () => {
    const sections = ["collections", "search", "export"];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(sectionId);
          // Update URL hash without page jump for better UX if desired,
          // but for simple section navigation, direct href click is also fine.
          // window.history.replaceState(null, '', `#${sectionId}`); 
          break;
        }
      }
    }
  };

  React.useEffect(() => {
    // Set initial active section based on hash or default
    const currentHash = window.location.hash.substring(1);
    if (menuItems.some(item => item.id === currentHash)) {
      setActiveSection(currentHash);
    } else {
      setActiveSection("collections"); // Default section
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarHeader className="p-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            <Logo />
            <SidebarTrigger className="md:hidden" />
          </div>
        </SidebarHeader>
        <SidebarContent className="p-0">
          <SidebarMenu className="p-2">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <Link href={item.href}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.id)}
                    isActive={activeSection === item.id}
                    tooltip={{ children: item.label, side: "right" }}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-2 border-t border-sidebar-border mt-auto">
           <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton tooltip={{children: "Settings", side: "right"}}>
                    <Settings />
                    <span>Settings</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
                <SidebarMenuButton tooltip={{children: "Logout", side: "right"}}>
                    <LogOut />
                    <span>Logout</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
           </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-background/80 backdrop-blur-md border-b">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
          <h1 className="text-xl font-headline font-semibold capitalize">
            {activeSection}
          </h1>
          <div className="flex items-center gap-3">
             <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            </Button>
            <UserCircle className="h-8 w-8 text-accent-blue" />
          </div>
        </header>
        <ScrollArea className="flex-1">
          <main className="p-4 md:p-6 lg:p-8 space-y-8">
            {children}
            <div className="mt-12 text-center text-sm text-accent-blue">
              <p>&copy; {new Date().getFullYear()} ChromaForge. All rights reserved.</p>
              <p>Powered by MCP & ChromaDB</p>
            </div>
          </main>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
