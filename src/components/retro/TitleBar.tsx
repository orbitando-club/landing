import type { PointerEvent } from 'react'

interface TitleBarProps {
  title: string
  onMinimize?: () => void
  onDragStart?: (event: PointerEvent) => void
}

export function TitleBar({ title, onMinimize, onDragStart }: TitleBarProps) {
  const handlePointerDown = (event: PointerEvent) => {
    if ((event.target as HTMLElement).closest('button')) return
    onDragStart?.(event)
  }

  return (
    <div
      className={`flex items-center justify-between gap-2 px-2 py-1.5 titlebar-rainbow text-orb-ink ${
        onDragStart ? 'cursor-grab touch-none active:cursor-grabbing' : ''
      }`}
      onPointerDown={onDragStart ? handlePointerDown : undefined}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <span className="hidden h-3 w-3 shrink-0 border border-orb-ink bg-orb-paper sm:inline-block" />
        <span className="truncate font-display text-[11px] font-bold uppercase tracking-wide md:text-xs">
          {title}
        </span>
        {onDragStart && (
          <span className="hidden text-[9px] font-medium uppercase tracking-wider text-orb-ink/50 sm:inline">
            — arrastrar
          </span>
        )}
      </div>
      <div className="flex shrink-0 gap-1">
        <button
          type="button"
          onClick={onMinimize}
          className="focus-ring win95-chrome flex h-5 w-5 cursor-pointer items-center justify-center bg-[#f3f3f3] text-[10px] font-bold leading-none text-orb-ink"
          aria-label="Minimizar ventana"
        >
          _
        </button>
        <button
          type="button"
          className="focus-ring win95-chrome flex h-5 w-5 cursor-default items-center justify-center bg-[#f3f3f3] text-[10px] font-bold leading-none text-orb-ink"
          aria-label="Maximizar ventana"
          tabIndex={-1}
        >
          □
        </button>
        <button
          type="button"
          className="focus-ring win95-chrome flex h-5 w-5 cursor-default items-center justify-center bg-[#f3f3f3] text-[10px] font-bold leading-none text-orb-ink"
          aria-label="Cerrar ventana"
          tabIndex={-1}
        >
          ×
        </button>
      </div>
    </div>
  )
}
