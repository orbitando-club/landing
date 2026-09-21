export const INSTAGRAM_URL = 'https://www.instagram.com/orbitandoclub'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/orbitando'
export const EMAIL = 'santiago@orbitandoclub.com'
export const EMAIL_HREF = `mailto:${EMAIL}`

export function publicAsset(path: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
