import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-10 w-[130px] shrink-0 sm:h-11 sm:w-[143px]", className)}>
      <Image
        src="/elite-logo.png"
        alt="Elite Company Digital"
        fill
        priority
        className="object-contain"
        sizes="(max-width: 640px) 130px, 143px"
      />
    </div>
  )
}

export function BrandIcon({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-9 w-11 shrink-0 overflow-hidden rounded-md", className)}>
      <Image
        src="/elite-icon.png"
        alt=""
        fill
        className="object-contain"
        sizes="44px"
        aria-hidden="true"
      />
    </span>
  )
}
