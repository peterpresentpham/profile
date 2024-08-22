import { DivProps } from 'src/globals';

export default function Picture(props: DivProps) {
  return (
    <div {...props} className={`relative bg-[#ffffff] ${props.className}`}>
      <div className="absolute h-[3px] top-0 left-[-10px] right-[-10px] bg-[#000000]" />
      <div className="absolute h-[3px] bottom-0 left-[-12px] right-[-10px] bg-[#000000]" />
      <div className="absolute w-[3px] left-0 top-[-13px] bottom-[-9px] bg-[#000000]" />
      <div className="absolute w-[3px] right-0 top-[-9px] bottom-[-8px] bg-[#000000]" />
      <div>{props.children}</div>
    </div>
  );
}
