
import card from '../../assets/card.png';
import g1 from '../../assets/g1.png';
import g2 from '../../assets/g2.png';

const Customer = ({ customers }) => {
    return (
        <section id="customer" className='bg-primaryBg py-10'>
            <div className="container">
                <div className='text-center flex flex-col items-center'>
                    <h1 className='text-[80px] font-bold lg:text-4xl'>1000+ Customer</h1>
                    <p className='w-1/2 text-primaryText mt-4 leading-7 lg:w-full lg:p-10'>Analyze any Business or Creator account—including your competitors—to find the imagery, visuals, and captions that drive audience engagement. Get social calendars planned faster and spend less time testing content strategies.</p>
                </div>

                <div className='flex my-28 lg:flex-col lg:gap-10 lg:my-14'>
                    {customers.map(({ title, num }) => (
                        <div key={title} className='w-1/4 text-center lg:w-full'>
                            <h1 className='text-primaryText text-xl mb-3 tracking-widest'>{title}</h1>
                            <p className='text-2xl font-bold'>{num}</p>
                        </div>
                    ))}
                </div>


                <div className='flex justify-between gap-10'>
                    <div className='w-1/2 h-[507px] lg:hidden'>
                        <img src={card} className='h-full object-cover' alt="card" />
                    </div>
                    <div className='w-1/2 lg:w-full lg:px-10'>
                        <div className='text-center lg:flex lg:flex-col lg:items-center'>
                            <h1 className='text-5xl font-semibold sm:text-2xl'>
                                Handoff your work smarter now
                            </h1>
                            <p className='w-96 leading-7 text-primaryText my-5 lg:w-full'>
                                Create documentation for the collaborators (i.e. designers or devs) directly in your design file.
                            </p>
                        </div>

                        <div className='flex gap-5 mt-8 lg:flex-col lg:items-center'>
                            <div className='w-16 h-16 rounded-[40px] bg-white flex justify-center items-center'>
                                <img src={g1} alt="g1" />
                            </div>
                            <div className='lg:flex lg:flex-col lg:items-center'>
                                <h4 className='text-xl font-semibold mb-3'>
                                    Strategic
                                </h4>
                                <p className='w-96 leading-7 text-primaryText lg:text-center md:px-12'>
                                    Suggests that the component spacing
                                    between cards and elements.
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-5 mt-8 lg:flex-col lg:items-center'>
                            <div className='w-16 h-16 rounded-[40px] bg-white flex justify-center items-center'>
                                <img src={g2} alt="g2" />
                            </div>
                            <div className='lg:flex lg:flex-col lg:items-center'>
                                <h4 className='text-xl font-semibold mb-3'>
                                    Work  schedule
                                </h4>
                                <p className='w-96 leading-7 text-primaryText  lg:text-center md:px-12'>
                                    Work  schedule that the component spacing
                                    between cards and elements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Customer;