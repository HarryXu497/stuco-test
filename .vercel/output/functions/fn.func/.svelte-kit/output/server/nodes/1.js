

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ab8ad06d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a28bfc2a.js","_app/immutable/chunks/singletons.184dcab8.js"];
export const stylesheets = [];
export const fonts = [];
