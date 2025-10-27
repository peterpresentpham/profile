import Image from 'next/image';
import QuoteImg from 'public/quote.svg';
import GlowingEffect from 'src/components/aceternity/glowing-effect';

export default function QuoteSpot() {
  return (
    <div className="relative container mx-auto flex justify-center border border-gray-100 p-8 md:max-w-200">
      <GlowingEffect />
      <p className="text-center text-[20px] font-medium">
        {
          'People who are unable to motivate themselves must be content with mediocrity no matter how impressive their other talents'
        }
      </p>
      <div className="absolute -top-2.5 left-[5%] z-200 px-[5px]">
        <Image src={QuoteImg} alt="quote" className="h-5 w-auto" />
      </div>
      <div className="absolute right-[5%] -bottom-2.5 z-200 px-[5px]">
        <Image src={QuoteImg} alt="quote" className="h-5 w-auto" />
      </div>
    </div>
  );
}
