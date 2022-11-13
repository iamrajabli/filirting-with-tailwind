import about from './assets/about.jpg';

import Header from './Header';

import Footer from './Footer';

function App() {


  const menu = [
    {
      name: 'About',
      link: '#',
    },
    {
      name: 'Services',
      link: '#',
    },
    {
      name: 'Case Studies',
      link: '#',
    },
    {
      name: 'Careers',
      link: '#',
    },
    {
      name: 'Blog',
      link: '#',
    },
  ];

  return (
    <>
      <Header menu={menu} />

      <main>
        <section id="hero">
          <div className="container">
            <h1 className='pt-24 lg:pt-16 md:pt-12 sm:pt-10 font-black text-5xl lg:text-4xl md:text-3xl sm:text-2xl max-w-2xl md:max-w-full text-center mx-auto leading-snug'>
              Grow your business online.
              Get. More. Leads.
            </h1>
            <p className='text-xl md:text-lg sm:text-base tracking-tight text-center max-w-xl mx-auto mt-[18px] md:mt-4 sm:mt-2'>
              Wanna get serious into digital marketing? Then you need leads and this is where we can help you.
            </p>

            <div className='flex sm:flex-col justify-center gap-7'>

              <a
                href="#"
                className='btn sm:mt-4 tracking-tight'>
                Start Here.
              </a>

              <a
                href="#"
                className='inline-block mt-6 sm:mt-4 py-[10px] px-8 rounded-2xl text-lightred text-xl  sm:text-base tracking-tight border-[2px] border-lightred sm:text-center'>
                Learn More
              </a>

            </div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="flex justify-between mt-40 pb-32 lg:flex-col lg:mt-32 lg:pb-24">

              <div className="flex flex-col w-1/2 lg:w-full">
                <div className='text-darkred font-bold text-xl tracking-tight'>about us</div>
                <h2 className='mt-[2px] text-4xl font-black lg:text-3xl sm:text-2xl'>The team behind the brand.</h2>
                <p className='mt-3 max-w-sm text-lg lg:max-w-full sm:text-base'>Proin elementum fermentum auctor. Nulla semper, est eget congue pellentesque, erat nulla molestie mi, in finibus leo nisl ac lectus. Praesent non urna. Nulla congue porta lectus in laoreet. Aenean pellentesque vitae metus id porttitor.t</p>

                <a href="#" className='btn max-w-fit sm:max-w-full'>Learn More</a>
              </div>

              <div className="flex flex-col w-[450px] lg:w-full lg:mt-6">
                <img src={about} alt="about" className='w-full' />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer menu={menu} />
    </>
  )
}

export default App
