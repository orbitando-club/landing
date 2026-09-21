import { brandFor } from '../../lib/brand'
import { useTheme } from '../../lib/theme'

export function OrbitField() {
  const { theme } = useTheme()
  const brand = brandFor(theme)
  const faded = theme === 'dark' ? 'opacity-[0.22]' : 'opacity-[0.28]'
  const fadedSoft = theme === 'dark' ? 'opacity-[0.16]' : 'opacity-[0.2]'

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src={brand.isotipo}
        alt=""
        className={`orbit-spin absolute -right-24 -top-16 w-[min(85vw,640px)] ${faded} md:-right-16 md:-top-10`}
      />
      <img
        src={brand.isotipo}
        alt=""
        className={`orbit-spin-reverse absolute -bottom-28 -left-28 w-[min(70vw,420px)] ${fadedSoft} md:-bottom-20 md:-left-16`}
      />
    </div>
  )
}
