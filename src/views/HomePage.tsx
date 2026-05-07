import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import BackgroundEffects from './BackgroundEffects';
import Banner from './banner';
import SectionWrapper from './SectionWrapper';
import Footer from './footer';
import Header from './headers';

const Projects = dynamic(() => import('./projects'));
const Tools = dynamic(() => import('./tools'));
const Skills = dynamic(() => import('./skills'));
const Education = dynamic(() => import('./education'));
const Certification = dynamic(() => import('./certifications'));

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <div className="relative">
        <BackgroundEffects />
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
