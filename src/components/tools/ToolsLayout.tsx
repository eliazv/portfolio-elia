"use client";

import { ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { toolGroups } from "@/lib/tools-data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, X, Home, ChevronsLeft, ChevronsRight } from "lucide-react";

interface ToolsLayoutProps {
  children: ReactNode;
}

export default function ToolsLayout({ children }: ToolsLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const isCollapsed = collapsed && isDesktop;

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
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/60 to-purple-50/60"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_32%)]"
        aria-hidden
      />

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-4 left-0 right-0 z-40 px-4">
        <div className="container mx-auto max-w-5xl p-0">
          <div className="bg-background/30 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 shadow-lg enhanced-card-hover flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-2xl hover:bg-primary/10"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Apri il menu strumenti"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/strumenti" className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-2xl">
                <Image
                  src="/images/icons/logo.webp"
                  alt="Logo Elia Zavatta"
                  fill
                  className="rounded-2xl object-contain"
                  sizes="40px"
                  priority
                />
              </div>
              <div className="leading-tight">
                <p className="text-xl font-bold text-gradient">Toolkit</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex gap-4 px-4 lg:px-6 pt-24 lg:pt-6 pb-4 relative">
        {/* Overlay mobile */}
        {sidebarOpen && !isDesktop && (
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed lg:sticky top-24 lg:top-6 left-4 right-4 lg:left-0 lg:right-auto z-50 w-[calc(100%-2rem)] lg:bg-white/90 bg-white/85 border border-white/60 shadow-xl shadow-blue-100/60 backdrop-blur-2xl rounded-3xl transition-all duration-300 lg:translate-x-0 max-h-[calc(100vh-8rem)] lg:max-h-[calc(100vh-3rem)] flex flex-col",
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-[120%] lg:translate-x-0",
            isCollapsed ? "lg:w-[88px]" : "lg:w-80",
          )}
        >
          <div
            className={cn(
              "flex h-20 items-center gap-3 justify-between border-b border-white/70 px-4 py-3 bg-gradient-to-r from-blue-500/10 via-white to-violet-500/10 rounded-t-3xl flex-shrink-0",
              isCollapsed &&
                "lg:flex-col lg:h-auto lg:items-center lg:justify-center lg:gap-3 lg:py-4",
            )}
          >
            <Link
              href="/strumenti"
              className={cn(
                "flex items-center gap-3",
                isCollapsed &&
                  "lg:flex-col lg:gap-2 lg:w-full lg:justify-center lg:text-center",
              )}
            >
              <div className="relative h-12 w-12 rounded-2xl flex-shrink-0">
                <Image
                  src="/images/icons/logo.webp"
                  alt="Logo Elia Zavatta"
                  fill
                  className="rounded-2xl object-contain"
                  sizes="48px"
                  priority
                />
              </div>
              <div className={cn("leading-tight", isCollapsed && "lg:hidden")}>
                <p className="font-bold text-lg text-gradient">Toolkit</p>
              </div>
            </Link>
            <div
              className={cn(
                "flex items-center gap-2",
                isCollapsed && "lg:w-full lg:justify-center",
              )}
            >
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-2xl hover:bg-primary/10"
                onClick={() => setSidebarOpen(false)}
                aria-label="Chiudi il menu strumenti"
              >
                <X className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "hidden lg:inline-flex rounded-2xl hover:bg-primary/10",
                  isCollapsed && "lg:w-full lg:justify-center lg:order-3",
                )}
                onClick={() => setCollapsed((prev) => !prev)}
                aria-label="Comprimi espandi menu strumenti"
              >
                {isCollapsed ? (
                  <ChevronsRight className="h-5 w-5" />
                ) : (
                  <ChevronsLeft className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-5">
              <Link
                href="/strumenti"
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all border",
                  pathname === "/strumenti" || pathname === "/strumenti/"
                    ? "bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-violet-500/10 text-blue-900 border-blue-200 shadow-md"
                    : "bg-white/70 text-gray-800 border-white/60 hover:border-blue-100 hover:shadow-sm",
                  isCollapsed && "lg:justify-center lg:px-3",
                )}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700 flex-shrink-0">
                  <Home className="h-5 w-5" />
                </span>
                <div className={cn("flex-1", isCollapsed && "lg:hidden")}>
                  <p className="leading-tight">Tutti gli strumenti</p>
                  <p className="text-xs text-gray-500">Dashboard completa</p>
                </div>
                {/* Shortcut hint removed (no action bound) */}
              </Link>

              <div className="space-y-6">
                {toolGroups.map((group) => {
                  const visibleTools = group.tools.filter((t) => !t.hidden);
                  if (visibleTools.length === 0) return null;

                  return (
                    <div key={group.id} className="space-y-2">
                      <h3
                        className={cn(
                          "px-2 text-[11px] font-semibold text-gray-500 uppercase tracking-[0.18em]",
                          isCollapsed && "lg:hidden",
                        )}
                      >
                        {group.name}
                      </h3>
                      <ul className="space-y-2">
                        {visibleTools.map((tool) => {
                          const Icon = tool.icon;
                          const toolPath = `/strumenti/${tool.slug}`;
                          const isActive =
                            pathname === toolPath ||
                            pathname === `${toolPath}/` ||
                            pathname?.startsWith(`${toolPath}?`);
                          return (
                            <li key={tool.slug}>
                              <Link
                                href={`/strumenti/${tool.slug}`}
                                title={tool.name}
                                aria-label={isCollapsed ? tool.name : undefined}
                                className={cn(
                                  "group flex w-full min-w-0 items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-all border",
                                  isActive
                                    ? "bg-gradient-to-r from-blue-500/12 via-blue-500/6 to-violet-500/12 border-blue-200 shadow-md text-blue-900"
                                    : "bg-white/75 text-gray-800 border-white/60 hover:border-blue-100 hover:shadow-sm hover:-translate-y-[1px]",
                                  isCollapsed &&
                                    "lg:justify-center lg:px-3 lg:py-2",
                                )}
                              >
                                <span
                                  className={cn(
                                    "flex flex-shrink-0 items-center justify-center rounded-xl transition-colors",
                                    "h-9 w-9",
                                    tool.bgColor,
                                    tool.color,
                                    !isActive && "opacity-90",
                                    isCollapsed && "lg:h-10 lg:w-10",
                                  )}
                                >
                                  <Icon className="h-5 w-5 text-current" />
                                </span>
                                <div
                                  className={cn(
                                    "flex-1 min-w-0",
                                    isCollapsed && "lg:hidden",
                                  )}
                                >
                                  <p className="font-medium leading-tight truncate">
                                    {tool.name}
                                  </p>
                                  <p className="text-xs text-gray-500 whitespace-normal break-words leading-snug">
                                    {tool.description ?? "Strumento dedicato"}
                                  </p>
                                </div>
                                {tool.isAI && !isCollapsed && (
                                  <span className="ml-auto text-[10px] font-semibold bg-violet-100 text-violet-700 px-2 py-1 rounded-full border border-violet-200">
                                    AI
                                  </span>
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}

                {/* Link Elia Zavatta - in fondo */}
                <div
                  className={cn(
                    "pt-3 border-t border-white/70",
                    isCollapsed && "lg:hidden",
                  )}
                >
                  <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all bg-white/70 border border-white/60 hover:border-blue-100 hover:shadow-sm"
                  >
                    <div className="relative h-10 w-10 rounded-xl flex-shrink-0">
                      <Image
                        src="/images/icons/logo.webp"
                        alt="Logo Elia Zavatta"
                        fill
                        className="rounded-xl object-contain"
                        sizes="40px"
                        priority
                      />
                    </div>
                    <span className="text-gradient">Elia Zavatta</span>
                    <span className="ml-auto text-xs text-gray-500">
                      Portfolio
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-h-screen">
          <div className="container max-w-5xl mx-auto px-2 lg:px-6 py-6 lg:py-10">
            <div className="rounded-3xl bg-white/85 border border-white/60 shadow-[0_30px_60px_-30px_rgba(59,130,246,0.35)] backdrop-blur-2xl px-4 sm:px-6 lg:px-10 py-6 lg:py-10">
              {children}
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-white/60 bg-white/80 backdrop-blur-xl rounded-2xl py-6 mt-4">
            <div className="container max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
              <p>
                Strumenti gratuiti creati da{" "}
                <Link href="/" className="text-blue-600 hover:underline">
                  Elia Zavatta
                </Link>{" "}
                - Sviluppatore Freelance
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
