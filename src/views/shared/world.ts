/* eslint-disable */
// @ts-nocheck
// Pure data and maths: the day's weather, season and moon, the sky colours through the day.
import { ymd, rng, hash, mix } from './helpers';

export const WEATHER={clear:'Clear sky',partly:'Scattered clouds',overcast:'Overcast',rain:'Rain',fog:'Fog',snow:'Snow'};
export const VIS={balloon:'a hot-air balloon drifts past',birds:'a flock of birds crosses',kite:'someone is flying a kite',plane:'a plane crosses high up'};
export function dayCfg(d){
  const date=ymd(d),r=rng(hash('day:'+date)),w=r(),m=d.getMonth()+1;
  let weather=w<.38?'clear':w<.66?'partly':w<.8?'overcast':w<.92?'rain':'fog';
  const season=m>=3&&m<=4?'spring':m>=5&&m<=8?'summer':m>=9&&m<=11?'autumn':'winter';
  if(season==='winter'&&(weather==='overcast'||weather==='rain')&&r()<.45)weather='snow';
  const vs=['balloon','birds','kite','plane',null,'balloon','birds'];
  return{date,weather,season,visitor:vs[Math.floor(r()*vs.length)],boat:r()<.55,wind:r()<.5?-1:1,rare:r()<.034?(r()<.4?'aurora':r()<.75?'meteors':'ufo'):null,seed:Math.floor(r()*1e6)};
}
export function moonPhase(d){const ms=new Date(d.getFullYear(),d.getMonth(),d.getDate(),12).getTime(),days=ms/86400000+2440587.5-2451550.1;return((days/29.530588853)%1+1)%1}
export function moonName(p){return p<.03||p>.97?'new moon':p<.22?'waxing crescent':p<.28?'first quarter':p<.47?'waxing gibbous':p<.53?'full moon':p<.72?'waning gibbous':p<.78?'last quarter':'waning crescent'}
export const PAL={spring:{mid:'#8cc070',near:'#6fae58',trees:['#5f9f4c','#f1a9c4','#7cc06a','#4f8f48'],par:'#f7b6cf'},summer:{mid:'#6aa856',near:'#4a8f45',trees:['#3f8f4a','#2f7a45','#4aa05a','#5aa84a'],par:null},
  autumn:{mid:'#b8a548',near:'#a8742f',trees:['#d9792f','#c4452d','#e8b23a','#7a8f3a'],par:'#e08a2f'},winter:{mid:'#d2dcd6',near:'#bcc9c6',trees:['#6f8a78','#5d7a6c','#8aa296','#7a8f86'],par:null}};
export function cloudPath(x,y,s){return `M${x-24*s} ${y} q${-6*s} ${-14*s} ${10*s} ${-16*s} q${6*s} ${-16*s} ${24*s} ${-8*s} q${14*s} ${-10*s} ${24*s} ${4*s} q${16*s} ${0} ${10*s} ${20*s}z`}
export const KEYS=[[0,'#05091f','#0f1a3d'],[5,'#0a1030','#2a2250'],[6.5,'#3b3a7a','#f2a36b'],[8,'#5fa0e0','#bfe3f7'],[12,'#3b8fe0','#a7d8f5'],[16,'#4a90d8','#cfe6f2'],[18.5,'#5a5aa8','#f28b5a'],[20,'#1a1e4e','#4a3470'],[21.5,'#070c26','#141f48'],[24,'#05091f','#0f1a3d']];
export function skyAt(t){for(let i=0;i<KEYS.length-1;i++){const a=KEYS[i],b=KEYS[i+1];if(t>=a[0]&&t<=b[0]){const k=(t-a[0])/(b[0]-a[0]);return[mix(a[1],b[1],k),mix(a[2],b[2],k)]}}return[KEYS[0][1],KEYS[0][2]]}
export const phaseName=t=>t<4.5?'Night':t<6?'Before dawn':t<8?'Dawn':t<11?'Morning':t<14?'Midday':t<17?'Afternoon':t<19?'Golden hour':t<21?'Evening':'Night';
