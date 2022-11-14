
import Header from './components/layout/Header';

import Footer from './components/layout/Footer';

import { menu } from './data';

import Hero from './components/ui/Hero';
import About from './components/ui/About';

function App() {



  return (
    <>
      <Header menu={menu} />

      <main>
        <Hero />

        <About />
      </main>

      <Footer menu={menu} />
    </>
  )
}

export default App
