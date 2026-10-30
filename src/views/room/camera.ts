/* eslint-disable */
// @ts-nocheck
import { $, clamp } from '../shared/helpers';

// Fills the screen with the room; on narrow screens the room is panned by dragging.
export function createCamera(rt){
const {st,listen}=rt;
let vw=innerWidth,vh=innerHeight,S=1,panX=520;const CY=372;
function fit(){vw=innerWidth;vh=innerHeight;const sFit=Math.min(vw/1200,(vh-70)/760);S=Math.max(sFit,vh/820);
  const W=vw/S,H=vh/S,narrow=W<1200,sc=$('scene'),M=40;
  if(narrow){
    // the whole room is laid out once; dragging only slides it with a GPU transform (no repaint)
    panX=clamp(panX,W/2,1200-W/2);
    sc.setAttribute('viewBox',`${-M} ${CY-H/2} ${1200+2*M} ${H}`);
    sc.style.cssText=`width:${(1200+2*M)*S}px;height:${vh}px;right:auto;will-change:transform`;placePan();
  }else{
    sc.setAttribute('viewBox',`${600-W/2} ${CY-H/2} ${W} ${H}`);sc.style.cssText='';
  }
  sc.setAttribute('preserveAspectRatio','none');
  $('panhint').style.display=narrow?'block':'none'}
function placePan(){$('scene').style.transform=`translate3d(${(-(panX-vw/S/2+40)*S).toFixed(1)}px,0,0)`}
listen('resize',fit);fit();
let down=false,sx=0,sy=0,lx=0;
$('scene').addEventListener('pointerdown',e=>{down=true;st.dragMoved=false;sx=lx=e.clientX;sy=e.clientY});
listen('pointermove',e=>{if(e.pointerType!=='touch'){const mouse=rt.api.anim.mouse;mouse.x=e.clientX/innerWidth-.5;mouse.y=e.clientY/innerHeight-.5}if(!down)return;
  if(!st.dragMoved&&Math.hypot(e.clientX-sx,e.clientY-sy)>6){st.dragMoved=true;$('scene').classList.add('drag');$('panhint').style.opacity=0}
  if(st.dragMoved&&vw/S<1200){const W=vw/S;panX=clamp(panX-(e.clientX-lx)/S,W/2,1200-W/2);placePan()}lx=e.clientX});
listen('pointerup',()=>{down=false;$('scene').classList.remove('drag');setTimeout(()=>st.dragMoved=false,0)});
// a click anywhere outside the drawer closes it (hotspots keep opening their own panel; a pan drag doesn't count)
listen('click',e=>{if(!rt.api.ui.isOpen()||Math.hypot(e.clientX-sx,e.clientY-sy)>6)return;if(e.target.closest&&e.target.closest('#panel,.hot,#bar,#welcome'))return;rt.api.ui.close()});
return {fit};
}
