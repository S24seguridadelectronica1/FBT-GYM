// app/page.js
import Header from './components/Header';
import Info from './components/Info';
import Banner from './components/Banner';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Banner />
      <Info />
    </main>
  );
}
