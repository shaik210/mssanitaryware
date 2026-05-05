"use client"

import * as React from "react"
import {
  Pencil,
  Eraser,
  Type,
  Square,
  Circle,
  Minus,
  Undo2,
  Redo2,
  Trash2,
  Download,
  Palette,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WhiteboardProps {
  className?: string
}

type Tool = "pencil" | "eraser" | "text" | "rectangle" | "circle" | "line"

const tools: { id: Tool; icon: React.ElementType; label: string }[] = [
  { id: "pencil", icon: Pencil, label: "Pencil" },
  { id: "eraser", icon: Eraser, label: "Eraser" },
  { id: "text", icon: Type, label: "Text" },
  { id: "rectangle", icon: Square, label: "Rectangle" },
  { id: "circle", icon: Circle, label: "Circle" },
  { id: "line", icon: Minus, label: "Line" },
]

const colors = [
  "#000000",
  "#EF4444",
  "#F59E0B",
  "#22C55E",
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#FFFFFF",
]

export function Whiteboard({ className }: WhiteboardProps) {
  const [activeTool, setActiveTool] = React.useState<Tool>("pencil")
  const [activeColor, setActiveColor] = React.useState("#000000")
  const canvasRef = React.useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        "flex flex-col h-full rounded-[12px] border bg-card overflow-hidden",
        className
      )}
      role="region"
      aria-label="Interactive whiteboard"
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-2 p-2 border-b bg-muted/50">
        <div className="flex items-center gap-1">
          {/* Drawing Tools */}
          <div className="flex items-center gap-0.5 bg-background rounded-lg p-1">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                variant={activeTool === tool.id ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setActiveTool(tool.id)}
                className={cn(
                  "h-9 w-9 min-h-[44px] min-w-[44px]",
                  activeTool === tool.id && "bg-trust-blue/10 text-trust-blue"
                )}
                aria-label={tool.label}
                aria-pressed={activeTool === tool.id}
              >
                <tool.icon className="h-4 w-4" aria-hidden="true" />
              </Button>
            ))}
          </div>

          {/* Color Picker */}
          <div className="flex items-center gap-1 bg-background rounded-lg p-1.5 ml-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setActiveColor(color)}
                className={cn(
                  "w-6 h-6 min-h-[24px] min-w-[24px] rounded-full border-2 transition-transform hover:scale-110",
                  activeColor === color
                    ? "border-trust-blue ring-2 ring-trust-blue/30"
                    : "border-transparent"
                )}
                style={{ backgroundColor: color }}
                aria-label={`Select ${color} color`}
                aria-pressed={activeColor === color}
              />
            ))}
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              aria-label="More colors"
            >
              <Palette className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Undo/Redo */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 min-h-[44px] min-w-[44px]"
            aria-label="Undo"
          >
            <Undo2 className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 min-h-[44px] min-w-[44px]"
            aria-label="Redo"
          >
            <Redo2 className="h-4 w-4" aria-hidden="true" />
          </Button>

          <div className="w-px h-6 bg-border mx-1" aria-hidden="true" />

          {/* Clear and Download */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 min-h-[44px] min-w-[44px] text-destructive hover:text-destructive"
            aria-label="Clear whiteboard"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 min-h-[44px] min-w-[44px]"
            aria-label="Download whiteboard"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {/* Canvas Area */}
      <div
        ref={canvasRef}
        className="flex-1 bg-white dark:bg-zinc-900 cursor-crosshair relative"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        role="img"
        aria-label="Whiteboard canvas - draw here"
      >
        {/* Placeholder content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-muted-foreground">
            <Pencil className="h-12 w-12 mx-auto mb-2 opacity-30" aria-hidden="true" />
            <p className="text-sm">Start drawing on the whiteboard</p>
            <p className="text-xs mt-1">Select a tool and color to begin</p>
          </div>
        </div>
      </div>
    </div>
  )
}
