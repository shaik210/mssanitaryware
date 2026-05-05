"use client"

import * as React from "react"
import { Search, X, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  subjects?: string[]
  selectedSubjects?: string[]
  onSubjectsChange?: (subjects: string[]) => void
  className?: string
}

const defaultSubjects = [
  "TSSC Mathematics",
  "TSBIE Physics",
  "TSBIE Chemistry",
  "Telugu Literature",
  "Android Andhra History",
  "Telugu Language",
  "English Literature",
  "JEE Advanced",
]

export function SearchBar({
  placeholder = "Search tutors, subjects...",
  value = "",
  onChange,
  onSearch,
  subjects = defaultSubjects,
  selectedSubjects = [],
  onSubjectsChange,
  className,
}: SearchBarProps) {
  const [localValue, setLocalValue] = React.useState(value)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setLocalValue(newValue)
    onChange?.(newValue)
  }

  const handleClear = () => {
    setLocalValue("")
    onChange?.("")
    inputRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(localValue)
    }
  }

  const toggleSubject = (subject: string) => {
    const newSubjects = selectedSubjects.includes(subject)
      ? selectedSubjects.filter((s) => s !== subject)
      : [...selectedSubjects, subject]
    onSubjectsChange?.(newSubjects)
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex-1">
        <Search
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          type="search"
          value={localValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            "h-12 w-full rounded-[12px] border border-input bg-background pl-12 pr-10 text-sm",
            "placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "dark:bg-input/30"
          )}
          aria-label="Search"
        />
        {localValue && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 shrink-0 rounded-[12px] min-h-[44px] min-w-[44px]"
            aria-label="Filter subjects"
          >
            <Filter className="h-5 w-5" aria-hidden="true" />
            {selectedSubjects.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                {selectedSubjects.length}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Filter by Subject</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {subjects.map((subject) => (
            <DropdownMenuCheckboxItem
              key={subject}
              checked={selectedSubjects.includes(subject)}
              onCheckedChange={() => toggleSubject(subject)}
            >
              {subject}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
