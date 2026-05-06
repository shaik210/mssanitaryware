"use client"

import * as React from "react"
import {
  FileText,
  Download,
  Eye,
  Upload,
  MoreVertical,
  Trash2,
  Share2,
  Lock,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PrimaryButton } from "@/components/tutor-sathi/primary-button"
import { cn } from "@/lib/utils"

interface Note {
  id: string
  title: string
  subject: string
  thumbnail?: string
  uploadDate: string
  downloads: number
  views: number
  isWatermarked: boolean
}

interface WatermarkedNotesGalleryProps {
  notes: Note[]
  onUpload?: () => void
  onView?: (noteId: string) => void
  onDownload?: (noteId: string) => void
  onShare?: (noteId: string) => void
  onDelete?: (noteId: string) => void
  className?: string
}

export function WatermarkedNotesGallery({
  notes,
  onUpload,
  onView,
  onDownload,
  onShare,
  onDelete,
  className,
}: WatermarkedNotesGalleryProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Watermarked Notes
          </h2>
          <p className="text-sm text-muted-foreground">
            Upload and share protected study materials
          </p>
        </div>
        <PrimaryButton onClick={onUpload} size="sm">
          <Upload className="h-4 w-4" aria-hidden="true" />
          Upload Notes
        </PrimaryButton>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notes.map((note) => (
          <Card
            key={note.id}
            className="group rounded-[12px] overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-[4/3] bg-muted">
              {note.thumbnail ? (
                <img
                  src={note.thumbnail}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <FileText
                    className="h-16 w-16 text-muted-foreground/50"
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Watermark indicator */}
              {note.isWatermarked && (
                <div className="absolute top-2 right-2">
                  <Badge
                    variant="secondary"
                    className="gap-1 bg-background/90 backdrop-blur-sm"
                  >
                    <Lock className="h-3 w-3" aria-hidden="true" />
                    Protected
                  </Badge>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => onView?.(note.id)}
                  className="h-10 w-10 rounded-full"
                  aria-label={`View ${note.title}`}
                >
                  <Eye className="h-5 w-5" aria-hidden="true" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => onDownload?.(note.id)}
                  className="h-10 w-10 rounded-full"
                  aria-label={`Download ${note.title}`}
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-foreground truncate">
                    {note.title}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="mt-1 text-xs bg-muted text-muted-foreground"
                  >
                    {note.subject}
                  </Badge>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 shrink-0"
                      aria-label={`Actions for ${note.title}`}
                    >
                      <MoreVertical className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onShare?.(note.id)}>
                      <Share2 className="mr-2 h-4 w-4" aria-hidden="true" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onDelete?.(note.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" aria-hidden="true" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" aria-hidden="true" />
                  {note.views}
                </span>
                <span className="flex items-center gap-1">
                  <Download className="h-3 w-3" aria-hidden="true" />
                  {note.downloads}
                </span>
                <span className="ml-auto">{note.uploadDate}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {notes.length === 0 && (
        <Card className="rounded-[12px]">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <FileText
              className="h-12 w-12 text-muted-foreground mb-4"
              aria-hidden="true"
            />
            <p className="text-lg font-medium text-foreground">No notes uploaded</p>
            <p className="mt-1 text-sm text-muted-foreground mb-4">
              Upload your first study material with watermark protection
            </p>
            <PrimaryButton onClick={onUpload}>
              <Upload className="h-4 w-4" aria-hidden="true" />
              Upload Your First Note
            </PrimaryButton>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
