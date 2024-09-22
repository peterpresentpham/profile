import Banner from './banner';
import Certification from './certifications';
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
      <Projects className="pb-[4rem] pt-[4rem]" />
      <Tools className="pb-[4rem] pt-[2rem]" />
      <Skills className="pb-[4rem] pt-[2rem]" />
      <Certification className="pb-[4rem] pt-[2rem]" />
      <Footer />
    </>
  );
}
