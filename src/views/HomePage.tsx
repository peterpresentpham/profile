'use client';

import { motion } from 'motion/react';
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

const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <div className="relative">
        <Sparkles />
        <ShootingStars className="h-screen" />
        <BackgroundBeams />
        <Banner />
        <SectionWrapper>
          <Projects className="relative py-16" />
        </SectionWrapper>
        <SectionWrapper>
          <Tools className="relative pt-8 pb-16" />
        </SectionWrapper>
        <SectionWrapper>
          <Skills className="relative pt-8 pb-16" />
        </SectionWrapper>
        <SectionWrapper>
          <Education className="relative pt-8 pb-16" />
        </SectionWrapper>
        <SectionWrapper>
          <Certification className="relative pt-8 pb-16" />
        </SectionWrapper>
        <Footer className="relative" />
      </div>
    </Fragment>
  );
}
