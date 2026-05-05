"use client"

import * as React from "react"
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  ScreenShare,
  ScreenShareOff,
  Volume2,
  VolumeX,
  Maximize2,
  Pin,
  MoreVertical,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface VideoTileProps {
  participantName: string
  avatar?: string
  isHost?: boolean
  isMuted?: boolean
  isVideoOff?: boolean
  isScreenSharing?: boolean
  isPinned?: boolean
  isSpeaking?: boolean
  isLocal?: boolean
  onToggleMute?: () => void
  onToggleVideo?: () => void
  onToggleScreenShare?: () => void
  onPin?: () => void
  onFullscreen?: () => void
  className?: string
}

export function VideoTile({
  participantName,
  avatar,
  isHost = false,
  isMuted = false,
  isVideoOff = false,
  isScreenSharing = false,
  isPinned = false,
  isSpeaking = false,
  isLocal = false,
  onToggleMute,
  onToggleVideo,
  onToggleScreenShare,
  onPin,
  onFullscreen,
  className,
}: VideoTileProps) {
  return (
    <div
      className={cn(
        "relative aspect-video bg-muted rounded-[12px] overflow-hidden",
        "ring-2 ring-transparent transition-all",
        isSpeaking && "ring-trust-blue",
        isPinned && "ring-action-amber",
        className
      )}
      role="region"
      aria-label={`Video tile for ${participantName}${isLocal ? " (You)" : ""}`}
    >
      {/* Video placeholder */}
      {isVideoOff ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-20 h-20 rounded-full bg-muted-foreground/20 flex items-center justify-center text-3xl font-semibold text-muted-foreground"
              aria-hidden="true"
            >
              {avatar ? (
                <img
                  src={avatar}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                participantName.charAt(0).toUpperCase()
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-trust-blue/20 to-trust-blue/40">
          {/* Placeholder for actual video stream */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Video className="h-12 w-12 text-white/50" aria-hidden="true" />
          </div>
        </div>
      )}

      {/* Screen share indicator */}
      {isScreenSharing && (
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
          <ScreenShare className="h-3 w-3" aria-hidden="true" />
          <span>Sharing Screen</span>
        </div>
      )}

      {/* Name and status bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-white truncate max-w-[150px]">
              {participantName}
              {isLocal && " (You)"}
            </span>
            {isHost && (
              <span className="bg-action-amber text-secondary-foreground text-xs px-1.5 py-0.5 rounded font-medium">
                Host
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {isMuted ? (
              <MicOff
                className="h-4 w-4 text-destructive"
                aria-label="Microphone muted"
              />
            ) : (
              <Mic className="h-4 w-4 text-white" aria-label="Microphone on" />
            )}
          </div>
        </div>
      </div>

      {/* Controls overlay - visible on hover */}
      <div className="absolute top-2 right-2 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity">
        <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-lg p-1">
          {isLocal && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleMute}
                className="h-8 w-8"
                aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
              >
                {isMuted ? (
                  <MicOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Mic className="h-4 w-4" aria-hidden="true" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleVideo}
                className="h-8 w-8"
                aria-label={isVideoOff ? "Turn on camera" : "Turn off camera"}
              >
                {isVideoOff ? (
                  <VideoOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Video className="h-4 w-4" aria-hidden="true" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleScreenShare}
                className="h-8 w-8"
                aria-label={isScreenSharing ? "Stop sharing" : "Share screen"}
              >
                {isScreenSharing ? (
                  <ScreenShareOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ScreenShare className="h-4 w-4" aria-hidden="true" />
                )}
              </Button>
            </>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={onPin}
            className="h-8 w-8"
            aria-label={isPinned ? "Unpin video" : "Pin video"}
          >
            <Pin
              className={cn("h-4 w-4", isPinned && "text-action-amber")}
              aria-hidden="true"
            />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onFullscreen}
            className="h-8 w-8"
            aria-label="Fullscreen"
          >
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  )
}
