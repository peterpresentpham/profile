// The Kindle scene's HUD: the scene itself is drawn into #outSvg when it opens (see scene.ts).
export const OUTSIDE_HTML =
  '<div id="outside" aria-hidden="true" role="dialog" aria-label="Outside the house"><svg id="outSvg" viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice"></svg><button id="outHome" type="button" aria-label="Go back inside" data-l="Go back inside"></button><div id="outHot"></div><label id="outTime"><span id="outClock"></span><input id="outSlider" type="range" min="0" max="24" step="0.05" aria-label="Time of day"></label><p id="outCap"></p></div>';
