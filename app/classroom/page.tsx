"use client"

import * as React from "react"
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  ScreenShare,
  PhoneOff,
  MessageSquare,
  Users,
  LayoutGrid,
  Maximize2,
  Settings,
  MoreVertical,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { VideoTile } from "@/components/tutor-sathi/video-tile"
import { Whiteboard } from "@/components/tutor-sathi/whiteboard"
import { ChatSidebar } from "@/components/tutor-sathi/chat-sidebar"
import { cn } from "@/lib/utils"

const mockParticipants = [
  { id: "1", name: "Dr. Priya Sharma", isHost: true, isMuted: false },
  { id: "2", name: "Ravi Kumar", isHost: false, isMuted: true },
  { id: "3", name: "Lakshmi Devi", isHost: false, isMuted: false, hasRaisedHand: true },
  { id: "4", name: "Venkat Reddy", isHost: false, isMuted: true },
  { id: "5", name: "Anand Singh", isHost: false, isMuted: false },
]

const mockMessages = [
  {
    id: "1",
    sender: "Dr. Priya Sharma",
    content: "Welcome to today's Physics class!",
    timestamp: "10:00 AM",
    isHost: true,
  },
  {
    id: "2",
    sender: "Ravi Kumar",
    content: "Good morning ma'am!",
    timestamp: "10:01 AM",
  },
  {
    id: "3",
    sender: "Lakshmi Devi",
    content: "Can you explain the previous topic once more?",
    timestamp: "10:02 AM",
  },
  {
    id: "4",
    sender: "Dr. Priya Sharma",
    content: "Sure, let me start with a quick recap of Newton's Laws.",
    timestamp: "10:03 AM",
    isHost: true,
  },
  {
    id: "5",
    sender: "You",
    content: "Thank you! This is very helpful.",
    timestamp: "10:05 AM",
    isLocal: true,
  },
]

export default function LiveClassroom() {
  const [isMuted, setIsMuted] = React.useState(false)
  const [isVideoOff, setIsVideoOff] = React.useState(false)
  const [isScreenSharing, setIsScreenSharing] = React.useState(false)
  const [isChatOpen, setIsChatOpen] = React.useState(true)
  const [isHandRaised, setIsHandRaised] = React.useState(false)
  const [viewMode, setViewMode] = React.useState<"split" | "whiteboard" | "video">("split")

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 h-14 border-b bg-card shrink-0">
        <div className="flex items-center gap-3">
          <h1 className="font-semibold text-foreground">Physics - JEE Advanced</h1>
          <Badge variant="secondary" className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-1.5 animate-pulse" aria-hidden="true" />
            Live
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="gap-1">
            <Users className="h-3 w-3" aria-hidden="true" />
            {mockParticipants.length}
          </Badge>
          <span className="text-sm text-muted-foreground">01:23:45</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col">
          {/* View Mode Controls */}
          <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b">
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "split" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("split")}
                className="min-h-[36px]"
                aria-pressed={viewMode === "split"}
              >
                <LayoutGrid className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Split View
              </Button>
              <Button
                variant={viewMode === "whiteboard" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("whiteboard")}
                className="min-h-[36px]"
                aria-pressed={viewMode === "whiteboard"}
              >
                Whiteboard
              </Button>
              <Button
                variant={viewMode === "video" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("video")}
                className="min-h-[36px]"
                aria-pressed={viewMode === "video"}
              >
                Video Grid
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                aria-label="Fullscreen"
              >
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    aria-label="More options"
                  >
                    <MoreVertical className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-4 overflow-hidden">
            {viewMode === "split" && (
              <ResizablePanelGroup direction="horizontal" className="h-full rounded-[12px] border">
                <ResizablePanel defaultSize={60} minSize={30}>
                  <Whiteboard className="h-full border-0 rounded-none" />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={40} minSize={25}>
                  <div className="h-full p-3 bg-muted/30 space-y-3 overflow-y-auto">
                    <VideoTile
                      participantName="Dr. Priya Sharma"
                      isHost
                      isSpeaking
                      className="w-full"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      {mockParticipants.slice(1, 5).map((p) => (
                        <VideoTile
                          key={p.id}
                          participantName={p.name}
                          isMuted={p.isMuted}
                          isVideoOff={p.id === "4"}
                        />
                      ))}
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            )}

            {viewMode === "whiteboard" && (
              <Whiteboard className="h-full" />
            )}

            {viewMode === "video" && (
              <div className="h-full grid grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
                <VideoTile
                  participantName="Dr. Priya Sharma"
                  isHost
                  isSpeaking
                  className="col-span-2 lg:col-span-2"
                />
                {mockParticipants.slice(1).map((p) => (
                  <VideoTile
                    key={p.id}
                    participantName={p.name}
                    isMuted={p.isMuted}
                    isVideoOff={p.id === "4"}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Chat Sidebar - Desktop */}
        <div className="hidden lg:block">
          <ChatSidebar
            messages={mockMessages}
            participants={mockParticipants}
            isHandRaised={isHandRaised}
            onRaiseHand={() => setIsHandRaised(!isHandRaised)}
            onSendMessage={(content) => console.log("[v0] Send message:", content)}
            isOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
          />
        </div>
      </div>

      {/* Bottom Control Bar */}
      <footer className="flex items-center justify-center gap-2 px-4 py-3 border-t bg-card shrink-0">
        <div className="flex items-center gap-2">
          <Button
            variant={isMuted ? "destructive" : "secondary"}
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
            className="h-12 w-12 rounded-full min-h-[48px] min-w-[48px]"
            aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
            aria-pressed={isMuted}
          >
            {isMuted ? (
              <MicOff className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Mic className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>

          <Button
            variant={isVideoOff ? "destructive" : "secondary"}
            size="icon"
            onClick={() => setIsVideoOff(!isVideoOff)}
            className="h-12 w-12 rounded-full min-h-[48px] min-w-[48px]"
            aria-label={isVideoOff ? "Turn on camera" : "Turn off camera"}
            aria-pressed={isVideoOff}
          >
            {isVideoOff ? (
              <VideoOff className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Video className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>

          <Button
            variant={isScreenSharing ? "secondary" : "outline"}
            size="icon"
            onClick={() => setIsScreenSharing(!isScreenSharing)}
            className={cn(
              "h-12 w-12 rounded-full min-h-[48px] min-w-[48px]",
              isScreenSharing && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-500"
            )}
            aria-label={isScreenSharing ? "Stop sharing" : "Share screen"}
            aria-pressed={isScreenSharing}
          >
            <ScreenShare className="h-5 w-5" aria-hidden="true" />
          </Button>

          <Button
            variant="destructive"
            size="icon"
            className="h-12 w-12 rounded-full min-h-[48px] min-w-[48px] ml-4"
            aria-label="Leave class"
          >
            <PhoneOff className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>

        {/* Mobile Chat Toggle */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="h-12 w-12 rounded-full min-h-[48px] min-w-[48px] lg:hidden ml-4"
          aria-label={isChatOpen ? "Close chat" : "Open chat"}
          aria-expanded={isChatOpen}
        >
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
        </Button>
      </footer>

      {/* Mobile Chat Overlay */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsChatOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm">
            <ChatSidebar
              messages={mockMessages}
              participants={mockParticipants}
              isHandRaised={isHandRaised}
              onRaiseHand={() => setIsHandRaised(!isHandRaised)}
              onSendMessage={(content) => console.log("[v0] Send message:", content)}
              isOpen={isChatOpen}
              onClose={() => setIsChatOpen(false)}
              className="h-full"
            />
          </div>
        </div>
      )}
    </div>
  )
}
