import { useState } from 'react'
import { ColorLabel } from '../editorial/ColorLabel'
import { Win95Window } from '../retro/Win95Window'
import { ContactLinks } from './ContactLinks'
import { brandFor } from '../../lib/brand'
import { useTheme } from '../../lib/theme'

export function ComingSoonCard() {
  const [minimized, setMinimized] = useState(false)
  const { theme } = useTheme()
  const brand = brandFor(theme)

  if (minimized) {
    return (
      <button
        type="button"
        onClick={() => setMinimized(false)}
        className="focus-ring shadow-hard mx-auto flex items-center gap-2 border-2 border-orb-fg bg-orb-surface px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-orb-fg"
      >
        <span className="inline-block h-2.5 w-2.5 bg-orb-magenta" />
        Restaurar cartel
      </button>
    )
  }

  return (
    <div className="relative w-full">
      <Win95Window title="cartel.txt — orbitando" onMinimize={() => setMinimized(true)}>
        <div className="relative bg-orb-panel px-6 py-8 md:px-10 md:py-10">
          <ColorLabel
            text="Próximamente"
            color="magenta"
            className="absolute right-3 top-3 rotate-3"
          />
          <img
            src={brand.imagotipo}
            alt="Orbitando"
            className="mx-auto h-auto w-full"
          />
        </div>

        <div className="flex flex-col items-center px-5 py-6 text-center md:px-8 md:py-8">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-orb-muted">
            Transmisión 001
          </p>

          <h1 className="mt-2 w-full font-display text-[1.65rem] font-bold uppercase leading-[0.95] tracking-tight sm:text-3xl md:text-5xl">
            Está llegando
            <br />
            orbitando
          </h1>

          <p className="mt-4 max-w-sm text-base text-orb-copy md:text-lg">
            Un nuevo sitio está en órbita. Pronto aterrizamos.
          </p>

          <div className="mt-8 w-full">
            <ContactLinks />
          </div>
        </div>
      </Win95Window>
    </div>
  )
}
