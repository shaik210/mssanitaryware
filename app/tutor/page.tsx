"use client"

import * as React from "react"
import Link from "next/link"
import { ResponsiveContainer } from "@/components/tutor-sathi/responsive-container"
import { FeeCollectionTable } from "@/components/tutor-sathi/fee-collection-table"
import { BatchManager } from "@/components/tutor-sathi/batch-manager"
import { WatermarkedNotesGallery } from "@/components/tutor-sathi/watermarked-notes-gallery"
import { PrimaryButton } from "@/components/tutor-sathi/primary-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IndianRupee, Users, BookOpen, TrendingUp, ShieldX, ArrowRight } from "lucide-react"
import { mockBatches, mockFeeRecords } from "@/lib/mock-data"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/hooks/use-toast"

const mockNotes = [
  {
    id: "1",
    title: "Mechanics Complete Notes",
    subject: "Physics",
    uploadDate: "2 days ago",
    downloads: 45,
    views: 128,
    isWatermarked: true,
  },
  {
    id: "2",
    title: "Organic Chemistry Reactions",
    subject: "Chemistry",
    uploadDate: "1 week ago",
    downloads: 89,
    views: 256,
    isWatermarked: true,
  },
  {
    id: "3",
    title: "Calculus Formulas Sheet",
    subject: "Mathematics",
    uploadDate: "3 days ago",
    downloads: 67,
    views: 189,
    isWatermarked: true,
  },
  {
    id: "4",
    title: "Telugu Grammar Guide",
    subject: "Telugu",
    uploadDate: "5 days ago",
    downloads: 23,
    views: 78,
    isWatermarked: false,
  },
]

const statsData = [
  {
    title: "Total Earnings",
    value: "₹45,290",
    change: "+12%",
    icon: IndianRupee,
  },
  {
    title: "Active Students",
    value: "70",
    change: "+5",
    icon: Users,
  },
  {
    title: "Batches",
    value: "4",
    change: "+1",
    icon: BookOpen,
  },
  {
    title: "Collection Rate",
    value: "86%",
    change: "+3%",
    icon: TrendingUp,
  },
]

export default function TutorWorkspace() {
  const { toast } = useToast()
  const { role, isAuthenticated } = useAuth()

  // RBAC: Block students from accessing teacher workspace
  if (isAuthenticated && role === "student") {
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
                The Teacher Dashboard, Revenue charts, and Batch Management are only accessible to teachers. Please use the Student dashboard.
              </p>
              <PrimaryButton variant="secondary" asChild>
                <Link href="/student">
                  Go to Student Dashboard
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
                Sign in as a Teacher to access your workspace and manage batches.
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
            Tutor Workspace
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage your batches, track payments, and share resources
          </p>
        </header>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat) => (
            <Card key={stat.title} className="rounded-[12px]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon
                  className="h-4 w-4 text-muted-foreground"
                  aria-hidden="true"
                />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <p className="text-xs text-green-600 dark:text-green-400">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="batches" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="batches" className="min-h-[44px]">
              Batches
            </TabsTrigger>
            <TabsTrigger value="fees" className="min-h-[44px]">
              Fee Collection
            </TabsTrigger>
            <TabsTrigger value="notes" className="min-h-[44px]">
              Notes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="batches">
            <BatchManager
              batches={mockBatches}
              onCreateBatch={() => {
                toast({
                  title: "Coming Soon",
                  description: "Batch creation feature will be available soon",
                })
              }}
              onStartClass={(id) => {
                toast({
                  title: "Class Started",
                  description: "Joining your classroom now...",
                })
              }}
              onEditBatch={(id) => {
                toast({
                  title: "Coming Soon",
                  description: "Batch editing feature will be available soon",
                })
              }}
              onDeleteBatch={(id) => {
                toast({
                  title: "Coming Soon",
                  description: "Batch deletion feature will be available soon",
                })
              }}
            />
          </TabsContent>

          <TabsContent value="fees">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Fee Collection
                </h2>
                <p className="text-sm text-muted-foreground">
                  Track split-payments and pending dues
                </p>
              </div>
              <FeeCollectionTable fees={mockFeeRecords} />
            </div>
          </TabsContent>

          <TabsContent value="notes">
            <WatermarkedNotesGallery
              notes={mockNotes}
              onUpload={() => {
                toast({
                  title: "Coming Soon",
                  description: "Note upload feature will be available soon",
                })
              }}
              onView={(id) => {
                toast({
                  title: "Opening Note",
                  description: "Loading your watermarked note...",
                })
              }}
              onDownload={(id) => {
                toast({
                  title: "Download Started",
                  description: "Your note is being downloaded...",
                })
              }}
              onShare={(id) => {
                toast({
                  title: "Share Link Copied",
                  description: "Share link copied to clipboard!",
                })
              }}
              onDelete={(id) => {
                toast({
                  title: "Coming Soon",
                  description: "Note deletion feature will be available soon",
                })
              }}
            />
          </TabsContent>
        </Tabs>
      </div>
    </ResponsiveContainer>
  )
}
