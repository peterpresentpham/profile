import Image from 'next/image';
import LeftBackwaterImg from 'public/left-backwater.png';
import CornerBackwaterImg from 'public/corner-backwater.png';

export default function AbsoluteItems() {
  return (
    <>
      <Image
        src={LeftBackwaterImg}
        alt="left-backwater"
        className="absolute top-[100px] w-[60px] h-auto"
      />
      <Image
        src={CornerBackwaterImg}
        alt="corner-backwater"
        className="absolute top-0 right-0 w-[55px] h-auto"
      />
    </>
  );
}
