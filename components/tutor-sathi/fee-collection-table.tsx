"use client"

import * as React from "react"
import { Send, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { FeeRecord } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface FeeCollectionTableProps {
  fees: FeeRecord[]
  className?: string
}

const statusConfig = {
  paid: {
    label: "Paid",
    icon: CheckCircle2,
    className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 cursor-default",
  },
  pending: {
    label: "Pending",
    icon: Clock,
    className: "bg-primary/10 text-primary dark:bg-primary/20 cursor-pointer hover:bg-primary/15 dark:hover:bg-primary/25 transition-colors",
  },
  overdue: {
    label: "Overdue",
    icon: AlertCircle,
    className: "bg-destructive/10 text-destructive dark:bg-destructive/20 cursor-pointer hover:bg-destructive/15 dark:hover:bg-destructive/25 transition-colors",
  },
}

export function FeeCollectionTable({
  fees,
  className,
}: FeeCollectionTableProps) {
  const { toast } = useToast()

  const handleSendReminder = (fee: FeeRecord) => {
    toast({
      title: "Reminder Sent",
      description: `Payment reminder sent to ${fee.studentName} for ₹${fee.amount}`,
    })
  }

  return (
    <div className={cn("rounded-[12px] border overflow-hidden", className)}>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              {/* Show paid amount if split payment */}
              <TableHead className="text-right">Due Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fees.map((fee) => {
              const config = statusConfig[fee.status]
              const StatusIcon = config.icon

              return (
                <TableRow key={fee.id}>
                  <TableCell className="font-medium">{fee.studentName}</TableCell>
                  <TableCell className="text-sm">{fee.batchName}</TableCell>
                  <TableCell className="text-right font-medium">
                    ₹{fee.amount.toLocaleString()}
                    {fee.splitPayment && fee.paidAmount && (
                      <div className="text-xs text-muted-foreground mt-1">
                        Paid: ₹{fee.paidAmount.toLocaleString()}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-right text-sm">
                    {fee.dueDate}
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => (fee.status !== "paid") && handleSendReminder(fee)}
                      className={cn(
                        "inline-flex items-center gap-1 px-3 py-1 rounded-full border-none font-medium text-xs transition-colors",
                        config.className
                      )}
                      aria-label={`${config.label} payment for ${fee.studentName}`}
                      disabled={fee.status === "paid"}
                    >
                      <StatusIcon className="h-3 w-3" aria-hidden="true" />
                      {config.label}
                    </button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>

      {fees.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-lg font-medium text-foreground">No payments found</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Add students to batches to start tracking fees
          </p>
        </div>
      )}
    </div>
  )
}
