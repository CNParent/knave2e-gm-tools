(()=>{"use strict";new Set;const t="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;class e{_listeners="WeakMap"in t?new WeakMap:void 0;_observer=void 0;options;constructor(t){this.options=t}observe(t,e){return this._listeners.set(t,e),this._getObserver().observe(t,this.options),()=>{this._listeners.delete(t),this._observer.unobserve(t)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver((t=>{for(const n of t)e.entries.set(n.target,n),this._listeners.get(n.target)?.(n)})))}}e.entries="WeakMap"in t?new WeakMap:void 0;let n,l=!1;function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function o(t){t.parentNode&&t.parentNode.removeChild(t)}function r(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function i(t){return document.createElement(t)}function c(t){return document.createTextNode(t)}function u(){return c(" ")}function d(){return c("")}function f(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.data!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}function m(t,e,n,l){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function p(t,e,n){for(let n=0;n<t.options.length;n+=1){const l=t.options[n];if(l.__value===e)return void(l.selected=!0)}n&&void 0===e||(t.selectedIndex=-1)}function g(t){const e=t.querySelector(":checked");return e&&e.__value}function v(){}function y(t){return t()}function w(){return Object.create(null)}function _(t){t.forEach(y)}function x(t){return"function"==typeof t}function k(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function C(t){n=t}new Map;const T=[],S=[];let E=[];const M=[],N=Promise.resolve();let A=!1;function O(t){E.push(t)}function L(t){M.push(t)}const R=new Set;let j=0;function q(){if(0!==j)return;const t=n;do{try{for(;j<T.length;){const t=T[j];j++,C(t),D(t.$$)}}catch(t){throw T.length=0,j=0,t}for(C(null),T.length=0,j=0;S.length;)S.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];R.has(e)||(R.add(e),e())}E.length=0}while(T.length);for(;M.length;)M.pop()();A=!1,R.clear(),C(t)}function D(t){if(null!==t.fragment){t.update(),_(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const J=new Set;let P,z;function H(){P={r:0,c:[],p:P}}function I(){P.r||_(P.c),P=P.p}function B(t,e){t&&t.i&&(J.delete(t),t.i(e))}function U(t,e,n,l){if(t&&t.o){if(J.has(t))return;J.add(t),P.c.push((()=>{J.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}else l&&l()}function K(t){return void 0!==t?.length?t:Array.from(t)}function W(t,e){U(t,1,1,(()=>{e.delete(t.key)}))}function F(t,e,n,l,s,a,o,r,i,c,u,d){let f=t.length,h=a.length,b=f;const $={};for(;b--;)$[t[b].key]=b;const m=[],p=new Map,g=new Map,v=[];for(b=h;b--;){const t=d(s,a,b),r=n(t);let i=o.get(r);i?l&&v.push((()=>i.p(t,e))):(i=c(r,t),i.c()),p.set(r,m[b]=i),r in $&&g.set(r,Math.abs(b-$[r]))}const y=new Set,w=new Set;function x(t){B(t,1),t.m(r,u),o.set(t.key,t),u=t.first,h--}for(;f&&h;){const e=m[h-1],n=t[f-1],l=e.key,s=n.key;e===n?(u=e.first,f--,h--):p.has(s)?!o.has(l)||y.has(l)?x(e):w.has(s)?f--:g.get(l)>g.get(s)?(w.add(l),x(e)):(y.add(s),f--):(i(n,o),f--)}for(;f--;){const e=t[f];p.has(e.key)||i(e,o)}for(;h;)x(m[h-1]);return _(v),m}function G(t,e,n){const l=t.$$.props[e];void 0!==l&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function Z(t){t&&t.c()}function Q(t,e,n){const{fragment:l,after_update:s}=t.$$;l&&l.m(e,n),O((()=>{const e=t.$$.on_mount.map(y).filter(x);t.$$.on_destroy?t.$$.on_destroy.push(...e):_(e),t.$$.on_mount=[]})),s.forEach(O)}function X(t,e){const n=t.$$;null!==n.fragment&&(function(t){const e=[],n=[];E.forEach((l=>-1===t.indexOf(l)?e.push(l):n.push(l))),n.forEach((t=>t())),E=e}(n.after_update),_(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e,s,a,r,i,c=null,u=[-1]){const d=n;C(t);const f=t.$$={fragment:null,ctx:[],props:i,update:v,not_equal:r,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:w(),dirty:u,skip_bound:!1,root:e.target||d.$$.root};c&&c(f.root);let h=!1;if(f.ctx=s?s(t,e.props||{},((e,n,...l)=>{const s=l.length?l[0]:n;return f.ctx&&r(f.ctx[e],f.ctx[e]=s)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](s),h&&function(t,e){-1===t.$$.dirty[0]&&(T.push(t),A||(A=!0,N.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],f.update(),h=!0,_(f.before_update),f.fragment=!!a&&a(f.ctx),e.target){if(e.hydrate){l=!0;const t=(b=e.target,Array.from(b.childNodes));f.fragment&&f.fragment.l(t),t.forEach(o)}else f.fragment&&f.fragment.c();e.intro&&B(t.$$.fragment),Q(t,e.target,e.anchor),l=!1,q()}var b;C(d)}function Y(t,e,n,l){const s=n[t]?.type;if(e="Boolean"===s&&"boolean"!=typeof e?null!=e:e,!l||!n[t])return e;if("toAttribute"===l)switch(s){case"Object":case"Array":return null==e?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return null==e?null:e;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":default:return e;case"Number":return null!=e?+e:e}}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(z=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const n=this.$$c.$on(t,e);this.$$l_u.set(e,n)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const t=this.$$l_u.get(e);t&&(t(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){if(await Promise.resolve(),!this.$$cn||this.$$c)return;function t(t){return()=>{let e;return{c:function(){e=i("slot"),"default"!==t&&h(e,"name",t)},m:function(t,n){a(t,e,n)},d:function(t){t&&o(e)}}}}const e={},n=function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0})),e}(this);for(const s of this.$$s)s in n&&(e[s]=[t(s)]);for(const r of this.attributes){const c=this.$$g_p(r.name);c in this.$$d||(this.$$d[c]=Y(c,r.value,this.$$p_d,"toProp"))}for(const u in this.$$p_d)u in this.$$d||void 0===this[u]||(this.$$d[u]=this[u],delete this[u]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});const l=()=>{this.$$r=!0;for(const t in this.$$p_d)if(this.$$d[t]=this.$$c.$$.ctx[this.$$c.$$.props[t]],this.$$p_d[t].reflect){const e=Y(t,this.$$d[t],this.$$p_d,"toAttribute");null==e?this.removeAttribute(this.$$p_d[t].attribute||t):this.setAttribute(this.$$p_d[t].attribute||t,e)}this.$$r=!1};this.$$c.$$.after_update.push(l),l();for(const d in this.$$l)for(const f of this.$$l[d]){const b=this.$$c.$on(d,f);this.$$l_u.set(f,b)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=Y(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(t){return Object.keys(this.$$p_d).find((e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t))||t}});class tt{$$=void 0;$$set=void 0;$destroy(){X(this,1),this.$destroy=v}$on(t,e){if(!x(e))return v;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function et(t){let e,n,l,r,u=t[0].name+"";return{c(){e=i("button"),n=c(u),h(e,"class","btn btn-light border-dark m-1")},m(o,i){a(o,e,i),s(e,n),l||(r=f(e,"click",t[2]),l=!0)},p(t,[e]){1&e&&u!==(u=t[0].name+"")&&b(n,u)},i:v,o:v,d(t){t&&o(e),l=!1,r()}}}function nt(t,e,n){let{table:l}=e,{handleRoll:s}=e;return t.$$set=t=>{"table"in t&&n(0,l=t.table),"handleRoll"in t&&n(1,s=t.handleRoll)},[l,s,()=>s(l)]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");const lt=class extends tt{constructor(t){super(),V(this,t,nt,et,k,{table:0,handleRoll:1})}},st=["0","1","2","3","4","5","6","7","8","9"],at=new class{roll(t){let e=this.tokenize(t);return this.execute(e)}tokenize(t){let e=[],n=0;for(;n<t.length;){let s={value:t[n]};if(l=t[n],st.indexOf(l)>=0){let l=e.length>0?e[e.length-1]:{};if("digit"==l.type){l.value+=t[n++];continue}s.type="digit"}"d"==t[n]&&(s.type="die"),"+"==t[n]&&(s.type="plus"),"-"==t[n]&&(s.type="minus"),e.push(s),n++}var l;return e}execute(t){let e=Number(t[0].value),n=Number(t[2].value),l=5==t.length&&"plus"==t[3].type?Number(t[4].value):0,s=5==t.length&&"minus"==t[3].type?Number(t[4].value):0,a=0;for(;e>0;)a+=Math.floor(Math.random()*n+1),e--;return a+l-s}};let ot=({table:t,modifier:e,tables:n})=>{console.log(`Rolling ${t.roll} + ${e} on ${t.name}`);let l=at.roll(t.roll+e),s=Math.max(...t.entries.map((t=>t.max))),a=Math.min(...t.entries.map((t=>t.min)));l>s&&(l=s),l<a&&(l=a);let o=t.entries.find((t=>t.min<=l&&t.max>=l));if(!o)return void alert(`Error - rolled ${l} on table ${t.id}`);let r=o.name;o.amount&&(r=`${r} (${at.roll(o.amount)})`);let i=[{roll:l,table:t.name,description:r}];return o.tables?(o.tables.forEach((t=>{console.log(`finding table with id ${t}`);let l=n.find((e=>e.id==t));console.log(`found table: ${l.name}`),l?i=i.concat(ot({table:l,modifier:e,tables:n})):i.push({roll:0,table:null,description:`Could not find table with id ${t}`})})),i):i};const rt={rollOnTable:ot};function it(t,e,n){const l=t.slice();return l[14]=e[n],l}function ct(t,e,n){const l=t.slice();return l[17]=e[n],l}function ut(t,e,n){const l=t.slice();return l[20]=e[n],l}function dt(t){let e,n,l,r=t[20]+"";return{c(){e=i("option"),n=c(r),e.__value=l=t[20],$(e,e.__value)},m(t,l){a(t,e,l),s(e,n)},p:v,d(t){t&&o(e)}}}function ft(t){let e,n;return e=new lt({props:{table:t[17],handleRoll:t[7]}}),{c(){Z(e.$$.fragment)},m(t,l){Q(e,t,l),n=!0},p(t,n){const l={};16&n&&(l.table=t[17]),e.$set(l)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function ht(t){let e,n,l,r,u,d,f,h=t[14].roll+"",$=t[14].table+"",p=t[14].description+"";return{c(){e=i("p"),n=c("Rolled "),l=c(h),r=c(" on "),u=c($),d=c(": "),f=c(p),m(e,"white-space","pre-wrap")},m(t,o){a(t,e,o),s(e,n),s(e,l),s(e,r),s(e,u),s(e,d),s(e,f)},p(t,e){8&e&&h!==(h=t[14].roll+"")&&b(l,h),8&e&&$!==($=t[14].table+"")&&b(u,$),8&e&&p!==(p=t[14].description+"")&&b(f,p)},d(t){t&&o(e)}}}function bt(t){let e,n,l,d,m,g,v,y,w,x,k,C,T,S,E,M,N,A,L,R,j,q,D,J,P,z,W,F,G,Z,Q,X,V,Y=K(t[5]),tt=[];for(let e=0;e<Y.length;e+=1)tt[e]=dt(ut(t,Y,e));let et=K(t[4]),nt=[];for(let e=0;e<et.length;e+=1)nt[e]=ft(ct(t,et,e));const lt=t=>U(nt[t],1,1,(()=>{nt[t]=null}));let st=K(t[3]),at=[];for(let e=0;e<st.length;e+=1)at[e]=ht(it(t,st,e));return{c(){e=i("div"),n=i("div"),l=i("div"),d=i("div"),m=i("div"),g=i("div"),v=i("div"),y=i("div"),w=i("button"),w.textContent="↓",x=u(),k=i("button"),C=c(t[2]),T=u(),S=i("button"),S.textContent="↑",E=u(),M=i("button"),M.textContent="reset",N=u(),A=i("input"),L=u(),R=i("select"),j=i("option");for(let t=0;t<tt.length;t+=1)tt[t].c();q=u(),D=i("div"),J=i("div"),P=i("div"),z=i("div");for(let t=0;t<nt.length;t+=1)nt[t].c();W=u(),F=i("div"),G=i("div"),Z=i("div");for(let t=0;t<at.length;t+=1)at[t].c();h(w,"class","btn btn-light border-dark"),h(k,"class","btn btn-dark border-dark"),h(S,"class","btn btn-light border-dark"),h(y,"class","btn-group m-1"),h(M,"class","btn btn-light border-dark m-1"),h(v,"class","d-flex"),h(A,"class","form-control"),h(A,"placeholder","filter"),j.__value="",$(j,j.__value),h(R,"class","form-control"),void 0===t[1]&&O((()=>t[13].call(R))),h(g,"class","card-body"),h(m,"class","card"),h(d,"class","col"),h(l,"class","row"),h(z,"class","card-body"),h(P,"class","card"),h(J,"class","col"),h(D,"class","row"),h(n,"class","col-md-6"),h(Z,"class","card-body"),h(G,"class","card"),h(F,"class","col"),h(e,"class","row")},m(o,r){a(o,e,r),s(e,n),s(n,l),s(l,d),s(d,m),s(m,g),s(g,v),s(v,y),s(y,w),s(y,x),s(y,k),s(k,C),s(y,T),s(y,S),s(v,E),s(v,M),s(g,N),s(g,A),$(A,t[0]),s(g,L),s(g,R),s(R,j);for(let t=0;t<tt.length;t+=1)tt[t]&&tt[t].m(R,null);p(R,t[1],!0),s(n,q),s(n,D),s(D,J),s(J,P),s(P,z);for(let t=0;t<nt.length;t+=1)nt[t]&&nt[t].m(z,null);s(e,W),s(e,F),s(F,G),s(G,Z);for(let t=0;t<at.length;t+=1)at[t]&&at[t].m(Z,null);Q=!0,X||(V=[f(w,"click",t[9]),f(S,"click",t[10]),f(M,"click",t[11]),f(A,"input",t[12]),f(R,"change",t[13])],X=!0)},p(t,[e]){if((!Q||4&e)&&b(C,t[2]),1&e&&A.value!==t[0]&&$(A,t[0]),32&e){let n;for(Y=K(t[5]),n=0;n<Y.length;n+=1){const l=ut(t,Y,n);tt[n]?tt[n].p(l,e):(tt[n]=dt(l),tt[n].c(),tt[n].m(R,null))}for(;n<tt.length;n+=1)tt[n].d(1);tt.length=Y.length}if(34&e&&p(R,t[1]),144&e){let n;for(et=K(t[4]),n=0;n<et.length;n+=1){const l=ct(t,et,n);nt[n]?(nt[n].p(l,e),B(nt[n],1)):(nt[n]=ft(l),nt[n].c(),B(nt[n],1),nt[n].m(z,null))}for(H(),n=et.length;n<nt.length;n+=1)lt(n);I()}if(8&e){let n;for(st=K(t[3]),n=0;n<st.length;n+=1){const l=it(t,st,n);at[n]?at[n].p(l,e):(at[n]=ht(l),at[n].c(),at[n].m(Z,null))}for(;n<at.length;n+=1)at[n].d(1);at.length=st.length}},i(t){if(!Q){for(let t=0;t<et.length;t+=1)B(nt[t]);Q=!0}},o(t){nt=nt.filter(Boolean);for(let t=0;t<nt.length;t+=1)U(nt[t]);Q=!1},d(t){t&&o(e),r(tt,t),r(nt,t),r(at,t),X=!1,_(V)}}}function $t(t,e,n){let l,{tables:s=[]}=e,a="",o="+0",r="",i=[],c=[...new Set(s.filter((t=>t.category)).map((t=>t.category)))].sort(((t,e)=>t.localeCompare(e)));function u(t){t+=Number(o),n(2,o=t<0?`${t}`:`+${t}`)}return t.$$set=t=>{"tables"in t&&n(8,s=t.tables)},t.$$.update=()=>{259&t.$$.dirty&&n(4,l=s.filter((t=>t.category)).filter((t=>!r||t.category==r)).filter((t=>!a||t.name.toLowerCase().includes(a.toLowerCase()))))},[a,r,o,i,l,c,u,function(t){n(3,i=rt.rollOnTable({table:t,modifier:o,tables:s}))},s,()=>u(-1),()=>u(1),()=>n(2,o="+0"),function(){a=this.value,n(0,a)},function(){r=g(this),n(1,r),n(5,c)}]}const mt=class extends tt{constructor(t){super(),V(this,t,$t,bt,k,{tables:8})}};function pt(t){let e,n,l,r,d,m,p;return{c(){e=i("label"),n=i("span"),l=c(t[1]),r=u(),d=i("input"),h(n,"class","collapse"),h(d,"class","form-control"),h(d,"placeholder",t[1]),h(e,"class","form-group w-100 m-0")},m(o,i){a(o,e,i),s(e,n),s(n,l),s(e,r),s(e,d),$(d,t[0]),m||(p=f(d,"input",t[2]),m=!0)},p(t,[e]){2&e&&b(l,t[1]),2&e&&h(d,"placeholder",t[1]),1&e&&d.value!==t[0]&&$(d,t[0])},i:v,o:v,d(t){t&&o(e),m=!1,p()}}}function gt(t,e,n){let{label:l}=e,{value:s}=e;return t.$$set=t=>{"label"in t&&n(1,l=t.label),"value"in t&&n(0,s=t.value)},[s,l,function(){s=this.value,n(0,s)}]}const vt=class extends tt{constructor(t){super(),V(this,t,gt,pt,k,{label:1,value:0})}};function yt(t,e,n){const l=t.slice();return l[12]=e[n],l[13]=e,l[14]=n,l}function wt(t,e,n){const l=t.slice();return l[15]=e[n],l}function _t(t){let e,n,l,c,d,b,$,m,p=K(t[0].tables),g=[];for(let e=0;e<p.length;e+=1)g[e]=kt(yt(t,p,e));return{c(){e=i("div");for(let t=0;t<g.length;t+=1)g[t].c();n=u(),l=i("div"),c=i("button"),c.textContent="Add Table",d=u(),b=i("button"),b.textContent="Remove last table",h(c,"class","btn btn-light"),h(b,"class","btn btn-danger ml-1"),h(l,"class","d-flex mt-1"),h(e,"class","ml-2 p-2 border")},m(o,r){a(o,e,r);for(let t=0;t<g.length;t+=1)g[t]&&g[t].m(e,null);s(e,n),s(e,l),s(l,c),s(l,d),s(l,b),$||(m=[f(c,"click",t[4]),f(b,"click",t[5])],$=!0)},p(t,l){if(5&l){let s;for(p=K(t[0].tables),s=0;s<p.length;s+=1){const a=yt(t,p,s);g[s]?g[s].p(a,l):(g[s]=kt(a),g[s].c(),g[s].m(e,n))}for(;s<g.length;s+=1)g[s].d(1);g.length=p.length}},d(t){t&&o(e),r(g,t),$=!1,_(m)}}}function xt(t){let e,n,l,r=t[15].name+"";return{c(){e=i("option"),n=c(r),e.__value=l=t[15].id,$(e,e.__value)},m(t,l){a(t,e,l),s(e,n)},p(t,s){4&s&&r!==(r=t[15].name+"")&&b(n,r),4&s&&l!==(l=t[15].id)&&(e.__value=l,$(e,e.__value))},d(t){t&&o(e)}}}function kt(t){let e,n,l,c,d,b,m,g=K(t[2]),v=[];for(let e=0;e<g.length;e+=1)v[e]=xt(wt(t,g,e));function y(){t[10].call(c,t[13],t[14])}return{c(){e=i("label"),n=i("span"),n.textContent="Roll on table",l=u(),c=i("select"),d=i("option");for(let t=0;t<v.length;t+=1)v[t].c();h(n,"class","collapse"),d.__value="0",$(d,d.__value),h(c,"class","form-control"),void 0===t[12]&&O(y),h(e,"class","form-group w-100 m-0")},m(o,r){a(o,e,r),s(e,n),s(e,l),s(e,c),s(c,d);for(let t=0;t<v.length;t+=1)v[t]&&v[t].m(c,null);p(c,t[12],!0),b||(m=f(c,"change",y),b=!0)},p(e,n){if(t=e,4&n){let e;for(g=K(t[2]),e=0;e<g.length;e+=1){const l=wt(t,g,e);v[e]?v[e].p(l,n):(v[e]=xt(l),v[e].c(),v[e].m(c,null))}for(;e<v.length;e+=1)v[e].d(1);v.length=g.length}5&n&&p(c,t[12])},d(t){t&&o(e),r(v,t),b=!1,m()}}}function Ct(t){let e,n,l,r,d,$,m,p,g,v,y,w,x,k,C,T,E,M,N,A,O=t[3]?"Hide tables":"Show tables";function R(e){t[6](e)}let j={label:"Minimum"};function q(e){t[7](e)}void 0!==t[0].min&&(j.value=t[0].min),n=new vt({props:j}),S.push((()=>G(n,"value",R)));let D={label:"Maximum"};function J(e){t[8](e)}void 0!==t[0].max&&(D.value=t[0].max),d=new vt({props:D}),S.push((()=>G(d,"value",q)));let P={label:"Name"};void 0!==t[0].name&&(P.value=t[0].name),p=new vt({props:P}),S.push((()=>G(p,"value",J)));let z=t[3]&&_t(t);return{c(){e=i("div"),Z(n.$$.fragment),r=u(),Z(d.$$.fragment),m=u(),Z(p.$$.fragment),v=u(),y=i("div"),w=i("button"),x=c(O),k=u(),z&&z.c(),C=u(),T=i("div"),E=i("button"),E.textContent="Delete entry",h(w,"class","text-left btn btn-light w-100"),h(E,"class","btn btn-danger"),h(E,"title","delete"),h(T,"class","d-flex"),h(e,"class","m-1 p-2 border")},m(l,o){a(l,e,o),Q(n,e,null),s(e,r),Q(d,e,null),s(e,m),Q(p,e,null),s(e,v),s(e,y),s(y,w),s(w,x),s(y,k),z&&z.m(y,null),s(e,C),s(e,T),s(T,E),M=!0,N||(A=[f(w,"click",t[9]),f(E,"click",t[11])],N=!0)},p(t,[e]){const s={};!l&&1&e&&(l=!0,s.value=t[0].min,L((()=>l=!1))),n.$set(s);const a={};!$&&1&e&&($=!0,a.value=t[0].max,L((()=>$=!1))),d.$set(a);const o={};!g&&1&e&&(g=!0,o.value=t[0].name,L((()=>g=!1))),p.$set(o),(!M||8&e)&&O!==(O=t[3]?"Hide tables":"Show tables")&&b(x,O),t[3]?z?z.p(t,e):(z=_t(t),z.c(),z.m(y,null)):z&&(z.d(1),z=null)},i(t){M||(B(n.$$.fragment,t),B(d.$$.fragment,t),B(p.$$.fragment,t),M=!0)},o(t){U(n.$$.fragment,t),U(d.$$.fragment,t),U(p.$$.fragment,t),M=!1},d(t){t&&o(e),X(n),X(d),X(p),z&&z.d(),N=!1,_(A)}}}function Tt(t,e,n){let{entry:l}=e,{deleteEntry:s}=e,{allTables:a}=e,o=!1;return t.$$set=t=>{"entry"in t&&n(0,l=t.entry),"deleteEntry"in t&&n(1,s=t.deleteEntry),"allTables"in t&&n(2,a=t.allTables)},[l,s,a,o,()=>{n(0,l.tables=[...l.tables,0],l)},()=>{n(0,l.tables=[...l.tables.slice(0,l.tables.length-1)],l)},function(e){t.$$.not_equal(l.min,e)&&(l.min=e,n(0,l))},function(e){t.$$.not_equal(l.max,e)&&(l.max=e,n(0,l))},function(e){t.$$.not_equal(l.name,e)&&(l.name=e,n(0,l))},()=>n(3,o=!o),function(t,e){t[e]=g(this),n(0,l),n(2,a)},()=>s(l)]}const St=class extends tt{constructor(t){super(),V(this,t,Tt,Ct,k,{entry:0,deleteEntry:1,allTables:2})}},Et="Changes saved successfully",Mt={saveList:"All entries will be replaced with current list. All entries will have a minimum and maximum equal to their position in the list. This action is irreversible."};function Nt(t,e,n){const l=t.slice();return l[26]=e[n],l}function At(t){let e,n,l,r,d,$,m,p,g,v,y,w,x,k,C,T,E,M,N,A,O=t[4]?"Hide entries":"Show entries";function R(e){t[15](e)}let j={label:"Display Name"};function q(e){t[16](e)}void 0!==t[0].name&&(j.value=t[0].name),n=new vt({props:j}),S.push((()=>G(n,"value",R)));let D={label:"Category"};function J(e){t[17](e)}void 0!==t[0].category&&(D.value=t[0].category),d=new vt({props:D}),S.push((()=>G(d,"value",q)));let P={label:"Roll"};void 0!==t[0].roll&&(P.value=t[0].roll),p=new vt({props:P}),S.push((()=>G(p,"value",J)));let z=t[4]&&Ot(t);return{c(){e=i("div"),Z(n.$$.fragment),r=u(),Z(d.$$.fragment),m=u(),Z(p.$$.fragment),v=u(),y=i("hr"),w=u(),x=i("button"),k=c(O),C=u(),z&&z.c(),T=u(),E=i("button"),E.textContent="Delete Table",h(x,"class","btn btn-light w-100 text-left border"),h(E,"class","btn btn-danger border"),h(e,"class","p-2 border")},m(l,o){a(l,e,o),Q(n,e,null),s(e,r),Q(d,e,null),s(e,m),Q(p,e,null),s(e,v),s(e,y),s(e,w),s(e,x),s(x,k),s(e,C),z&&z.m(e,null),s(e,T),s(e,E),M=!0,N||(A=[f(x,"click",t[18]),f(E,"click",t[24])],N=!0)},p(t,s){const a={};!l&&1&s&&(l=!0,a.value=t[0].name,L((()=>l=!1))),n.$set(a);const o={};!$&&1&s&&($=!0,o.value=t[0].category,L((()=>$=!1))),d.$set(o);const r={};!g&&1&s&&(g=!0,r.value=t[0].roll,L((()=>g=!1))),p.$set(r),(!M||16&s)&&O!==(O=t[4]?"Hide entries":"Show entries")&&b(k,O),t[4]?z?(z.p(t,s),16&s&&B(z,1)):(z=Ot(t),z.c(),B(z,1),z.m(e,T)):z&&(H(),U(z,1,1,(()=>{z=null})),I())},i(t){M||(B(n.$$.fragment,t),B(d.$$.fragment,t),B(p.$$.fragment,t),B(z),M=!0)},o(t){U(n.$$.fragment,t),U(d.$$.fragment,t),U(p.$$.fragment,t),U(z),M=!1},d(t){t&&o(e),X(n),X(d),X(p),z&&z.d(),N=!1,_(A)}}}function Ot(t){let e,n,l,r,d,b,$,m,p,g,v,y,w,x,k,C,T,S,E,M,N,A,O,L;const R=[jt,Rt,Lt],j=[];function q(t,e){return t[5]==t[8].designer?0:t[5]==t[8].list?1:t[5]==t[8].json?2:-1}return~(S=q(t))&&(E=j[S]=R[S](t)),{c(){e=i("button"),e.textContent="Add Entry",n=u(),l=i("button"),l.textContent="1 → N",r=u(),d=i("div"),b=i("button"),$=c("Designer"),p=u(),g=i("button"),v=c("List"),w=u(),x=i("button"),k=c("JSON"),T=u(),E&&E.c(),M=u(),N=i("hr"),h(e,"class","btn btn-light border"),h(l,"class","btn btn-light border"),h(b,"class",m="btn btn-light "+(t[5]==t[8].designer?"active":"")),h(g,"class",y="btn btn-light "+(t[5]==t[8].list?"active":"")),h(x,"class",C="btn btn-light "+(t[5]==t[8].json?"active":"")),h(d,"class","btn-group")},m(o,i){a(o,e,i),a(o,n,i),a(o,l,i),a(o,r,i),a(o,d,i),s(d,b),s(b,$),s(d,p),s(d,g),s(g,v),s(d,w),s(d,x),s(x,k),a(o,T,i),~S&&j[S].m(o,i),a(o,M,i),a(o,N,i),A=!0,O||(L=[f(e,"click",t[9]),f(l,"click",t[13]),f(b,"click",t[19]),f(g,"click",t[20]),f(x,"click",t[21])],O=!0)},p(t,e){(!A||32&e&&m!==(m="btn btn-light "+(t[5]==t[8].designer?"active":"")))&&h(b,"class",m),(!A||32&e&&y!==(y="btn btn-light "+(t[5]==t[8].list?"active":"")))&&h(g,"class",y),(!A||32&e&&C!==(C="btn btn-light "+(t[5]==t[8].json?"active":"")))&&h(x,"class",C);let n=S;S=q(t),S===n?~S&&j[S].p(t,e):(E&&(H(),U(j[n],1,1,(()=>{j[n]=null})),I()),~S?(E=j[S],E?E.p(t,e):(E=j[S]=R[S](t),E.c()),B(E,1),E.m(M.parentNode,M)):E=null)},i(t){A||(B(E),A=!0)},o(t){U(E),A=!1},d(t){t&&(o(e),o(n),o(l),o(r),o(d),o(T),o(M),o(N)),~S&&j[S].d(t),O=!1,_(L)}}}function Lt(t){let e,n,l,s,r;return{c(){e=i("button"),e.textContent="Save",n=u(),l=i("textarea"),h(e,"class","btn btn-light ml-1"),h(l,"tabindex","0"),h(l,"contenteditable","true"),h(l,"class","form-control w-100"),m(l,"font-family","monospace"),m(l,"font-size","small"),m(l,"height","30em"),m(l,"resize","none")},m(o,i){a(o,e,i),a(o,n,i),a(o,l,i),$(l,t[6]),s||(r=[f(e,"click",t[11]),f(l,"input",t[23])],s=!0)},p(t,e){64&e&&$(l,t[6])},i:v,o:v,d(t){t&&(o(e),o(n),o(l)),s=!1,_(r)}}}function Rt(t){let e,n,l,s,r;return{c(){e=i("button"),e.textContent="Save",n=u(),l=i("textarea"),h(e,"class","btn btn-light ml-1"),h(l,"tabindex","0"),h(l,"contenteditable","true"),h(l,"class","form-control w-100"),m(l,"font-family","monospace"),m(l,"font-size","small"),m(l,"height","30em"),m(l,"resize","none")},m(o,i){a(o,e,i),a(o,n,i),a(o,l,i),$(l,t[7]),s||(r=[f(e,"click",t[12]),f(l,"input",t[22])],s=!0)},p(t,e){128&e&&$(l,t[7])},i:v,o:v,d(t){t&&(o(e),o(n),o(l)),s=!1,_(r)}}}function jt(t){let e,n,l,r,c,d=[],f=new Map,b=K(t[0].entries);const $=t=>t[26].id;for(let e=0;e<b.length;e+=1){let n=Nt(t,b,e),l=$(n);f.set(l,d[e]=qt(l,n))}return{c(){e=i("table"),n=i("thead"),n.innerHTML="<tr><th>Item</th></tr>",l=u(),r=i("tbody");for(let t=0;t<d.length;t+=1)d[t].c();h(n,"class","collapse"),h(e,"class","table table-striped")},m(t,o){a(t,e,o),s(e,n),s(e,l),s(e,r);for(let t=0;t<d.length;t+=1)d[t]&&d[t].m(r,null);c=!0},p(t,e){1027&e&&(b=K(t[0].entries),H(),d=F(d,e,$,1,t,b,f,r,W,qt,null,Nt),I())},i(t){if(!c){for(let t=0;t<b.length;t+=1)B(d[t]);c=!0}},o(t){for(let t=0;t<d.length;t+=1)U(d[t]);c=!1},d(t){t&&o(e);for(let t=0;t<d.length;t+=1)d[t].d()}}}function qt(t,e){let n,l,r,c;return l=new St({props:{entry:e[26],deleteEntry:e[10],allTables:e[1]}}),{key:t,first:null,c(){n=i("tr"),Z(l.$$.fragment),r=u(),this.first=n},m(t,e){a(t,n,e),Q(l,n,null),s(n,r),c=!0},p(t,n){e=t;const s={};1&n&&(s.entry=e[26]),2&n&&(s.allTables=e[1]),l.$set(s)},i(t){c||(B(l.$$.fragment,t),c=!0)},o(t){U(l.$$.fragment,t),c=!1},d(t){t&&o(n),X(l)}}}function Dt(t){let e,n,l,r,d,$,m,p=t[0].name+"",g=t[3]&&At(t);return{c(){e=i("div"),n=i("button"),l=c(p),r=u(),g&&g.c(),h(n,"class","text-left btn btn-light border w-100"),h(e,"class","w-100 mb-1")},m(o,i){a(o,e,i),s(e,n),s(n,l),s(e,r),g&&g.m(e,null),d=!0,$||(m=f(n,"click",t[14]),$=!0)},p(t,[n]){(!d||1&n)&&p!==(p=t[0].name+"")&&b(l,p),t[3]?g?(g.p(t,n),8&n&&B(g,1)):(g=At(t),g.c(),B(g,1),g.m(e,null)):g&&(H(),U(g,1,1,(()=>{g=null})),I())},i(t){d||(B(g),d=!0)},o(t){U(g),d=!1},d(t){t&&o(e),g&&g.d(),$=!1,m()}}}function Jt(t,e,n){let{table:l}=e,{allTables:s}=e,{deleteTable:a}=e;const o={designer:"designer",json:"json",list:"list"};let r=!1,i=!1,c=o.designer,u=JSON.stringify(l.entries,null,2),d=l.entries.map((t=>t.name)).reduce(((t,e)=>`${t}${e}\n`),""),f=()=>{n(5,c=o.designer),n(0,l),alert(Et)};return t.$$set=t=>{"table"in t&&n(0,l=t.table),"allTables"in t&&n(1,s=t.allTables),"deleteTable"in t&&n(2,a=t.deleteTable)},[l,s,a,r,i,c,u,d,o,()=>{let t=0==l.entries.length?1:Math.max(...l.entries.map((t=>t.id)))+1,e=0==l.entries.length?1:Math.max(...l.entries.map((t=>t.max)))+1;n(0,l.entries=[{id:t,name:"",min:e,max:e,tables:[]},...l.entries],l),n(0,l)},t=>{let e=l.entries.indexOf(t);n(0,l.entries=[...l.entries.slice(0,e),...l.entries.slice(e+1,l.entries.length)],l),n(0,l)},()=>{try{let t=JSON.parse(u);t.forEach(((t,e)=>{t.min=t.min?t.min:e+1,t.max=t.max?t.max:e+1,t.name=t.name?t.name:"New entry",t.tables=t.tables?t.tables:[]})),n(0,l.entries=t,l),f()}catch(t){alert(t)}},()=>{confirm(Mt.saveList)&&(n(0,l.entries=d.split("\n").filter((t=>t)).map(((t,e)=>({min:e+1,max:e+1,name:t,tables:[]}))),l),f())},()=>{l.entries.sort(((t,e)=>t.min-e.min)),n(0,l),n(0,l)},()=>n(3,r=!r),function(e){t.$$.not_equal(l.name,e)&&(l.name=e,n(0,l))},function(e){t.$$.not_equal(l.category,e)&&(l.category=e,n(0,l))},function(e){t.$$.not_equal(l.roll,e)&&(l.roll=e,n(0,l))},()=>n(4,i=!i),()=>n(5,c=o.designer),()=>n(5,c=o.list),()=>n(5,c=o.json),function(){d=this.value,n(7,d)},function(){u=this.value,n(6,u)},()=>a(l)]}const Pt=class extends tt{constructor(t){super(),V(this,t,Jt,Dt,k,{table:0,allTables:1,deleteTable:2})}};function zt(t,e,n){const l=t.slice();return l[13]=e[n],l}function Ht(t,e,n){const l=t.slice();return l[16]=e[n],l}function It(t){let e,n,l,r=t[16]+"";return{c(){e=i("option"),n=c(r),e.__value=l=t[16],$(e,e.__value)},m(t,l){a(t,e,l),s(e,n)},p(t,s){64&s&&r!==(r=t[16]+"")&&b(n,r),64&s&&l!==(l=t[16])&&(e.__value=l,$(e,e.__value))},d(t){t&&o(e)}}}function Bt(t,e){let n,l,s;return l=new Pt({props:{table:e[13],allTables:e[0],deleteTable:e[8]}}),{key:t,first:null,c(){n=d(),Z(l.$$.fragment),this.first=n},m(t,e){a(t,n,e),Q(l,t,e),s=!0},p(t,n){e=t;const s={};32&n&&(s.table=e[13]),1&n&&(s.allTables=e[0]),l.$set(s)},i(t){s||(B(l.$$.fragment,t),s=!0)},o(t){U(l.$$.fragment,t),s=!1},d(t){t&&o(n),X(l,t)}}}function Ut(t){let e,n,l,c,d,b,m,g,v,y,w,k,C,T,E,M,N,A,R,j,q,D,J,P,z,V=[],Y=new Map;function tt(e){t[11](e)}let et={label:"Filter"};void 0!==t[4]&&(et.value=t[4]),C=new vt({props:et}),S.push((()=>G(C,"value",tt)));let nt=K(t[6]),lt=[];for(let e=0;e<nt.length;e+=1)lt[e]=It(Ht(t,nt,e));let st=K(t[5]);const at=t=>t[13].id;for(let e=0;e<st.length;e+=1){let n=zt(t,st,e),l=at(n);Y.set(l,V[e]=Bt(l,n))}return{c(){e=i("div"),n=i("button"),n.textContent="A → Z",l=u(),c=i("button"),c.textContent="Z → A",d=u(),b=i("button"),b.textContent="Add Table",m=u(),g=i("button"),g.textContent="Reset",v=u(),y=i("button"),y.textContent="Delete All",w=u(),k=i("div"),Z(C.$$.fragment),E=u(),M=i("label"),N=i("span"),N.textContent="Category filter",A=u(),R=i("select"),j=i("option");for(let t=0;t<lt.length;t+=1)lt[t].c();q=u(),D=i("div");for(let t=0;t<V.length;t+=1)V[t].c();h(n,"class","btn btn-light"),h(c,"class","btn btn-light"),h(b,"class","btn btn-light"),h(g,"class","btn btn-danger"),h(y,"class","btn btn-danger"),h(e,"class","m-2 p-2 border"),h(N,"class","collapse"),j.__value="",$(j,j.__value),h(R,"class","form-control"),void 0===t[3]&&O((()=>t[12].call(R))),h(M,"class","form-group w-100 m-0"),h(k,"class","m-2 p-2 border"),h(D,"class","p-2")},m(o,r){a(o,e,r),s(e,n),s(e,l),s(e,c),s(e,d),s(e,b),s(e,m),s(e,g),s(e,v),s(e,y),a(o,w,r),a(o,k,r),Q(C,k,null),s(k,E),s(k,M),s(M,N),s(M,A),s(M,R),s(R,j);for(let t=0;t<lt.length;t+=1)lt[t]&&lt[t].m(R,null);p(R,t[3],!0),a(o,q,r),a(o,D,r);for(let t=0;t<V.length;t+=1)V[t]&&V[t].m(D,null);J=!0,P||(z=[f(n,"click",t[9]),f(c,"click",t[10]),f(b,"click",t[7]),f(g,"click",(function(){x(t[1])&&t[1].apply(this,arguments)})),f(y,"click",(function(){x(t[2])&&t[2].apply(this,arguments)})),f(R,"change",t[12])],P=!0)},p(e,[n]){t=e;const l={};if(!T&&16&n&&(T=!0,l.value=t[4],L((()=>T=!1))),C.$set(l),64&n){let e;for(nt=K(t[6]),e=0;e<nt.length;e+=1){const l=Ht(t,nt,e);lt[e]?lt[e].p(l,n):(lt[e]=It(l),lt[e].c(),lt[e].m(R,null))}for(;e<lt.length;e+=1)lt[e].d(1);lt.length=nt.length}72&n&&p(R,t[3]),289&n&&(st=K(t[5]),H(),V=F(V,n,at,1,t,st,Y,D,W,Bt,null,zt),I())},i(t){if(!J){B(C.$$.fragment,t);for(let t=0;t<st.length;t+=1)B(V[t]);J=!0}},o(t){U(C.$$.fragment,t);for(let t=0;t<V.length;t+=1)U(V[t]);J=!1},d(t){t&&(o(e),o(w),o(k),o(q),o(D)),X(C),r(lt,t);for(let t=0;t<V.length;t+=1)V[t].d();P=!1,_(z)}}}function Kt(t,e,n){let l,s,{tables:a}=e,{reset:o}=e,{deleteAll:r}=e,i="",c="";return t.$$set=t=>{"tables"in t&&n(0,a=t.tables),"reset"in t&&n(1,o=t.reset),"deleteAll"in t&&n(2,r=t.deleteAll)},t.$$.update=()=>{1&t.$$.dirty&&n(6,l=[...new Set(a.filter((t=>t.category)).map((t=>t.category)))].sort(((t,e)=>t.localeCompare(e)))),25&t.$$.dirty&&n(5,s=a.filter((t=>!i||t.category==i)).filter((t=>!c||t.name.toLowerCase().includes(c.toLowerCase()))))},[a,o,r,i,c,s,l,()=>{let t=Math.max(...a.map((t=>t.id)))+1;n(0,a=[{id:t,name:"New Table",category:"",roll:"",entries:[]},...a])},t=>{if(!confirm(`Delete ${t.name}? This action is irreversible.`))return;let e=a.indexOf(t);n(0,a=[...a.slice(0,e),...a.slice(e+1,a.length)])},()=>{a.sort(((t,e)=>t.name.localeCompare(e.name))),n(0,a)},()=>{a.sort(((t,e)=>e.name.localeCompare(t.name))),n(0,a)},function(t){c=t,n(4,c)},function(){i=g(this),n(3,i),n(6,l),n(0,a)}]}const Wt=class extends tt{constructor(t){super(),V(this,t,Kt,Ut,k,{tables:0,reset:1,deleteAll:2})}};class Ft{constructor(t={url:""}){this.url=t.url}async get(t=""){return new Promise((e=>{let n=new XMLHttpRequest;n.open("get",`${this.url}${t}`),n.onload=()=>{n.status>299?e():e(n.response)},n.send()}))}}const Gt="knave2e-gm-tools-tables";class Zt{constructor(){this.tables=[],this.client=new Ft,this.done=!1}async loadData(){if(this.tables.length>0)return;let t=localStorage.getItem(Gt);if(t)try{return this.tables=JSON.parse(t),void(this.done=!0)}catch{alert("Could not parse stored tables, loading default tables.")}await this.reset()}async reset(){let t=await this.client.get("seed.json");this.tables=JSON.parse(t),this.done=!0}save(){localStorage.setItem(Gt,JSON.stringify(this.tables)),alert("Saved current tables")}}const Qt=new URLSearchParams(window.location.search).get("theme")??(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");function Xt(t){window.location.search=`theme=${t}`}function Vt(t){let e;return{c(){e=i("link"),h(e,"rel","stylesheet"),h(e,"href","https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"),h(e,"integrity","sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"),h(e,"crossorigin","anonymous")},m(t,n){a(t,e,n)},d(t){t&&o(e)}}}function Yt(t){let e;return{c(){e=i("link"),h(e,"rel","stylesheet"),h(e,"href","https://cdn.jsdelivr.net/gh/vinorodrigues/bootstrap-dark@0.6.1/dist/bootstrap-dark.min.css")},m(t,n){a(t,e,n)},d(t){t&&o(e)}}}function te(t){let e,n,l;return{c(){e=i("a"),e.textContent="Dark mode",h(e,"class","nav-link"),h(e,"href","#")},m(s,o){a(s,e,o),n||(l=f(e,"click",t[12]),n=!0)},d(t){t&&o(e),n=!1,l()}}}function ee(t){let e,n,l;return{c(){e=i("a"),e.textContent="Light mode",h(e,"class","nav-link"),h(e,"href","#")},m(s,o){a(s,e,o),n||(l=f(e,"click",t[11]),n=!0)},d(t){t&&o(e),n=!1,l()}}}function ne(t){let e,n,l;function s(e){t[14](e)}let a={reset:t[3],deleteAll:t[4]};return void 0!==t[1].tables&&(a.tables=t[1].tables),e=new Wt({props:a}),S.push((()=>G(e,"tables",s))),{c(){Z(e.$$.fragment)},m(t,n){Q(e,t,n),l=!0},p(t,l){const s={};!n&&2&l&&(n=!0,s.tables=t[1].tables,L((()=>n=!1))),e.$set(s)},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){X(e,t)}}}function le(t){let e,n,l,r,c,d,f,b;function $(e){t[13](e)}let m={};return void 0!==t[1].tables&&(m.tables=t[1].tables),d=new mt({props:m}),S.push((()=>G(d,"tables",$))),{c(){e=i("div"),n=i("div"),n.innerHTML='<div class="col"><h1>Table Roller</h1></div>',l=u(),r=i("hr"),c=u(),Z(d.$$.fragment),h(n,"class","row"),h(e,"class","p-2")},m(t,o){a(t,e,o),s(e,n),s(e,l),s(e,r),s(e,c),Q(d,e,null),b=!0},p(t,e){const n={};!f&&2&e&&(f=!0,n.tables=t[1].tables,L((()=>f=!1))),d.$set(n)},i(t){b||(B(d.$$.fragment,t),b=!0)},o(t){U(d.$$.fragment,t),b=!1},d(t){t&&o(e),X(d)}}}function se(t){let e;return{c(){e=c("Loading table data...")},m(t,n){a(t,e,n)},p:v,i:v,o:v,d(t){t&&o(e)}}}function ae(t){let e,n,l,r,c,b,$,m,p,g,v,y,w,x,k,C,T,S,E,M,N,A,O,L,R,j,q,D,J,P,z,K,W,F,G,Z,Q,X=("dark"==Qt?Yt:Vt)(t),V=("dark"==Qt?ee:te)(t);const Y=[se,le,ne],tt=[];function et(t,e){return t[1]&&t[1].done?"tables"==t[0]?1:"manager"==t[0]?2:-1:0}return~(W=et(t))&&(F=tt[W]=Y[W](t)),{c(){e=i("link"),X.c(),n=d(),l=u(),r=i("main"),c=i("nav"),b=i("a"),b.textContent="Knave 2e GM Tools",$=u(),m=i("button"),m.innerHTML='<span class="navbar-toggler-icon"></span>',p=u(),g=i("div"),v=i("ul"),y=i("li"),w=i("a"),w.textContent="Table Roller",k=u(),C=i("li"),T=i("a"),T.textContent="Table Manager",E=u(),M=i("li"),N=i("a"),N.textContent="Import Tables",A=u(),O=i("li"),L=i("a"),L.textContent="Export Tables",R=u(),j=i("li"),q=i("a"),q.textContent="Save Tables",D=u(),J=i("ul"),P=i("li"),V.c(),K=u(),F&&F.c(),h(e,"rel","stylesheet"),h(e,"href","global.css"),h(b,"class","navbar-brand"),h(b,"href","#"),h(m,"class","navbar-toggler"),h(m,"type","button"),h(m,"aria-controls","navbarSupportedContent"),h(m,"aria-expanded","false"),h(m,"aria-label","Toggle navigation"),h(w,"class","nav-link"),h(w,"href","#"),h(y,"class",x="nav-item "+("tables"==t[0]?"active":"")),h(T,"class","nav-link"),h(T,"href","#"),h(C,"class",S="nav-item "+("manager"==t[0]?"active":"")),h(N,"class","nav-link"),h(N,"href","#"),h(M,"class","nav-item"),h(L,"class","nav-link"),h(L,"href","#"),h(O,"class","nav-item"),h(q,"class","nav-link"),h(q,"href","#"),h(j,"class","nav-item"),h(v,"class","navbar-nav mr-auto"),h(P,"class","nav-item"),h(J,"class","navbar-nav ml-auto"),h(g,"class",z=(t[2]?"":"collapse")+" navbar-collapse"),h(c,"class","navbar navbar-expand-lg navbar-light bg-light"),h(r,"id","app")},m(o,i){s(document.head,e),X.m(document.head,null),s(document.head,n),a(o,l,i),a(o,r,i),s(r,c),s(c,b),s(c,$),s(c,m),s(c,p),s(c,g),s(g,v),s(v,y),s(y,w),s(v,k),s(v,C),s(C,T),s(v,E),s(v,M),s(M,N),s(v,A),s(v,O),s(O,L),s(v,R),s(v,j),s(j,q),s(g,D),s(g,J),s(J,P),V.m(P,null),s(r,K),~W&&tt[W].m(r,null),G=!0,Z||(Q=[f(m,"click",t[6]),f(w,"click",t[7]),f(T,"click",t[8]),f(N,"click",t[5]),f(L,"click",t[9]),f(q,"click",t[10])],Z=!0)},p(t,[e]){(!G||1&e&&x!==(x="nav-item "+("tables"==t[0]?"active":"")))&&h(y,"class",x),(!G||1&e&&S!==(S="nav-item "+("manager"==t[0]?"active":"")))&&h(C,"class",S),(!G||4&e&&z!==(z=(t[2]?"":"collapse")+" navbar-collapse"))&&h(g,"class",z);let n=W;W=et(t),W===n?~W&&tt[W].p(t,e):(F&&(H(),U(tt[n],1,1,(()=>{tt[n]=null})),I()),~W?(F=tt[W],F?F.p(t,e):(F=tt[W]=Y[W](t),F.c()),B(F,1),F.m(r,null)):F=null)},i(t){G||(B(F),G=!0)},o(t){U(F),G=!1},d(t){t&&(o(l),o(r)),o(e),X.d(t),o(n),V.d(),~W&&tt[W].d(),Z=!1,_(Q)}}}function oe(t,e,l){let s,a="tables",o=!1;var r;return r=async()=>{l(1,s=new Zt),await s.loadData(),l(1,s)},function(){if(!n)throw new Error("Function called outside component initialization");return n}().$$.on_mount.push(r),[a,s,o,async()=>{confirm("Reset tables and load default table set? Any unsaved changes will be lost.")&&(await s.reset(),l(1,s))},()=>{confirm("Delete all tables? Any unsaved changes will be lost.")&&(l(1,s.tables=[],s),l(1,s))},()=>{confirm("Delete existing tables?")&&l(1,s.tables=[],s),(t=>{let e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=e=>{e.target.files[0].text().then((e=>{t(JSON.parse(e))}))},e.click()})((t=>{let e=0==s.tables.length?1:Math.max(...s.tables.map((t=>t.id)))+1,n=[];t.forEach((t=>{n.push({oldId:t.id,newId:e}),t.id=e++})),n.forEach((e=>{t.reduce(((t,e)=>[...t,...e.entries]),[]).filter((t=>t.tables.includes(e.oldId))).forEach((t=>{let n=t.tables.indexOf(e.oldId);t.tables=[...t.tables.slice(0,n),...t.tables.slice(n+1,t.tables.length),e.newId]}))})),l(1,s.tables=[...s.tables,...t],s)}))},()=>l(2,o=!o),()=>l(0,a="tables"),()=>l(0,a="manager"),()=>(t=>{let e=URL.createObjectURL(new Blob([JSON.stringify(t)])),n=document.createElement("a");n.href=e,n.download="knave-tables.json",n.click()})(s.tables),()=>s.save(),()=>Xt("light"),()=>Xt("dark"),function(e){t.$$.not_equal(s.tables,e)&&(s.tables=e,l(1,s))},function(e){t.$$.not_equal(s.tables,e)&&(s.tables=e,l(1,s))}]}new class extends tt{constructor(t){super(),V(this,t,oe,ae,k,{})}}({target:document.body,props:{}})})();