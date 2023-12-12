
import image from '../../../assets/image.jpeg'

const Banner = () => {
    return (
        <div className='pt-28 flex justify-evenly items-center bg-gradient-to-t from-green-400 to-lime-400  '>


            <div className='w-2/3 text-white'>
                <p className='font-medium text-lg'>Now Available For Hair</p>
                <h1 className='font-bold text-xl'>Hi I am Mansor</h1>
                <h1 className='font-extrabold text-2xl'>Junior Web Developer</h1>
            </div>



            <div className='w-1/3'>
                <img src={image} alt="" className='rounded-3xl' />
            </div>



        </div>
    );
};

export default Banner;