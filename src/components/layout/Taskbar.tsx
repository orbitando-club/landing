interface TaskbarProps {
  onLogoClick?: () => void
}

export function Taskbar({ onLogoClick }: TaskbarProps) {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-orb-black bg-orb-white win95-border-inset"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-3 py-2 text-xs md:px-4 md:text-sm">
        <button
          type="button"
          onClick={onLogoClick}
          className="focus-ring flex min-w-0 items-center gap-2 rounded-sm"
          aria-label="Orbitando"
        >
          <img src="/brand/isotipo.png" alt="" className="h-5 w-auto shrink-0" />
          <span className="truncate font-display text-[10px] font-bold uppercase tracking-wide md:text-xs">
            Orbitando Club
          </span>
        </button>

        <span className="hidden font-medium text-orb-black/70 sm:inline">
          sitio en construcción
        </span>

        <span className="flex shrink-0 items-center gap-1.5 font-display text-[10px] font-bold uppercase md:text-xs">
          <span className="blink inline-block h-2 w-2 rounded-full bg-orb-magenta" />
          en órbita
        </span>
      </div>
    </footer>
  )
}
