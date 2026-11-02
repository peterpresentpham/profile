/* eslint-disable */
// Small pure helpers shared by the room modules.
// The room's markup is built in one go, so an id that is asked for is always there; the type says so.
export const $=<T extends Element=HTMLElement>(id:string)=>document.getElementById(id) as unknown as T, NS='http://www.w3.org/2000/svg';
/** An element's inline style where `opacity` may be given as a number (the DOM turns it into a string). */
export const sty=<T extends HTMLElement|SVGElement=HTMLElement>(id:string)=>$<T>(id).style as unknown as Omit<CSSStyleDeclaration,'opacity'>&{opacity:string|number};
export const clamp=(x:number,a=0,b=1)=>Math.min(b,Math.max(a,x)), lerp=(a:number,b:number,k:number)=>a+(b-a)*k, ss=(a:number,b:number,x:number)=>{x=clamp((x-a)/(b-a));return x*x*(3-2*x)};
export const rgb=(h:string)=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
export const mix=(a:string,b:string,k:number)=>'#'+rgb(a).map((v,i)=>Math.round(lerp(v,rgb(b)[i],clamp(k))).toString(16).padStart(2,'0')).join('');
export function hash(s:string){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
export function rng(a:number):()=>number{return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
export function noise(seed:string):(x:number,y:number)=>number{const r=rng(hash(seed)),N=128,g=Array.from({length:N*N},()=>r());
  const at=(x:number,y:number)=>g[(y&(N-1))*N+(x&(N-1))],sm=(t:number)=>t*t*(3-2*t);
  return(x:number,y:number)=>{const xi=Math.floor(x),yi=Math.floor(y),fx=sm(x-xi),fy=sm(y-yi),a=at(xi,yi),b=at(xi+1,yi),c=at(xi,yi+1),d=at(xi+1,yi+1);return a+(b-a)*fx+(c-a)*fy+(a-b-c+d)*fx*fy}}
export function el<T extends SVGElement=SVGElement>(tag:string,attrs:Record<string,string|number>,parent?:Element|null):T{const e=document.createElementNS(NS,tag) as T;for(const k in attrs)e.setAttribute(k,String(attrs[k]));parent&&parent.appendChild(e);return e}
export const pad=(n:number)=>String(n).padStart(2,'0'), ymd=(d:Date)=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
// A full-screen overlay (Kindle scene, photo) makes the room behind it inert: no Tab stops, no clicks, hidden from screen readers.
export const freezeRoom=(on:boolean)=>{for(const id of['scene','bar','panL','panR']){const e=$(id);if(e)on?e.setAttribute('inert',''):e.removeAttribute('inert')}};
// Sets a hit area's box, grown (around its centre) to at least `m` scene units on each side so a finger or a pointer can hit it.
export const hitBox=(r:Element,x:number,y:number,w:number,h:number,m=0)=>{const nw=Math.max(w,m),nh=Math.max(h,m);r.setAttribute('x',String(x-(nw-w)/2));r.setAttribute('y',String(y-(nh-h)/2));r.setAttribute('width',String(nw));r.setAttribute('height',String(nh))};
export const nowHours=()=>{const n=new Date();return n.getHours()+n.getMinutes()/60};
