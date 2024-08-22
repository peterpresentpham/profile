import Image from 'next/image';
import SmileImg from 'public/backwater/backwater-smile.png';
import PencilImg from 'public/pencil.png';
import CommonContainer from 'src/components/box/CommonContainer';
import Picture from 'src/components/picture';
import { DivProps } from 'src/globals';

export default function Overview(props: DivProps) {
  return (
    <CommonContainer {...props}>
      <div className="grid grid-cols-2">
        <div>
          <Image src={SmileImg} alt="smile" />
          <div className="flex">
            <p>{'I am '}</p>
            <Image src={PencilImg} alt="pencil" />
            <p>{' a developer'}</p>
          </div>
        </div>
        <div>
          <Picture className="mt-[3rem] w-[20px] h-[20px]">123</Picture>
        </div>
      </div>
    </CommonContainer>
  );
}
