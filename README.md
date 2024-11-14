powershell -c "irm bun.sh/install.ps1 | iex"
bun -v
bun create astro@latest
cd web-portfolio
bun run dev

npx astro add --list
npx astro add tailwind
 import tailwind from '@astrojs/tailwind'

 npm install @fontsource-variable/onest
