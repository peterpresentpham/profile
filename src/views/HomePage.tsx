import ConfigProvider from 'src/context/ConfigContext';
import Banner from './banner';
import Certification from './certifications';
import Contact from './contact';
import Footer from './footer';
import Header from './headers';
import Projects from './projects';
import Skills from './skills';

export default function HomePage() {
  return (
    <ConfigProvider>
      <Header />
      <Banner />
      <Projects />
      <Skills />
      <Certification />
      <Contact />
      <Footer />
    </ConfigProvider>
  );
}
