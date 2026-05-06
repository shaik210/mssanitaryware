"use client"

import * as React from "react"
import {
  Send,
  Smile,
  Paperclip,
  Hand,
  Users,
  MessageSquare,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  sender: string
  content: string
  timestamp: string
  isHost?: boolean
  isLocal?: boolean
}

interface Participant {
  id: string
  name: string
  avatar?: string
  isHost?: boolean
  isMuted?: boolean
  hasRaisedHand?: boolean
}

interface ChatSidebarProps {
  messages: Message[]
  participants: Participant[]
  onSendMessage?: (content: string) => void
  onRaiseHand?: () => void
  isHandRaised?: boolean
  isOpen?: boolean
  onClose?: () => void
  className?: string
}

export function ChatSidebar({
  messages,
  participants,
  onSendMessage,
  onRaiseHand,
  isHandRaised = false,
  isOpen = true,
  onClose,
  className,
}: ChatSidebarProps) {
  const [newMessage, setNewMessage] = React.useState("")
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage?.(newMessage.trim())
      setNewMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={cn(
        "flex flex-col h-full w-80 border-l bg-card",
        className
      )}
      role="complementary"
      aria-label="Chat and participants sidebar"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b">
        <h2 className="font-semibold text-foreground">Live Chat</h2>
        <div className="flex items-center gap-2">
          <Button
            variant={isHandRaised ? "secondary" : "ghost"}
            size="icon"
            onClick={onRaiseHand}
            className={cn(
              "h-9 w-9 min-h-[44px] min-w-[44px]",
              isHandRaised && "bg-action-amber/20 text-action-amber"
            )}
            aria-label={isHandRaised ? "Lower hand" : "Raise hand"}
            aria-pressed={isHandRaised}
          >
            <Hand className="h-4 w-4" aria-hidden="true" />
          </Button>
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-9 w-9 min-h-[44px] min-w-[44px] lg:hidden"
              aria-label="Close sidebar"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="chat" className="flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-2 mx-3 mt-2 max-w-[calc(100%-1.5rem)]">
          <TabsTrigger value="chat" className="gap-1.5 min-h-[44px]">
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="participants" className="gap-1.5 min-h-[44px]">
            <Users className="h-4 w-4" aria-hidden="true" />
            <span>{participants.length}</span>
          </TabsTrigger>
        </TabsList>

        {/* Chat Tab */}
        <TabsContent value="chat" className="flex-1 flex flex-col mt-0 p-0">
          <ScrollArea className="flex-1 p-3">
            <div className="space-y-3" role="log" aria-label="Chat messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex flex-col gap-1",
                    message.isLocal && "items-end"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "text-xs font-medium",
                        message.isHost
                          ? "text-trust-blue"
                          : "text-muted-foreground"
                      )}
                    >
                      {message.sender}
                      {message.isHost && (
                        <Badge
                          variant="secondary"
                          className="ml-1 text-[10px] px-1 py-0 bg-trust-blue/10 text-trust-blue"
                        >
                          Host
                        </Badge>
                      )}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {message.timestamp}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "max-w-[85%] rounded-[12px] px-3 py-2 text-sm",
                      message.isLocal
                        ? "bg-trust-blue text-white"
                        : "bg-muted text-foreground"
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-3 border-t">
            <div className="flex items-end gap-2">
              <div className="flex-1 relative">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className={cn(
                    "w-full min-h-[44px] max-h-24 resize-none rounded-[12px] border bg-background px-3 py-2.5 pr-20 text-sm",
                    "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  )}
                  rows={1}
                  aria-label="Chat message input"
                />
                <div className="absolute right-2 bottom-2 flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    aria-label="Add emoji"
                  >
                    <Smile className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    aria-label="Attach file"
                  >
                    <Paperclip className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <Button
                onClick={handleSend}
                disabled={!newMessage.trim()}
                className="h-[44px] w-[44px] rounded-[12px] bg-trust-blue hover:bg-trust-blue/90"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Participants Tab */}
        <TabsContent value="participants" className="flex-1 mt-0">
          <ScrollArea className="h-full p-3">
            <div className="space-y-2" role="list" aria-label="Participants">
              {participants.map((participant) => (
                <div
                  key={participant.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  role="listitem"
                >
                  <div className="relative">
                    <div
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground overflow-hidden"
                      aria-hidden="true"
                    >
                      {participant.avatar ? (
                        <img
                          src={participant.avatar}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        participant.name.charAt(0).toUpperCase()
                      )}
                    </div>
                    {participant.hasRaisedHand && (
                      <div className="absolute -top-1 -right-1 bg-action-amber text-white rounded-full p-0.5">
                        <Hand className="h-3 w-3" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {participant.name}
                    </p>
                    {participant.isHost && (
                      <p className="text-xs text-trust-blue">Host</p>
                    )}
                  </div>
                  {participant.isMuted && (
                    <Badge variant="secondary" className="text-[10px]">
                      Muted
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}
