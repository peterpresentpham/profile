// Shapes shared by the room modules: the mutable state, the runtime they are all given, and what each one offers the others.
import type { DayCfg, Visitor } from './world';

/** Sky brightness for the viewed moment: d daylight, g golden hour, dim how much the room darkens, hor the horizon colour */
export interface Light {
  d: number;
  g: number;
  dim: number;
  hor: string;
}
/** Top and horizon colours of the sky gradient, with daylight */
export interface Gradient {
  top: string;
  hor: string;
  d: number;
}

/** What buildView made for the day and the animation then moves; the optional parts exist only on days that have them */
export interface ViewState {
  clouds: SVGGElement[];
  sun: SVGGElement;
  moon: SVGGElement;
  moonShape: SVGGElement;
  kind: Visitor | null;
  vx: number;
  vy: number;
  /** the visitor (balloon, birds, kite, plane) */
  g?: SVGGElement;
  boat?: SVGGElement;
  bx: number;
  aur?: SVGGElement;
  met?: SVGGElement;
  ufo?: SVGGElement;
  ufoT0: number;
  ufoBeam?: SVGPolygonElement;
  ufoGlow?: SVGEllipseElement;
}

export interface RoomState {
  /** hour of the viewed moment, 0–24 */
  t: number;
  /** follows the visitor's clock until they move the slider */
  auto: boolean;
  lampOverride: boolean | null;
  ceilOverride: boolean | null;
  ceilOn: boolean;
  lampOn: boolean;
  /** how dark it is outside, 0–1 */
  dark: number;
  curDate: Date;
  S_: Light;
  GS: Gradient;
  cfg: DayCfg;
  /** moon phase 0–1 */
  phase: number;
  /** what the window view built for the day (built by view.ts, read by time, anim, outside) */
  V: ViewState;
  dragMoved: boolean;
  /** id of the object whose drawer is open or was last opened */
  curObj: string;
  photoOpen: boolean;
  photoAfter: boolean;
  outsideOpen: boolean;
  /** smallest hit area in scene units, set by the camera from the screen scale */
  hitMin?: number;
}

/** A clickable area of the room; `node` is its SVG rect once built */
export interface Spot {
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  html?: string | null;
  lamp?: boolean;
  ceil?: boolean;
  game?: boolean;
  cat?: boolean;
  music?: boolean;
  node?: SVGRectElement;
}

/** An object that wiggles or hops when clicked (toys.ts); the fields after `p` are filled in as it is built */
export interface Toy {
  id: string;
  sel: string;
  label: string;
  fx: 'wig' | 'hop' | 'rock' | 'bounce' | 'pull' | 'outside' | 'photo';
  p: string;
  top?: number;
  fixed?: number[];
  node?: Element | null;
  wrap?: SVGGElement;
  rect?: SVGRectElement;
  box?: number[];
}

export interface Api {
  time: { apply(): void; setDate(d: Date): void; drawClock(now: number): void };
  toys: { place(): void };
  game: { build: () => void; jump(): void; idle(): number; tick(dt: number): void };
  cat: {
    peek(): void;
    pet(): void;
    setTarget(x: number): void;
    start(): void;
    move(dt: number): void;
    dispose(): void;
  };
  ui: {
    say(msg: string): void;
    isOpen(): boolean;
    close(): void;
    activate(id: string): void;
    showWelcome(): void;
  };
  outside: { open(toy: Toy): void; close(): void };
  music: { toggle(): void; tick(dt: number): void; dispose(): void };
  anim: { moveClouds(dt: number): void; parallax(): void; mouse: { x: number; y: number } };
  camera: { fit(): void };
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export interface Rt {
  root: HTMLElement;
  st: RoomState;
  SPOTS: Record<string, Spot>;
  track(event: string, p?: Record<string, unknown>): void;
  /** functions that undo what a module attached to the window */
  L: (() => void)[];
  timers: ReturnType<typeof setTimeout>[];
  listen<K extends keyof WindowEventMap>(type: K, fn: (e: WindowEventMap[K]) => void): void;
  reduce: boolean;
  lite: boolean;
  api: Api;
}
