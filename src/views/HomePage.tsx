import { Fragment, lazy } from 'react';
import BackgroundBeams from 'src/components/aceternity/background-beams';
import ShootingStars from 'src/components/aceternity/ShootingStars';
import Sparkles from 'src/components/aceternity/sparkles';
import Banner from './banner';
import Footer from './footer';
import Header from './headers';

const Projects = lazy(() => import('./projects'));
const Tools = lazy(() => import('./tools'));
const Skills = lazy(() => import('./skills'));
const Education = lazy(() => import('./education'));
const Certification = lazy(() => import('./certifications'));

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
