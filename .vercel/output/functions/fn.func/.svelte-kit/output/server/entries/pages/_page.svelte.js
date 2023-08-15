import { c as create_ssr_component, a as each, e as escape } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.vector-container.svelte-hcnf9o.svelte-hcnf9o{position:absolute;top:0;right:0;z-index:-1}.hero.svelte-hcnf9o.svelte-hcnf9o{display:grid;grid-template-columns:repeat(24, 4.1666666667vw);grid-template-rows:repeat(24, calc((100vh - 6rem) / 24));min-height:calc(100vh - 6rem)}.hero.svelte-hcnf9o h1.svelte-hcnf9o{grid-row:7/16;grid-column:4/12;font-size:10rem;font-weight:900;font-family:"Poppins";line-height:0.85;background:hsl(116, 28%, 41%);background:linear-gradient(135deg, hsl(116, 28%, 41%) 30%, #83b780 100%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.hero.svelte-hcnf9o .image-carousel{grid-row:5/18;grid-column:15/20}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    console.log(data);
  }
  return `<main> <div class="vector-container svelte-hcnf9o" data-svelte-h="svelte-199gf6p"><img src="images/bg-vector.svg"></div> <section class="hero svelte-hcnf9o" data-svelte-h="svelte-1li43x2"><h1 class="svelte-hcnf9o">RHHS STUCO</h1></section>  <section class=""><h2 data-svelte-h="svelte-1b7vw6v">Events</h2> ${each(data.events, (event) => {
    return `<h3>${escape(event.name)}</h3> <h3>${escape(event.description)}</h3> <h3>${escape(event.date)}</h3>`;
  })}</section> </main>`;
});
export {
  Page as default
};
