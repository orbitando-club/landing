import { publicAsset } from './constants'
import type { Theme } from './theme'

export function brandFor(theme: Theme) {
  const dark = theme === 'dark'
  return {
    imagotipo: publicAsset('brand/imagotipo.png'),
    isotipo: publicAsset('brand/isotipo.png'),
    logotipo: publicAsset(dark ? 'brand/logotipo.png' : 'brand/logotipo-black.png'),
  }
}
