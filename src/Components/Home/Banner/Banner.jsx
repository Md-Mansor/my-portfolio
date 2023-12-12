import image from '../../../assets/image.jpeg'

const Banner = () => {
    return (
        <div className='pt-28 min-h-screen justify-evenly flex items-center bg-gradient-to-t from-green-400 to-lime-400  '>


            <div className=' text-white grid grid-flow-row gap-10 '>
                <p className='font-medium text-4xl pb-10  '>Currently Available For <br /><span className='bg-gradient-to-r from-pink-400 via-blue-400 to-sky-400'> HIRE </span></p>
                <h1 className='font-bold text-5xl'>Hi I am Mansor</h1>
                <h1 className='font-extrabold text-7xl'>Junior Web Developer</h1>

            </div>

            <div className=''>
                <img src={image} alt="" className='rounded-3xl w-96' />
            </div>

        </div>
    );
};

export default Banner;