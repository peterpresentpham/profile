'use client';

import dynamic from 'next/dynamic';
import { Fragment, lazy } from 'react';
import Banner from './banner';
import Footer from './footer';
import Header from './headers';

const BackgroundBeams = dynamic(() => import('src/components/aceternity/background-beams'), {
  ssr: false,
});
const ShootingStars = dynamic(() => import('src/components/aceternity/ShootingStars'), {
  ssr: false,
});
const Sparkles = dynamic(() => import('src/components/aceternity/sparkles'), {
  ssr: false,
});

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
