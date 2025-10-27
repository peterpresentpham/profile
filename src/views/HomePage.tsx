import { Fragment } from 'react';
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
    <Fragment>
      <Header />
      <div className="relative">
        <Sparkles />
        <ShootingStars className="h-screen" />
        <BackgroundBeams />
        <Banner />
        <Projects className="relative py-16" />
        <Tools className="relative pt-8 pb-16" />
        <Skills className="relative pt-8 pb-16" />
        <Education className="relative pt-8 pb-16" />
        <Certification className="relative pt-8 pb-16" />
        <Footer className="relative" />
      </div>
    </Fragment>
  );
}
