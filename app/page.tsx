"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  GraduationCap,
  Search,
  Video,
  BookOpen,
  Users,
  Star,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  User,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PrimaryButton } from "@/components/tutor-sathi/primary-button"
import { useAuth } from "@/lib/auth-context"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Search,
    title: "Find Expert Tutors",
    description:
      "Connect with verified tutors for Math, Physics, Telugu, and more subjects.",
    href: "/student",
  },
  {
    icon: Video,
    title: "Live Classes",
    description:
      "Join interactive live sessions with whiteboard, chat, and screen sharing.",
    href: "/classroom",
  },
  {
    icon: BookOpen,
    title: "Tutor Workspace",
    description:
      "Manage batches, track payments, and share watermarked study materials.",
    href: "/tutor",
  },
]

const stats = [
  { value: "10K+", label: "Active Students" },
  { value: "500+", label: "Expert Tutors" },
  { value: "50K+", label: "Classes Conducted" },
  { value: "4.8", label: "Average Rating" },
]

const benefits = [
  {
    icon: Shield,
    title: "Verified Tutors",
    description: "All tutors go through strict verification process",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book classes at your convenient time",
  },
  {
    icon: Zap,
    title: "Quick Help",
    description: "Get instant doubt resolution for just ₹49",
  },
]

export default function HomePage() {
  const { theme, setTheme } = useTheme()
  const { user, role, isAuthenticated, login, logout } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogin = (selectedRole: "student" | "teacher") => {
    login(selectedRole)
    // Redirect to appropriate dashboard
    if (selectedRole === "student") {
      router.push("/student")
    } else {
      router.push("/tutor")
    }
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <GraduationCap
                  className="h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary rounded-full" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold text-foreground">
                TutorSathi
              </span>
            </div>

            <nav
              className="hidden md:flex items-center gap-6"
              role="navigation"
              aria-label="Main navigation"
            >
              <Link
                href="/student"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Find Tutors
              </Link>
              <Link
                href="/tutor"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Become a Tutor
              </Link>
              <Link
                href="/classroom"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Live Classes
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              {mounted && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="min-h-[44px]"
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  {theme === "dark" ? "Light" : "Dark"}
                </Button>
              )}
              {isAuthenticated && user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground hidden sm:block">
                    Hi, {user.name.split(" ")[0]}
                  </span>
                  <PrimaryButton
                    size="sm"
                    asChild
                  >
                    <Link href={role === "teacher" ? "/tutor" : "/student"}>
                      Dashboard
                    </Link>
                  </PrimaryButton>
                  <Button variant="ghost" size="sm" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <PrimaryButton size="sm" asChild>
                  <Link href="#login">Get Started</Link>
                </PrimaryButton>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="relative overflow-hidden py-16 lg:py-24"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

          <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <Badge
                variant="secondary"
                className="mb-4 bg-secondary/10 text-secondary border-none"
              >
                <Zap className="h-3 w-3 mr-1" aria-hidden="true" />
                Quick Help Available - ₹49/session
              </Badge>

              <h1
                id="hero-heading"
                className="text-4xl lg:text-6xl font-bold text-foreground text-balance"
              >
                Your Personal{" "}
                <span className="text-primary">Learning Companion</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Connect with expert tutors for personalized learning
                experiences. Get help with Math, Physics, Telugu, and more
                subjects through live interactive classes.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <PrimaryButton size="lg" asChild>
                  <Link href="/student">
                    <Search className="h-5 w-5" aria-hidden="true" />
                    Find a Tutor
                  </Link>
                </PrimaryButton>
                <PrimaryButton variant="outline" size="lg" asChild>
                  <Link href="/tutor">
                    Become a Tutor
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </PrimaryButton>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="py-16 lg:py-24 bg-muted/30"
          aria-labelledby="features-heading"
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2
                id="features-heading"
                className="text-3xl lg:text-4xl font-bold text-foreground"
              >
                Everything You Need to Learn
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A complete platform for students and tutors
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <Link key={feature.title} href={feature.href}>
                  <Card className="rounded-[12px] h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <feature.icon
                          className="h-6 w-6 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24" aria-labelledby="benefits-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  id="benefits-heading"
                  className="text-3xl lg:text-4xl font-bold text-foreground text-balance"
                >
                  Why Choose TutorSathi?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We provide the best learning experience with verified tutors
                  and interactive tools.
                </p>

                <div className="mt-8 space-y-6">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                        <benefit.icon
                          className="h-5 w-5 text-secondary"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Card className="rounded-[12px] overflow-hidden border-none bg-gradient-to-br from-primary to-primary/85 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="h-6 w-6" aria-hidden="true" />
                      <span className="font-semibold">Quick Help</span>
                    </div>
                    <p className="text-4xl font-bold mb-2">₹49</p>
                    <p className="text-white/80 mb-6">per 15-min session</p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                        Connect in 2 minutes
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                        Live video call
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                        Verified expert tutors
                      </li>
                    </ul>
                    <PrimaryButton
                      variant="secondary"
                      fullWidth
                      asChild
                    >
                      <Link href="/student">
                        Get Help Now
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </PrimaryButton>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Login/Role Selection Section */}
        {!isAuthenticated && (
          <section
            id="login"
            className="py-16 lg:py-24 bg-muted/30"
            aria-labelledby="login-heading"
          >
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
              <div className="text-center mb-12">
                <h2
                  id="login-heading"
                  className="text-3xl lg:text-4xl font-bold text-foreground"
                >
                  Get Started
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Choose your role to continue
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
                <Card
                  className="rounded-[12px] cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-secondary"
                  onClick={() => handleLogin("student")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin("student")}
                  aria-label="Continue as Student"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-secondary" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      I&apos;m a Student
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Find tutors and book sessions
                    </p>
                    <PrimaryButton variant="secondary" fullWidth>
                      Continue as Student
                    </PrimaryButton>
                  </CardContent>
                </Card>

                <Card
                  className="rounded-[12px] cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary"
                  onClick={() => handleLogin("teacher")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin("teacher")}
                  aria-label="Continue as Teacher"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      I&apos;m a Teacher
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Manage batches and students
                    </p>
                    <PrimaryButton fullWidth>
                      Continue as Teacher
                    </PrimaryButton>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section
          className="py-16 lg:py-24 bg-primary"
          aria-labelledby="cta-heading"
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-6 text-center">
            <h2
              id="cta-heading"
              className="text-3xl lg:text-4xl font-bold text-white text-balance"
            >
              Ready to Start Learning?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Join thousands of students who are already learning with expert
              tutors on TutorSathi.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton variant="secondary" size="lg" asChild>
                <Link href="/student">
                  Start Learning Today
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </PrimaryButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <GraduationCap
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-secondary rounded-full" aria-hidden="true" />
              </div>
              <span className="font-semibold text-foreground">TutorSathi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your Learning Companion. Made with care in India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
