import{s as i,c as u,u as c,g as m,d as f,o as _}from"../chunks/scheduler.e108d1fd.js";import{S as d,i as p,d as h,t as g}from"../chunks/index.5ed8cc18.js";import{t as l}from"../chunks/theme.store.8735a582.js";const $=!0,j=Object.freeze(Object.defineProperty({__proto__:null,prerender:$},Symbol.toStringTag,{value:"Module"}));function b(a){let o;const n=a[1].default,t=u(n,a,a[0],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,s){t&&t.m(e,s),o=!0},p(e,[s]){t&&t.p&&(!o||s&1)&&c(t,n,e,e[0],o?f(n,e[0],s,null):m(e[0]),null)},i(e){o||(h(t,e),o=!0)},o(e){g(t,e),o=!1},d(e){t&&t.d(e)}}}function S(a,o,n){let{$$slots:t={},$$scope:e}=o;return _(()=>{let s=localStorage.getItem("theme")??"light";"matchMedia"in window&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(s="dark"),l.set(s),l.subscribe(r=>{localStorage.setItem("theme",r),document.documentElement.setAttribute("data-theme",r)})}),a.$$set=s=>{"$$scope"in s&&n(0,e=s.$$scope)},[e,t]}class k extends d{constructor(o){super(),p(this,o,S,b,i,{})}}export{k as component,j as universal};
