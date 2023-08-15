export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","images/bg-vector.svg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.d1e913bd.js","app":"_app/immutable/entry/app.2959d54d.js","imports":["_app/immutable/entry/start.d1e913bd.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.f4adb239.js","_app/immutable/entry/app.2959d54d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a28bfc2a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/events",
				pattern: /^\/api\/events\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/events/_server.ts.js'))
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
