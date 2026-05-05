"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Home,
  Search,
  BookOpen,
  Video,
  User,
  Moon,
  Sun,
  Menu,
  X,
  GraduationCap,
  Wallet,
  FileText,
  Settings,
  LogOut,
  UserCircle,
} from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useAuth, type UserRole } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavItem {
  label: string
  href: string
  icon: React.ElementType
  roles: ("student" | "teacher")[]
}

// Mobile bottom nav items
const mobileNavItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home, roles: ["student", "teacher"] },
  { label: "Find Tutors", href: "/student", icon: Search, roles: ["student"] },
  { label: "Workspace", href: "/tutor", icon: BookOpen, roles: ["teacher"] },
  { label: "Live Class", href: "/classroom", icon: Video, roles: ["student", "teacher"] },
  { label: "Profile", href: "/profile", icon: User, roles: ["student", "teacher"] },
]

// Student sidebar items
const studentSidebarItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: Home, roles: ["student"] },
  { label: "Find Tutors", href: "/student", icon: Search, roles: ["student"] },
  { label: "My Courses", href: "/courses", icon: GraduationCap, roles: ["student"] },
  { label: "Live Classroom", href: "/classroom", icon: Video, roles: ["student"] },
  { label: "Settings", href: "/settings", icon: Settings, roles: ["student"] },
]

// Teacher sidebar items
const teacherSidebarItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: Home, roles: ["teacher"] },
  { label: "Workspace", href: "/tutor", icon: BookOpen, roles: ["teacher"] },
  { label: "Live Classroom", href: "/classroom", icon: Video, roles: ["teacher"] },
  { label: "Payments", href: "/payments", icon: Wallet, roles: ["teacher"] },
  { label: "Notes", href: "/notes", icon: FileText, roles: ["teacher"] },
  { label: "Settings", href: "/settings", icon: Settings, roles: ["teacher"] },
]

interface ResponsiveContainerProps {
  children: React.ReactNode
}

export function ResponsiveContainer({ children }: ResponsiveContainerProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const { user, role, isAuthenticated, logout, switchRole } = useAuth()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Get appropriate sidebar items based on role
  const sidebarItems = role === "teacher" ? teacherSidebarItems : studentSidebarItems
  
  // Filter mobile nav based on role
  const filteredMobileNav = mobileNavItems.filter(
    (item) => role && item.roles.includes(role)
  )

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar transition-transform duration-300 ease-in-out",
          "hidden lg:block",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
          <div className="relative">
            <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary rounded-full" aria-hidden="true" />
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">
            TutorSathi
          </span>
        </div>

        <ScrollArea className="h-[calc(100vh-12rem)] py-4">
          <nav className="space-y-1 px-3" role="navigation">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-[12px] px-4 py-3 text-sm font-medium transition-colors min-h-[44px]",
                    isActive
                      ? "bg-secondary/20 text-secondary border border-secondary/30"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <item.icon
                    className={cn("h-5 w-5", isActive && "text-secondary")}
                    aria-hidden="true"
                  />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </ScrollArea>

        <div className="absolute bottom-0 left-0 right-0 border-t border-sidebar-border p-4 space-y-2">
          {isAuthenticated && user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 min-h-[44px]"
                >
                  <UserCircle className="h-5 w-5 text-secondary" aria-hidden="true" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground capitalize">
                      {role}
                    </span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>Switch Role</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => switchRole("student")}
                  disabled={role === "student"}
                >
                  <User className="mr-2 h-4 w-4" />
                  Student
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => switchRole("teacher")}
                  disabled={role === "teacher"}
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Teacher
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full justify-start gap-3 min-h-[44px]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {mounted && (
              <>
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Moon className="h-5 w-5" aria-hidden="true" />
                )}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </>
            )}
          </Button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/95 backdrop-blur px-4 lg:hidden">
        <div className="flex items-center gap-2">
          <div className="relative">
            <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-secondary rounded-full" aria-hidden="true" />
          </div>
          <span className="text-lg font-bold text-foreground">TutorSathi</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="min-h-[44px] min-w-[44px]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {mounted && (
              <>
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Moon className="h-5 w-5" aria-hidden="true" />
                )}
              </>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="min-h-[44px] min-w-[44px]"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            aria-expanded={sidebarOpen}
          >
            {sidebarOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed right-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 border-l border-sidebar-border bg-sidebar transition-transform duration-300 ease-in-out lg:hidden",
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        <ScrollArea className="h-full py-4">
          <nav className="space-y-1 px-3" role="navigation">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-[12px] px-4 py-3 text-sm font-medium transition-colors min-h-[44px]",
                    isActive
                      ? "bg-secondary/20 text-secondary border border-secondary/30"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <item.icon
                    className={cn("h-5 w-5", isActive && "text-secondary")}
                    aria-hidden="true"
                  />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "min-h-screen pb-20 pt-14 lg:pb-0 lg:pt-0 lg:pl-64",
          "transition-all duration-300"
        )}
      >
        <div className="mx-auto max-w-7xl p-4 lg:p-6">{children}</div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur lg:hidden"
        role="navigation"
        aria-label="Bottom navigation"
      >
        <div className="flex items-center justify-around py-2">
          {filteredMobileNav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 min-h-[56px] min-w-[64px] rounded-lg transition-colors",
                  isActive
                    ? "text-secondary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <item.icon
                  className={cn("h-6 w-6", isActive && "text-secondary")}
                  aria-hidden="true"
                />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
