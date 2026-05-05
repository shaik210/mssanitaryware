"use client"

import * as React from "react"
import {
  Users,
  Calendar,
  Clock,
  MoreVertical,
  Plus,
  Video,
  Edit,
  Trash2,
  CheckSquare,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PrimaryButton } from "@/components/tutor-sathi/primary-button"
import { AttendanceModal } from "@/components/tutor-sathi/attendance-modal"
import { Batch } from "@/lib/mock-data"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

interface BatchManagerProps {
  batches: Batch[]
  onCreateBatch?: () => void
  onStartClass?: (batchId: string) => void
  onEditBatch?: (batchId: string) => void
  onDeleteBatch?: (batchId: string) => void
  className?: string
}

const statusConfig = {
  active: {
    label: "Active",
    className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  inactive: {
    label: "Inactive",
    className: "bg-muted text-muted-foreground",
  },
}

export function BatchManager({
  batches,
  onCreateBatch,
  onStartClass,
  onEditBatch,
  onDeleteBatch,
  className,
}: BatchManagerProps) {
  const [selectedBatch, setSelectedBatch] = React.useState<Batch | null>(null)
  const [attendanceOpen, setAttendanceOpen] = React.useState(false)
  const { toast } = useToast()

  const handleMarkAttendance = (studentIds: string[]) => {
    toast({
      title: "Attendance Marked",
      description: `Attendance recorded for ${studentIds.length} student(s) in ${selectedBatch?.name}`,
    })
  }

  return (
    <>
      <div className={cn("space-y-4", className)}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">My Batches</h2>
            <p className="text-sm text-muted-foreground">
              Manage your teaching batches and schedules
            </p>
          </div>
          <PrimaryButton onClick={onCreateBatch} size="sm">
            <Plus className="h-4 w-4" aria-hidden="true" />
            Create Batch
          </PrimaryButton>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {batches.map((batch) => {
            const config = statusConfig[batch.status]
            const capacity = `${batch.students}/${batch.maxStudents}`

            return (
              <Card key={batch.id} className="rounded-[12px]">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base">{batch.name}</CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-muted text-muted-foreground"
                      >
                        {batch.subject}
                      </Badge>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          aria-label={`Actions for ${batch.name}`}
                        >
                          <MoreVertical className="h-4 w-4" aria-hidden="true" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onEditBatch?.(batch.id)}>
                          <Edit className="mr-2 h-4 w-4" aria-hidden="true" />
                          Edit Batch
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onDeleteBatch?.(batch.id)}
                          className="text-destructive"
                        >
                          <Trash2 className="mr-2 h-4 w-4" aria-hidden="true" />
                          Delete Batch
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" aria-hidden="true" />
                      <span>{capacity} students</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <span>{batch.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      <span>Join Code: {batch.joinCode}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t pt-4">
                    <Badge variant="secondary" className={cn("border-none", config.className)}>
                      {config.label}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full rounded-[12px] min-h-[44px]"
                      onClick={() => onStartClass?.(batch.id)}
                    >
                      <Video className="mr-2 h-4 w-4" aria-hidden="true" />
                      Start Class
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full rounded-[12px] min-h-[44px]"
                      onClick={() => {
                        setSelectedBatch(batch)
                        setAttendanceOpen(true)
                      }}
                    >
                      <CheckSquare className="mr-2 h-4 w-4" aria-hidden="true" />
                      Mark Attendance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {batches.length === 0 && (
          <Card className="rounded-[12px]">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <Users className="h-12 w-12 text-muted-foreground mb-4" aria-hidden="true" />
              <p className="text-lg font-medium text-foreground">No batches yet</p>
              <p className="mt-1 text-sm text-muted-foreground mb-4">
                Create your first batch to start teaching
              </p>
              <PrimaryButton onClick={onCreateBatch}>
                <Plus className="h-4 w-4" aria-hidden="true" />
                Create Your First Batch
              </PrimaryButton>
            </CardContent>
          </Card>
        )}
      </div>

      {selectedBatch && (
        <AttendanceModal
          open={attendanceOpen}
          onOpenChange={setAttendanceOpen}
          batchName={selectedBatch.name}
          onMarkAttendance={handleMarkAttendance}
        />
      )}
    </>
  )
}
