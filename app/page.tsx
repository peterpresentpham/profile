import AbsoluteItems from './views/absolute-items';
import Header from './views/headers';
import Overview from './views/overview';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fefff0] relative">
      <Header />
      <Overview className="mt-[5rem]" />
      <AbsoluteItems />
    </main>
  );
}
