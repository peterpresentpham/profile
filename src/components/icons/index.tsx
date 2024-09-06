import { SvgPropsType } from 'src/globals';

export function LogoIcon(props: SvgPropsType) {
  return (
    <svg {...props} width="18" height="18" viewBox="0 0 31 32" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 31.5608C15.469 23.0109 8.54135 16.0895 0 16.0895C8.56041 16.0895 15.5 9.13698 15.5 0.560791C15.5309 9.11068 22.4586 16.0321 31 16.0321C22.4394 16.0321 15.5 22.9846 15.5 31.5608Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function GithubIcon(props: SvgPropsType) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path
        fill="#ABB2BF"
        d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
      />
    </svg>
  );
}

export function LinkInIcon(props: SvgPropsType) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path
        fill="#ABB2BF"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
      />
    </svg>
  );
}

export function MailIcon(props: SvgPropsType) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path
        fill="#ABB2BF"
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"
      />
    </svg>
  );
}

export function MenuIcon(props: SvgPropsType) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path fill="#ffffff" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
    </svg>
  );
}

export function CloseIcon(props: SvgPropsType) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path
        fill="#ffffff"
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      />
    </svg>
  );
}
