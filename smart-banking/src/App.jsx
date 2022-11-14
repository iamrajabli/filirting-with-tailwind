import Footer from './layout/Footer';
import Header from './layout/Header';

import Hero from './ui/Hero';
import Hot from './ui/Hot';
import Banner from './ui/Banner';
import Customer from './ui/Customer';
import Subscriber from './ui/Subscriber';


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