import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

import Hero from './components/ui/Hero';
import Hot from './components/ui/Hot';
import Banner from './components/ui/Banner';
import Customer from './components/ui/Customer';
import Subscriber from './components/ui/Subscriber';


import { menu, customers } from './data';

const App = () => {

    return (
        <>
            <Header menu={menu} />
            <main>
                <Hero />
                <Hot />

                <Banner />
                <Customer customers={customers} />
                <Subscriber />

            </main>
            <Footer menu={menu} />
        </>
    )
}



export default App;