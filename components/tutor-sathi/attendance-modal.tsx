"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { mockStudents, Student } from "@/lib/mock-data"
import { PrimaryButton } from "./primary-button"

interface AttendanceModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  batchName: string
  onMarkAttendance: (attendance: string[]) => void
}

export function AttendanceModal({
  open,
  onOpenChange,
  batchName,
  onMarkAttendance,
}: AttendanceModalProps) {
  const [selected, setSelected] = useState<string[]>([])

  const handleToggle = (studentId: string) => {
    setSelected((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    )
  }

  const handleSubmit = () => {
    onMarkAttendance(selected)
    setSelected([])
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-[12px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Mark Attendance</DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">{batchName}</p>
        </DialogHeader>
        <div className="space-y-3 py-4 max-h-[400px] overflow-y-auto">
          {mockStudents.map((student) => (
            <label
              key={student.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
            >
              <Checkbox
                checked={selected.includes(student.id)}
                onCheckedChange={() => handleToggle(student.id)}
                className="mt-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {student.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {student.email}
                </p>
              </div>
            </label>
          ))}
        </div>
        <div className="flex gap-3">
          <PrimaryButton
            variant="outline"
            onClick={() => {
              setSelected([])
              onOpenChange(false)
            }}
            className="flex-1 min-h-[44px]"
          >
            Cancel
          </PrimaryButton>
          <PrimaryButton
            onClick={handleSubmit}
            className="flex-1 min-h-[44px]"
          >
            Mark Present ({selected.length})
          </PrimaryButton>
        </div>
      </DialogContent>
    </Dialog>
  )
}
