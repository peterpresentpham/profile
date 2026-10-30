/* eslint-disable */
// @ts-nocheck
import { $ } from '../shared/helpers';

export function createMusic(rt){
const {st,SPOTS,track,reduce,listen,L}=rt;
/* music: Bach by day, Satie by night. Off until the speaker is clicked; one <audio> element is loaded lazily and routed
   through Web Audio so the fades work on every browser and the speaker cone follows the real loudness */
const MUSIC={day:'/music/bach-prelude-c',night:'/music/satie-gymnopedie-1'},MUSIC_GAIN=.4;
let musicOn=false,song=null,songKey='',actx=null,gainNode=null,analyser=null,levelBuf=null,musicVol=0,level=0;
const wantSong=()=>st.t>=5&&st.t<18?'day':'night';
function setSong(k){songKey=k;song.src=`${MUSIC[k]}.${song.canPlayType('audio/ogg; codecs="opus"')?'ogg':'mp3'}`;song.play().catch(()=>{})}
function toggleMusic(){
  musicOn=!musicOn;track('room_music_toggle',{state:musicOn?'on':'off'});
  $('speaker').classList.toggle('on',musicOn);SPOTS.speaker.node.setAttribute('aria-pressed',musicOn);
  if(!musicOn)return;
  if(!song){
    song=new Audio();song.loop=true;
    try{actx=new AudioContext();const src=actx.createMediaElementSource(song);gainNode=actx.createGain();gainNode.gain.value=0;analyser=actx.createAnalyser();analyser.fftSize=256;levelBuf=new Uint8Array(analyser.fftSize);src.connect(analyser);analyser.connect(gainNode);gainNode.connect(actx.destination)}catch(e){actx=null}
  }
  if(actx&&actx.state==='suspended')actx.resume();
  if(songKey===wantSong()&&song.src)song.play().catch(()=>{});else setSong(wantSong());
}
function musicTick(dt){
  if(!song)return;
  const want=wantSong(),swap=musicOn&&want!==songKey;
  const target=musicOn&&!swap?MUSIC_GAIN:0;
  musicVol+=Math.sign(target-musicVol)*Math.min(Math.abs(target-musicVol),MUSIC_GAIN/2.5*dt);
  if(gainNode)gainNode.gain.value=musicVol;else song.volume=Math.min(1,musicVol);
  if(swap&&musicVol<.001)setSong(want);
  if(!musicOn&&musicVol<.001&&!song.paused)song.pause();
  let lv=0;
  if(analyser&&musicOn&&!song.paused){analyser.getByteTimeDomainData(levelBuf);let s=0;for(let i=0;i<levelBuf.length;i++){const v=(levelBuf[i]-128)/128;s+=v*v}lv=Math.min(1,Math.sqrt(s/levelBuf.length)*14)}
  level+=(lv-level)*Math.min(1,dt*14);
  if(!reduce){$('spkCone').style.transform=`scale(${(1+level*.13).toFixed(3)})`;$('spkBody').style.transform=`translate(${(level*.5).toFixed(2)}px,0)`}
}
listen('pagehide',()=>song&&song.pause());
const onVis=()=>{if(!song)return;if(document.hidden)song.pause();else if(musicOn)song.play().catch(()=>{})};
document.addEventListener('visibilitychange',onVis);L.push(()=>document.removeEventListener('visibilitychange',onVis));
return {toggle:toggleMusic,tick:musicTick,dispose(){if(song)song.pause();if(actx)actx.close().catch(()=>{})}};
}
