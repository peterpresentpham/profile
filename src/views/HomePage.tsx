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
      <Banner />
      <Projects className="pt-[4rem] pb-[4rem]" />
      <Tools className="pt-[2rem] pb-[4rem]" />
      <Skills className="pt-[2rem] pb-[4rem]" />
      <Education className="pt-[2rem] pb-[4rem]" />
      <Certification className="pt-[2rem] pb-[4rem]" />
      <Footer />
    </>
  );
}
