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
      <Projects className="mt-[2rem]" />
      <Tools className="mt-[2rem]" />
      <Skills className="mt-[2rem]" />
      <Certification className="mt-[2rem]" />
      <Footer className="mt-[1rem]" />
    </>
  );
}
