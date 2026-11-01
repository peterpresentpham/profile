/* eslint-disable */
// @ts-nocheck
// Small pure helpers shared by the room modules.
export const $=id=>document.getElementById(id), NS='http://www.w3.org/2000/svg';
export const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)), lerp=(a,b,k)=>a+(b-a)*k, ss=(a,b,x)=>{x=clamp((x-a)/(b-a));return x*x*(3-2*x)};
export const rgb=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
export const mix=(a,b,k)=>'#'+rgb(a).map((v,i)=>Math.round(lerp(v,rgb(b)[i],clamp(k))).toString(16).padStart(2,'0')).join('');
export function hash(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
export function rng(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
export function noise(seed){const r=rng(hash(seed)),N=128,g=Array.from({length:N*N},()=>r());
  const at=(x,y)=>g[(y&(N-1))*N+(x&(N-1))],sm=t=>t*t*(3-2*t);
  return(x,y)=>{const xi=Math.floor(x),yi=Math.floor(y),fx=sm(x-xi),fy=sm(y-yi),a=at(xi,yi),b=at(xi+1,yi),c=at(xi,yi+1),d=at(xi+1,yi+1);return a+(b-a)*fx+(c-a)*fy+(a-b-c+d)*fx*fy}}
export function el(tag,attrs,parent){const e=document.createElementNS(NS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);parent&&parent.appendChild(e);return e}
export const pad=n=>String(n).padStart(2,'0'), ymd=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
// A full-screen overlay (Kindle scene, photo) makes the room behind it inert: no Tab stops, no clicks, hidden from screen readers.
export const freezeRoom=on=>{for(const id of['scene','bar','panL','panR']){const e=$(id);if(e)on?e.setAttribute('inert',''):e.removeAttribute('inert')}};
// Sets a hit area's box, grown (around its centre) to at least `m` scene units on each side so a finger or a pointer can hit it.
export const hitBox=(r,x,y,w,h,m=0)=>{const nw=Math.max(w,m),nh=Math.max(h,m);r.setAttribute('x',x-(nw-w)/2);r.setAttribute('y',y-(nh-h)/2);r.setAttribute('width',nw);r.setAttribute('height',nh)};
export const nowHours=()=>{const n=new Date();return n.getHours()+n.getMinutes()/60};
