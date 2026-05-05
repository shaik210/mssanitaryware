"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, CheckCircle2, Clock, Award } from "lucide-react"
import { PrimaryButton } from "./primary-button"
import { Tutor } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface QuickHelpModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  tutor?: Tutor
  onJoinSession: (tutor: Tutor) => void
}

export function QuickHelpModal({
  open,
  onOpenChange,
  tutor,
  onJoinSession,
}: QuickHelpModalProps) {
  const [phase, setPhase] = useState<"searching" | "found">("searching")

  useEffect(() => {
    if (open) {
      setPhase("searching")
      const timer = setTimeout(() => {
        setPhase("found")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-[12px] border-none p-0 overflow-hidden">
        {phase === "searching" ? (
          <div className="bg-gradient-to-br from-primary to-primary/85 p-8 text-white flex flex-col items-center justify-center min-h-[400px]">
            <div className="mb-6">
              <div className="relative w-16 h-16">
                <div
                  className={cn(
                    "absolute inset-0 rounded-full border-4 border-white/30",
                    "animate-pulse"
                  )}
                />
                <div className="absolute inset-4 rounded-full border-4 border-white bg-primary/20" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">
              Finding Your Tutor
            </h2>
            <p className="text-sm text-white/80 text-center">
              We&apos;re connecting you with the best available tutor...
            </p>
          </div>
        ) : tutor ? (
          <Card className="border-none rounded-[12px] overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5 pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-foreground mb-1">
                    Tutor Found!
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Ready to start learning
                  </p>
                </div>
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex gap-4 mb-6">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">{tutor.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="text-sm font-medium text-foreground">
                      {tutor.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({tutor.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Expertise</p>
                    <p className="text-sm font-medium text-foreground">
                      {tutor.expertise.slice(0, 2).join(", ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Response Time</p>
                    <p className="text-sm font-medium text-foreground">
                      {tutor.responseTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Price</p>
                  <p className="text-lg font-bold text-primary">
                    ₹{tutor.pricePerHour}
                  </p>
                </div>
                <div className="bg-secondary/5 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-lg font-bold text-secondary">1 hour</p>
                </div>
              </div>

              <PrimaryButton
                fullWidth
                onClick={() => {
                  onJoinSession(tutor)
                  onOpenChange(false)
                }}
                className="min-h-[44px]"
              >
                Join Session Now
              </PrimaryButton>
            </CardContent>
          </Card>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
