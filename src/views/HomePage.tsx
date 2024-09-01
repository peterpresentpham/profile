import ConfigProvider from 'src/context/ConfigContext';
import Footer from './footer';
import Header from './headers';
import Overview from './Overview';
import Projects from './projects';
import Skills from './skills';

export default function HomePage() {
  return (
    <ConfigProvider>
      <Header />
      <Overview />
      <Projects />
      <Skills />
      <Footer />
    </ConfigProvider>
  );
}
