import Image from 'next/image';
import CornerBackwaterImg from 'public/backwater/corner-backwater.png';
import LeftBackwaterImg from 'public/backwater/left-backwater.png';

export default function AbsoluteItems() {
  return (
    <>
      <Image
        src={LeftBackwaterImg}
        alt="left-backwater"
        className="absolute top-[70px] w-[60px] h-auto"
      />
      <Image
        src={CornerBackwaterImg}
        alt="corner-backwater"
        className="absolute top-0 right-0 w-[55px] h-auto"
      />
    </>
  );
}
