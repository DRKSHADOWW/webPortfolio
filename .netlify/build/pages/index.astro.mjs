/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, b as createAstro, s as spreadAttributes } from '../chunks/astro/server_JDlzwVgs.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-center items-center py-8 w-[1120px] mx-auto"> <nav class="flex flex-row gap-x-10 opacity-80"> <a href="/">Home</a> <a href="/about">About</a> <a href="/projects">Projects</a> <a href="/contact">Contact</a> </nav> </header>`;
}, "C:/Users/andre/OneDrive/Documentos/Proyectos/web-portfolio/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const styleBody = "absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]";
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body${addAttribute(styleBody, "class")}> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/andre/OneDrive/Documentos/Proyectos/web-portfolio/src/layouts/Layout.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="bg-blue-100 
text-blue-800 
text-xs 
font-medium me-2 
px-2.5 
py-0.5 
rounded 
dark:bg-blue-900 
dark:text-blue-300 
hover:scale-110 
transition"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/andre/OneDrive/Documentos/Proyectos/web-portfolio/src/components/Badge.astro", void 0);

const localImage = new Proxy({"src":"/_astro/andrew_david.rHK6_K8C.jpg","width":1063,"height":1063,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/OneDrive/Documentos/Proyectos/web-portfolio/public/andrew_david.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg>`;
}, "C:/Users/andre/OneDrive/Documentos/Proyectos/web-portfolio/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$2 = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a class="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 hover:scale-110 hover:bg-white/10 transition"${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/andre/OneDrive/Documentos/Proyectos/web-portfolio/src/components/icons/SocialPill.astro", void 0);

const $$Astro$1 = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "C:/Users/andre/OneDrive/Documentos/Proyectos/web-portfolio/src/components/icons/Github.astro", void 0);

const $$Astro = createAstro();
const $$Email = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Email;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail-forward"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path> <path d="M3 6l9 6l9 -6"></path> <path d="M15 18h6"></path><
    path d="M18 15l3 3l-3 3" />
</svg>`;
}, "C:/Users/andre/OneDrive/Documentos/Proyectos/web-portfolio/src/components/icons/Email.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "portfolio de Andr\xE9s - desarrolador y programador web", "description": "Contratame y haz parte de creaciones increibles e innovadoras" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="w-full lg:w-[740px] mx-auto py-40"> <img class="rounded-full size-12 mb-4"${addAttribute(localImage.src, "src")} alt="andrew photo"> <h1 class="text-white text-5xl font-bolf flex justify-between flex-row gap-x-4 pb-10">
Hola, soy Andrés Murillo
<a href="https://www.linkedin.com/in/andres-david-993b3b338/" target="_blank" rel="noopener" class="flex justify-center items-center "> ${renderComponent($$result2, "Badge", $$Badge, {}, { "default": ($$result3) => renderTemplate` Disponible para trabajar` })} </a> </h1> <h2 class="text-xl opacity-80 text-wrap"> Soy un apasionado <span class="text-yellow-200 opacity-80"> Desarrollador web,</span><span class="text-red-300/90"> de Medellín, colombia</span> con<span class="text-white-700"> +2 año de experiencia.  mi objetivo es crear soluciones creativas, </span>experiencias únicas yyg proyectos innovadores, que no solo cumplan con las expectativas, sino que las superen.</h2> <nav class="flex gap-x-2 mt-4"> ${renderComponent($$result2, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/andres-david-993b3b338/" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LinkedIn", $$LinkedIn, { "class": "size-6" })}
LinkedIn aqui es
` })} ${renderComponent($$result2, "SocialPill", $$SocialPill, { "href": "https://github.com/DRKSHADOWW" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Github", $$Github, { "class": "size-6" })}
Github
` })} ${renderComponent($$result2, "SocialPill", $$SocialPill, { "href": "mailto:andresdavid.dev.1405@gmail.com" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Email", $$Email, { "class": "size-6" })}
Gmail
` })} </nav> </section> </main> ` })}`;
}, "C:/Users/andre/OneDrive/Documentos/Proyectos/web-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/andre/OneDrive/Documentos/Proyectos/web-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
