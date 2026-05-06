"use client"

import * as React from "react"

export type UserRole = "student" | "teacher" | null

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
}

interface AuthContextType {
  user: User | null
  role: UserRole
  isAuthenticated: boolean
  login: (role: UserRole) => void
  logout: () => void
  switchRole: (role: UserRole) => void
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

// Mock user data for simulation
const mockUsers: Record<NonNullable<UserRole>, User> = {
  student: {
    id: "student-001",
    name: "Priya Lakshmi",
    email: "priya@tutorsathi.com",
    role: "student",
  },
  teacher: {
    id: "teacher-001",
    name: "Dr. Ramesh Kumar",
    email: "ramesh@tutorsathi.com",
    role: "teacher",
  },
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null)

  const login = React.useCallback((role: UserRole) => {
    if (role && mockUsers[role]) {
      setUser(mockUsers[role])
    }
  }, [])

  const logout = React.useCallback(() => {
    setUser(null)
  }, [])

  const switchRole = React.useCallback((role: UserRole) => {
    if (role && mockUsers[role]) {
      setUser(mockUsers[role])
    }
  }, [])

  const value: AuthContextType = {
    user,
    role: user?.role ?? null,
    isAuthenticated: user !== null,
    login,
    logout,
    switchRole,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Higher-order component for role-based access control
export function withRoleAccess<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  allowedRoles: UserRole[]
) {
  return function RoleProtectedComponent(props: P) {
    const { role, isAuthenticated } = useAuth()

    if (!isAuthenticated) {
      return (
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground">
              Please log in to continue
            </h2>
            <p className="mt-2 text-muted-foreground">
              Select a role from the login screen to access this page.
            </p>
          </div>
        </div>
      )
    }

    if (!allowedRoles.includes(role)) {
      return (
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground">
              Access Denied
            </h2>
            <p className="mt-2 text-muted-foreground">
              You don&apos;t have permission to view this page.
            </p>
          </div>
        </div>
      )
    }

    return <WrappedComponent {...props} />
  }
}
