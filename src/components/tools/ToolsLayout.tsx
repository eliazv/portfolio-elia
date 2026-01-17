"use client";

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { toolGroups } from "@/lib/tools-data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, X, Home, ChevronLeft } from "lucide-react";

interface ToolsLayoutProps {
  children: ReactNode;
}

export default function ToolsLayout({ children }: ToolsLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Chiudi sidebar su navigazione mobile
  useEffect(() => {
    if (!isDesktop) {
      setSidebarOpen(false);
    }
  }, [pathname, isDesktop]);

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-white px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <Link href="/strumenti" className="font-semibold">
          <span className="text-gradient">EZ Strumenti</span> Online
        </Link>
      </header>

      <div className="flex">
        {/* Overlay mobile */}
        {sidebarOpen && !isDesktop && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed lg:sticky inset-y-0 left-0 z-50 w-72 bg-white border-r transition-transform duration-300 lg:translate-x-0 h-screen",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex h-14 items-center justify-between border-b px-4">
            <Link href="/strumenti" className="font-semibold text-lg">
              <span className="text-gradient">EZ Strumenti</span> Online
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <ScrollArea className="h-[calc(100vh-3.5rem)]">
            <div className="p-4">
              {/* Link Home */}
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-2 mb-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                Torna al Portfolio
              </Link>

              <Link
                href="/strumenti"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 mb-4 rounded-md text-sm font-medium transition-colors",
                  pathname === "/strumenti"
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-gray-100",
                )}
              >
                <Home className="h-5 w-5" />
                Tutti gli strumenti
              </Link>

              <div className="space-y-6">
                {toolGroups.map((group) => (
                  <div key={group.id}>
                    <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {group.name}
                    </h3>
                    <ul className="space-y-1">
                      {group.tools.map((tool) => {
                        const Icon = tool.icon;
                        const isActive = pathname === `/strumenti/${tool.slug}`;
                        return (
                          <li key={tool.slug}>
                            <Link
                              href={`/strumenti/${tool.slug}`}
                              className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                                isActive
                                  ? `${tool.bgColor} ${tool.color} font-medium`
                                  : "hover:bg-gray-100 text-gray-700",
                              )}
                            >
                              <Icon
                                className={cn(
                                  "h-5 w-5 flex-shrink-0",
                                  isActive ? tool.color : "text-gray-400",
                                )}
                              />
                              <span className="truncate">{tool.name}</span>
                              {tool.isAI && (
                                <span className="ml-auto text-xs bg-violet-100 text-violet-700 px-1.5 py-0.5 rounded">
                                  AI
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-h-screen">
          <div className="container max-w-5xl mx-auto px-4 py-8">
            {children}
          </div>

          {/* Footer */}
          <footer className="border-t bg-white py-6 mt-8">
            <div className="container max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
              <p>
                Strumenti gratuiti creati da{" "}
                <Link href="/" className="text-blue-600 hover:underline">
                  Elia Zavatta
                </Link>{" "}
                - Sviluppatore Web Freelance
              </p>
              <p className="mt-1">
                Tutti gli strumenti funzionano direttamente nel browser. I tuoi
                dati non vengono mai inviati a server esterni.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
