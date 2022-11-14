import { AiFillFire, AiOutlineBank } from 'react-icons/ai';

const Hot = () => {
    return (
        <section className='py-14'>
            <div className="container flex gap-7 lg:flex-col">
                <div className='w-1/4 flex flex-col items-center lg:w-full text-center'>
                    <h1 className='text-3xl font-bold '>
                        <div className='flex gap-3 lg:justify-center'>
                            <span>Hot</span>
                            {<AiFillFire />}
                        </div>
                        deals for you
                    </h1>
                    <p className='text-secondaryText mt-4 md:w-1/2'>
                        Online shopping for retail sales direct to consumers
                    </p>
                </div>
                <div className='w-1/4 flex flex-col items-center lg:w-full text-center'>
                    <AiOutlineBank size={30} />
                    <h1 className='my-4 font-bold text-xl'>1.5% cashback</h1>
                    <p className='text-secondaryText  md:w-1/2'>Online shopping for retail sales direct to consumers</p>
                </div>
                <div className='w-1/4 flex flex-col items-center lg:w-full text-center'>
                    <AiOutlineBank size={30} />
                    <h1 className='my-4 font-bold text-xl'>30-day terms</h1>
                    <p className='text-secondaryText  md:w-1/2'>Online shopping for retail sales direct to consumers</p>
                </div>
                <div className='w-1/4 flex flex-col items-center lg:w-full text-center'>
                    <AiOutlineBank size={30} />
                    <h1 className='my-4 font-bold text-xl'>Save Money</h1>
                    <p className='text-secondaryText  md:w-1/2'>Online shopping for retail sales direct to consumers</p>
                </div>
            </div>
        </section>
    );
};

export default Hot;