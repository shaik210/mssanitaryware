"use client"

import { Star, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TutorCardProps {
  name: string
  avatar: string
  rating: number
  reviewCount: number
  expertise: string[]
  pricePerHour: number
  verified?: boolean
  responseTime?: string
  className?: string
}

export function TutorCard({
  name,
  avatar,
  rating,
  reviewCount,
  expertise,
  pricePerHour,
  verified = false,
  responseTime,
  className,
}: TutorCardProps) {
  return (
    <Card
      className={cn(
        "rounded-[12px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer",
        className
      )}
      role="article"
      aria-label={`Tutor profile for ${name}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="relative shrink-0">
            <div
              className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl font-semibold text-muted-foreground overflow-hidden"
              aria-hidden="true"
            >
              {avatar ? (
                <img
                  src={avatar}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                name.charAt(0).toUpperCase()
              )}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground truncate">{name}</h3>
              {verified && (
                <StatusBadge variant="verified" aria-label="Verified tutor" />
              )}
            </div>

            <div
              className="flex items-center gap-1 mt-1"
              aria-label={`Rating: ${rating} out of 5 stars, ${reviewCount} reviews`}
            >
              <Star
                className="w-4 h-4 fill-amber-500 text-amber-500"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-foreground">
                {rating.toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">
                ({reviewCount})
              </span>
            </div>

            <div
              className="flex flex-wrap gap-1.5 mt-2"
              role="list"
              aria-label="Expertise"
            >
              {expertise.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs bg-muted text-muted-foreground"
                  role="listitem"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-right shrink-0">
            <p className="text-lg font-bold text-primary">
              ₹{pricePerHour}
            </p>
            <p className="text-xs text-muted-foreground">/hour</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface StatusBadgeProps {
  variant: "verified" | "online" | "new"
  className?: string
}

export function StatusBadge({
  variant,
  className,
  ...props
}: StatusBadgeProps & React.HTMLAttributes<HTMLSpanElement>) {
  const variants = {
    verified: {
      icon: CheckCircle2,
      label: "Verified",
      className: "bg-primary/10 text-primary dark:bg-primary/20",
    },
    online: {
      icon: null,
      label: "Online",
      className: "bg-secondary/10 text-secondary dark:bg-secondary/20",
    },
    new: {
      icon: null,
      label: "New",
      className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
  }

  const config = variants[variant]
  const Icon = config.icon

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium",
        config.className,
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-3 h-3" aria-hidden="true" />}
      {config.label}
    </span>
  )
}
