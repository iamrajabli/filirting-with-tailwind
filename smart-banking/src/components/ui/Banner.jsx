const Banner = () => {
    return (
        <section id="banner" className='bg-secondaryBg'>
            <div className="container flex justify-around lg:flex-col">
                <div className='w-1/2 p-20 flex flex-col items-center lg:w-full lg:p-10'>
                    <div>
                        <h1 className='text-3xl font-medium'> We Building </h1>
                        <h1 className='text-3xl font-medium'> Social uniqueness</h1>
                    </div>
                    <p className='w-64 text-primaryText font-medium leading-6 mt-4'>
                        The marketing strategy lays out target markets and the value.
                    </p>
                </div>
                <div className='w-1/2 p-20 flex flex-col items-center lg:w-full lg:p-10'>
                    <div>
                        <h1 className='text-3xl font-medium'> Social Media </h1>
                        <h1 className='text-3xl font-medium'> beyond probability</h1>
                    </div>
                    <p className='w-64 text-primaryText font-medium leading-6 mt-4'>
                        Essentially a formula for how a business is going to compete.
                    </p>
                </div>
            </div>
        </section>

    );
};

export default Banner;