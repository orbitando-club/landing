# Orbitando

Página placeholder mientras llega el nuevo sitio.

## Desarrollo

```bash
npm install
npm run dev
```

## GitHub Pages

El deploy corre solo al pushear `main` (o con *Run workflow*).

En el repo, una sola vez:

1. **Settings → Pages → Source:** GitHub Actions
2. Push a `main`

Queda en `https://orbitando-club.github.io/landing/`.

Para probar el build de Pages en local:

```bash
npm run build:gh-pages
npm run preview
```

## Contacto

Los enlaces de Instagram, LinkedIn y mail están en `src/lib/constants.ts`.
