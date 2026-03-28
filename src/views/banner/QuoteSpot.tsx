import Image from 'next/image';
import GlowingCard from 'src/components/GlowingCard';
import { IMAGES } from 'src/configs/images';

export default function QuoteSpot() {
  return (
    <GlowingCard className="container flex justify-center p-8! md:max-w-200!">
      <p className="text-center text-[20px] font-medium">
        {
          'People who are unable to motivate themselves must be content with mediocrity no matter how impressive their other talents'
        }
      </p>
      <div className="absolute -top-2.5 left-[5%] z-200 px-[5px]">
        <Image src={IMAGES.quote} alt="quote" className="h-5 w-auto" width={20} height={20} />
      </div>
      <div className="absolute right-[5%] -bottom-2.5 z-200 px-[5px]">
        <Image src={IMAGES.quote} alt="quote" className="h-5 w-auto" width={20} height={20} />
      </div>
    </GlowingCard>
  );
}
