import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_oklch(0.65_0.22_255_/_0.4)]">
        <span className="font-display text-xl font-bold text-background">E</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-wide text-foreground">ELITE</span>
        <span className="text-[9px] font-medium tracking-[0.2em] text-muted-foreground">COMPANY DIGITAL</span>
      </div>
    </div>
  )
}
