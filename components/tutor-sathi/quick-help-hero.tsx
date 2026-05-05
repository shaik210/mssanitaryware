"use client"

import { Zap, Clock, Video, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PrimaryButton } from "@/components/tutor-sathi/primary-button"
import { cn } from "@/lib/utils"

interface QuickHelpHeroProps {
  onGetHelp?: () => void
  className?: string
}

export function QuickHelpHero({ onGetHelp, className }: QuickHelpHeroProps) {
  const features = [
    { icon: Clock, text: "Connect in 2 mins" },
    { icon: Video, text: "Live video call" },
    { icon: CheckCircle, text: "Verified tutors" },
  ]

  return (
    <Card
      className={cn(
        "overflow-hidden rounded-[12px] border-none bg-gradient-to-br from-primary to-primary/90 text-white",
        "dark:from-primary/95 dark:to-primary/80",
        className
      )}
    >
      <CardContent className="p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium uppercase tracking-wider opacity-90">
                Instant Learning
              </span>
            </div>

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-balance">
                Quick Help
              </h2>
              <p className="mt-2 text-white/90 max-w-md text-pretty">
                Stuck on a problem? Get instant help from expert tutors. Connect
                now and solve your doubts in minutes.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-4"
              role="list"
              aria-label="Quick help features"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-white/90"
                  role="listitem"
                >
                  <feature.icon className="h-4 w-4" aria-hidden="true" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3">
            <div className="text-center lg:text-right">
              <span className="text-4xl lg:text-5xl font-bold">₹49</span>
              <span className="text-lg text-white/80 ml-1">/session</span>
            </div>

            <PrimaryButton
              variant="secondary"
              size="lg"
              onClick={onGetHelp}
              className="min-w-[200px]"
              aria-label="Get instant help for 49 rupees"
            >
              <Zap className="h-5 w-5" aria-hidden="true" />
              Get Help Now
            </PrimaryButton>

            <p className="text-xs text-white/70 text-center lg:text-right">
              15-min session with expert tutor
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
