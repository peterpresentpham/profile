/* eslint-disable */
// The valley both scenes look at: the window in the room and the Kindle scene's view of the house. One layout, two sides.
import { noise } from './helpers';
import { PAL, type DayCfg } from './world';

const nz=noise('valley-2d');
const fbm=(x:number)=>{let v=0,a=1,f=1,s=0;for(let o=0;o<4;o++){v+=nz(x*f,7)*a;s+=a;a*=.5;f*=2}return v/s};
export const rY={far:(x:number)=>150-100*(1-Math.abs(2*fbm(x*.011+3)-1)),mid:(x:number)=>206-42*fbm(x*.016+9),near:(x:number)=>262-46*fbm(x*.02+17)};
// Where the village houses and the bank trees stand, from the two random streams. Shared by the window view and the
// Kindle scene, so both show the same valley. `fr` must be fresh (valley-fixed) and `r` the day's stream (view+date).
export interface House{x:number;y:number;w:number;h:number;i:number}
export interface Tree{x:number;y:number;s:number;col:string;pine:boolean}
export function valleyLayout(c:DayCfg,r:()=>number,fr:()=>number){
  const P=PAL[c.season],village:House[]=[],trees:Tree[]=[];
  [[120,0],[138,1],[154,0],[352,1],[368,0],[388,1]].forEach(([x,v],i)=>{const y=rY.mid(x)+4,w=11+fr()*4,h=8+fr()*3;village.push({x,y,w,h,i})});
  let x=-6;while(x<490){const y=rY.near(x)+3,s=13+fr()*18,col=P.trees[Math.floor(fr()*P.trees.length)],pine=fr()<.55,skip=r()<.08;x+=10+fr()*16;if(skip)continue;trees.push({x,y,s,col,pine})}
  return {village,trees};
}
