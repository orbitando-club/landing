import { EMAIL, EMAIL_HREF, INSTAGRAM_URL, LINKEDIN_URL } from '../../lib/constants'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
      <path d="M6.5 9H4v11h2.5V9ZM5.25 4A1.75 1.75 0 1 0 5.25 7.5 1.75 1.75 0 0 0 5.25 4ZM20 20h-2.5v-5.6c0-1.9-.7-3.2-2.4-3.2-1.3 0-2 0.9-2.4 1.7-.1.3-.1.7-.1 1.1V20H10.1s.05-10.6 0-11.7H12.6v1.6c.3-.5 1.7-1.9 4.1-1.9 3 0 5.3 2 5.3 6.2V20Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

const links = [
  {
    href: INSTAGRAM_URL,
    label: 'Instagram',
    handle: '@orbitandoclub',
    icon: InstagramIcon,
    hover: 'hover:bg-orb-magenta hover:text-orb-white',
    external: true,
  },
  {
    href: LINKEDIN_URL,
    label: 'LinkedIn',
    handle: 'Orbitando',
    icon: LinkedInIcon,
    hover: 'hover:bg-orb-cyan',
    external: true,
  },
  {
    href: EMAIL_HREF,
    label: 'Mail',
    handle: 'Escribínos',
    icon: MailIcon,
    hover: 'hover:bg-orb-yellow',
    external: false,
  },
]

export function ContactLinks() {
  return (
    <ul className="grid gap-2 sm:grid-cols-3">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <li key={link.href}>
            <a
              href={link.href}
              aria-label={
                link.href.startsWith('mailto:')
                  ? `Mail ${EMAIL}`
                  : `${link.label} ${link.handle}`
              }
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className={`focus-ring shadow-hard flex items-center gap-3 border-2 border-orb-black bg-orb-white px-3 py-3 transition-colors active:translate-x-0.5 active:translate-y-0.5 active:shadow-hard-sm ${link.hover}`}
            >
              <Icon />
              <span className="min-w-0 text-left">
                <span className="block font-display text-[10px] font-bold uppercase tracking-wide">
                  {link.label}
                </span>
                <span className="block truncate text-xs opacity-70">{link.handle}</span>
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
