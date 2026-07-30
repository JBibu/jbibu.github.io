# jbibu.xyz

Personal portfolio of Javier Muñoz Solano — web developer and systems administrator.

Live at **[jbibu.xyz](https://jbibu.xyz)**.

## Stack

- [Nuxt 4](https://nuxt.com) — statically generated
- [Tailwind CSS 4](https://tailwindcss.com)
- [GSAP](https://gsap.com) + ScrollTrigger for animation
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- [Three.js](https://threejs.org) for the WebGL hero background

## Development

Requires [Bun](https://bun.sh).

```bash
bun install
bun run dev        # http://localhost:3000
```

## Build

```bash
bun run generate   # static output in .output/public
bun run preview
```

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which generates the static site and publishes it to GitHub Pages. The custom
domain is pinned by `public/CNAME`.

## License

[GPL-3.0](LICENSE)
