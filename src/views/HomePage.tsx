import BackgroundBeams from 'src/components/aceternity/background-beams';
import ShootingStars from 'src/components/aceternity/ShootingStars';
import Sparkles from 'src/components/aceternity/sparkles';
import Banner from './banner';
import Certification from './certifications';
import Education from './education';
import Footer from './footer';
import Header from './headers';
import Projects from './projects';
import Skills from './skills';
import Tools from './tools';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="relative">
        <Sparkles />
        <ShootingStars className="h-screen" />
        <BackgroundBeams />
        <Banner />
        <Projects className="relative pt-[4rem] pb-[4rem]" />
        <Tools className="relative pt-[2rem] pb-[4rem]" />
        <Skills className="relative pt-[2rem] pb-[4rem]" />
        <Education className="relative pt-[2rem] pb-[4rem]" />
        <Certification className="relative pt-[2rem] pb-[4rem]" />
        <Footer className="relative" />
      </div>
    </>
  );
}
