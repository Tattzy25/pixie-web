import type React from "react"
import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColors?: "purple-pink" | "blue-purple" | "cyan-blue" | "rainbow"
  intensity?: "low" | "medium" | "high"
}

export function GlowCard({ children, className, glowColors = "purple-pink", intensity = "medium" }: GlowCardProps) {
  const getGlowClasses = () => {
    const intensityMap = {
      low: "blur-[10px] opacity-50",
      medium: "blur-[20px] opacity-60",
      high: "blur-[30px] opacity-70",
    }

    const colorMap = {
      "purple-pink": "before:from-purple-500/30 before:via-fuchsia-500/30 before:to-pink-500/30",
      "blue-purple": "before:from-blue-500/30 before:via-indigo-500/30 before:to-purple-500/30",
      "cyan-blue": "before:from-cyan-500/30 before:via-blue-500/30 before:to-indigo-500/30",
      rainbow: "before:from-cyan-500/30 before:via-purple-500/30 before:to-pink-500/30",
    }

    return `${intensityMap[intensity]} ${colorMap[glowColors]}`
  }

  return (
    <div className={cn("relative group", className)}>
      <div
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-r transition-all duration-300 group-hover:opacity-100",
          getGlowClasses(),
        )}
      ></div>
      <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden h-full">
        {children}
      </div>
    </div>
  )
}

