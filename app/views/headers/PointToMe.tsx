import SmileImg from 'public/smile.svg';
import ArrowImg from 'public/arrow.svg';
import Image from 'next/image';
import { MY_NAME } from 'src/config/constance';

export default function PointToMe() {
  return (
    <div>
      <div>
        <Image src={SmileImg} alt="smile" />
        <p>{MY_NAME}</p>
      </div>
      <Image src={ArrowImg} alt="arrow" />
    </div>
  );
}
