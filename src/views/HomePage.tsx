import CommonContainer from 'src/components/box/CommonContainer';
import Banner from './banner';
import Certification from './certifications';
import Contact from './contact';
import Footer from './footer';
import Header from './headers';
import ContactLine from './headers/ContactLine';
import Projects from './projects';
import Skills from './skills';
import Tools from './tools';

export default function HomePage() {
  return (
    <>
      <div className="fixed top-0 w-screen">
        <CommonContainer className="relative">
          <ContactLine className="absolute h-[260px] left-[-4rem] duration-1000 z-[400] top-0 md:flex hidden" />
        </CommonContainer>
      </div>
      <Header />
      <Banner />
      <Projects className="mt-[2rem]" />
      <Tools className="mt-[2rem]" />
      <Skills className="mt-[2rem]" />
      <Certification className="mt-[2rem]" />
      <Contact className="mt-[2rem]" />
      <Footer className="mt-[1rem]" />
    </>
  );
}
