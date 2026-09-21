import { brandFor } from '../../lib/brand'
import { useTheme } from '../../lib/theme'
import { ThemeToggle } from './ThemeToggle'

interface TaskbarProps {
  onLogoClick?: () => void
}

export function Taskbar({ onLogoClick }: TaskbarProps) {
  const { theme } = useTheme()
  const brand = brandFor(theme)

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-orb-fg bg-orb-surface win95-border-inset"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-3 py-2 text-xs md:px-4 md:text-sm">
        <button
          type="button"
          onClick={onLogoClick}
          className="focus-ring flex min-w-0 items-center gap-2 rounded-sm"
          aria-label="Orbitando"
        >
          <img src={brand.isotipo} alt="" className="h-5 w-auto shrink-0" />
          <img
            src={brand.logotipo}
            alt=""
            className="hidden h-3.5 w-auto sm:block"
          />
        </button>

        <span className="hidden font-medium text-orb-muted sm:inline">
          sitio en construcción
        </span>

        <div className="flex shrink-0 items-center gap-2">
          <span className="flex items-center gap-1.5 font-display text-[10px] font-bold uppercase md:text-xs">
            <span className="blink inline-block h-2 w-2 rounded-full bg-orb-magenta" />
            en órbita
          </span>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
