import{s as z,n as A}from"../chunks/scheduler.e108d1fd.js";import{S as D,i as P,g as H,s as T,h as C,j as S,x as b,c as M,f as u,k as I,a as E,y as m,z as R,m as L,n as N,o as O}from"../chunks/index.a28bfc2a.js";function j(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function q(a,n,c){const i=a.slice();return i[1]=n[c],i}function w(a){let n,c=a[1].name+"",i,d,o,r=a[1].description+"",_,h,v,p=a[1].date+"",g;return{c(){n=H("h3"),i=L(c),d=T(),o=H("h3"),_=L(r),h=T(),v=H("h3"),g=L(p)},l(t){n=C(t,"H3",{});var e=S(n);i=N(e,c),e.forEach(u),d=M(t),o=C(t,"H3",{});var l=S(o);_=N(l,r),l.forEach(u),h=M(t),v=C(t,"H3",{});var f=S(v);g=N(f,p),f.forEach(u)},m(t,e){E(t,n,e),m(n,i),E(t,d,e),E(t,o,e),m(o,_),E(t,h,e),E(t,v,e),m(v,g)},p(t,e){e&1&&c!==(c=t[1].name+"")&&O(i,c),e&1&&r!==(r=t[1].description+"")&&O(_,r),e&1&&p!==(p=t[1].date+"")&&O(g,p)},d(t){t&&(u(n),u(d),u(o),u(h),u(v))}}}function U(a){let n,c,i='<img src="images/bg-vector.svg"/>',d,o,r='<h1 class="svelte-hcnf9o">RHHS STUCO</h1>',_,h,v,p="Events",g,t=j(a[0].events),e=[];for(let l=0;l<t.length;l+=1)e[l]=w(q(a,t,l));return{c(){n=H("main"),c=H("div"),c.innerHTML=i,d=T(),o=H("section"),o.innerHTML=r,_=T(),h=H("section"),v=H("h2"),v.textContent=p,g=T();for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){n=C(l,"MAIN",{});var f=S(n);c=C(f,"DIV",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-199gf6p"&&(c.innerHTML=i),d=M(f),o=C(f,"SECTION",{class:!0,"data-svelte-h":!0}),b(o)!=="svelte-1li43x2"&&(o.innerHTML=r),_=M(f),h=C(f,"SECTION",{class:!0});var s=S(h);v=C(s,"H2",{"data-svelte-h":!0}),b(v)!=="svelte-1b7vw6v"&&(v.textContent=p),g=M(s);for(let x=0;x<e.length;x+=1)e[x].l(s);s.forEach(u),f.forEach(u),this.h()},h(){I(c,"class","vector-container svelte-hcnf9o"),I(o,"class","hero svelte-hcnf9o"),I(h,"class","")},m(l,f){E(l,n,f),m(n,c),m(n,d),m(n,o),m(n,_),m(n,h),m(h,v),m(h,g);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(h,null)},p(l,[f]){if(f&1){t=j(l[0].events);let s;for(s=0;s<t.length;s+=1){const x=q(l,t,s);e[s]?e[s].p(x,f):(e[s]=w(x),e[s].c(),e[s].m(h,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=t.length}},i:A,o:A,d(l){l&&u(n),R(e,l)}}}function V(a,n,c){let{data:i}=n;return a.$$set=d=>{"data"in d&&c(0,i=d.data)},a.$$.update=()=>{a.$$.dirty&1&&console.log(i)},[i]}class F extends D{constructor(n){super(),P(this,n,V,U,z,{data:0})}}export{F as component};
