"use client"

import * as React from "react"
import Link from "next/link"
import { ResponsiveContainer } from "@/components/tutor-sathi/responsive-container"
import { SearchBar } from "@/components/tutor-sathi/search-bar"
import { QuickHelpHero } from "@/components/tutor-sathi/quick-help-hero"
import { QuickHelpModal } from "@/components/tutor-sathi/quick-help-modal"
import { TutorCard } from "@/components/tutor-sathi/tutor-card"
import { PrimaryButton } from "@/components/tutor-sathi/primary-button"
import { mockTutors, getRandomTutor, Tutor } from "@/lib/mock-data"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldX, ArrowRight } from "lucide-react"

export default function StudentDashboard() {
  const { role, isAuthenticated } = useAuth()
  const [searchValue, setSearchValue] = React.useState("")
  const [selectedSubjects, setSelectedSubjects] = React.useState<string[]>([])
  const [quickHelpOpen, setQuickHelpOpen] = React.useState(false)
  const [selectedTutor, setSelectedTutor] = React.useState<Tutor | undefined>(
    undefined
  )
  const { toast } = useToast()

  const filteredTutors = mockTutors.filter((tutor) => {
    const matchesSearch =
      searchValue === "" ||
      tutor.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      tutor.expertise.some((expertise) =>
        expertise.toLowerCase().includes(searchValue.toLowerCase())
      )

    const matchesSubjects =
      selectedSubjects.length === 0 ||
      tutor.expertise.some((expertise) =>
        selectedSubjects.some(
          (selected) =>
            expertise.toLowerCase().includes(selected.toLowerCase()) ||
            selected.toLowerCase().includes(expertise.toLowerCase())
        )
      )

    return matchesSearch && matchesSubjects
  })

  const handleQuickHelp = () => {
    setSelectedTutor(getRandomTutor())
    setQuickHelpOpen(true)
  }

  const handleJoinSession = (tutor: Tutor) => {
    toast({
      title: "Session Started",
      description: `Connected with ${tutor.name}. Your session is active!`,
    })
  }

  // RBAC: Block teachers from accessing student dashboard
  if (isAuthenticated && role === "teacher") {
    return (
      <ResponsiveContainer>
        <div className="flex min-h-[60vh] items-center justify-center">
          <Card className="rounded-[12px] max-w-md">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <ShieldX className="h-8 w-8 text-destructive" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Access Restricted
              </h2>
              <p className="text-muted-foreground mb-6">
                The Tutor Discovery feed is only available to students. As a teacher, please use your Workspace dashboard.
              </p>
              <PrimaryButton asChild>
                <Link href="/tutor">
                  Go to Workspace
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </PrimaryButton>
            </CardContent>
          </Card>
        </div>
      </ResponsiveContainer>
    )
  }

  // RBAC: Require login
  if (!isAuthenticated) {
    return (
      <ResponsiveContainer>
        <div className="flex min-h-[60vh] items-center justify-center">
          <Card className="rounded-[12px] max-w-md">
            <CardContent className="p-8 text-center">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Please Log In
              </h2>
              <p className="text-muted-foreground mb-6">
                Sign in as a Student to find and connect with tutors.
              </p>
              <PrimaryButton asChild>
                <Link href="/#login">
                  Log In
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </PrimaryButton>
            </CardContent>
          </Card>
        </div>
      </ResponsiveContainer>
    )
  }

  return (
    <ResponsiveContainer>
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Find Your Tutor
          </h1>
          <p className="mt-1 text-muted-foreground">
            Connect with expert tutors for personalized learning
          </p>
        </header>

        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          selectedSubjects={selectedSubjects}
          onSubjectsChange={setSelectedSubjects}
        />

        <QuickHelpHero onGetHelp={handleQuickHelp} />

        <section aria-labelledby="tutors-heading">
          <div className="flex items-center justify-between mb-4">
            <h2
              id="tutors-heading"
              className="text-lg font-semibold text-foreground"
            >
              Available Tutors
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredTutors.length} tutors found
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTutors.map((tutor) => (
              <TutorCard
                key={tutor.id}
                name={tutor.name}
                avatar={tutor.avatar}
                rating={tutor.rating}
                reviewCount={tutor.reviewCount}
                expertise={tutor.expertise}
                pricePerHour={tutor.pricePerHour}
                verified={tutor.verified}
                responseTime={tutor.responseTime}
              />
            ))}
          </div>

          {filteredTutors.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-lg font-medium text-foreground">
                No tutors found
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </section>
      </div>

      <QuickHelpModal
        open={quickHelpOpen}
        onOpenChange={setQuickHelpOpen}
        tutor={selectedTutor}
        onJoinSession={handleJoinSession}
      />
    </ResponsiveContainer>
  )
}
