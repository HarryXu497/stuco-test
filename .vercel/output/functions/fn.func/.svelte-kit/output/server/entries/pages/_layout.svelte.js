import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;900&family=Poppins:wght@300;400;500;700;900&display=swap");nav.svelte-14o7lw1.svelte-14o7lw1{display:flex;flex-direction:row;justify-content:space-between;padding:2rem 3rem;font-family:"Inter", sans-serif}nav.svelte-14o7lw1 a.svelte-14o7lw1{color:inherit;text-decoration:none}.nav__logo.svelte-14o7lw1.svelte-14o7lw1,.nav__links.svelte-14o7lw1>ul.svelte-14o7lw1{display:flex;flex-direction:row;align-items:center}.nav__logo.svelte-14o7lw1 a.svelte-14o7lw1{font-size:1.5rem;font-weight:900;color:hsl(116, 28%, 41%)}.nav__links.svelte-14o7lw1>ul.svelte-14o7lw1{gap:3.5rem}.nav__links.svelte-14o7lw1>ul a.svelte-14o7lw1{font-size:1.125rem;font-weight:bold;color:hsl(115, 25%, 69%)}.change-theme.svelte-14o7lw1.svelte-14o7lw1{display:inline-block;color:hsl(115, 25%, 69%);font-size:1.5rem}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header data-svelte-h="svelte-1g9wl7n"><nav class="svelte-14o7lw1"><div class="nav__logo svelte-14o7lw1"><a href="/" class="svelte-14o7lw1">RHHS STUCO</a></div> <div class="nav__links svelte-14o7lw1"><ul class="svelte-14o7lw1"><li><a href="/" class="svelte-14o7lw1">Home</a></li> <li><a href="/" class="svelte-14o7lw1">Events</a></li> <li><a href="/" class="svelte-14o7lw1">Clubs</a></li> <li><a href="/" class="svelte-14o7lw1">Gallery</a></li> <li><a href="/" class="svelte-14o7lw1">Members</a></li> <i class="ri-moon-line change-theme svelte-14o7lw1"></i></ul></div></nav></header> ${slots.default ? slots.default({}) : ``} <footer data-svelte-h="svelte-ix7jxo"></footer>`;
});
export {
  Layout as default
};
