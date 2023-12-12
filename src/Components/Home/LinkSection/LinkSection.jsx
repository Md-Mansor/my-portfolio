import icon1 from '../../../assets/linkedin-logo-png-2025.png'
import icon2 from '../../../assets/github-logo-icon-16156.png'

const LinkSection = () => {
    return (
        <div>
            <h1 className="font-extrabold text-5xl text-center bg-gray-700  text-white p-10">Important Links</h1>
            <div className="flex justify-center gap-10">
                <div className="flex justify-between items-center bg-base-100 shadow-xl">
                    <div><img src={icon2} alt="" className='w-20 h-full' /></div>
                    <div className="">
                        <h2 className="card-title">My Git Hub Page</h2>
                    </div>
                    <div className="">
                        <button className="btn"></button>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-base-100 shadow-xl">
                    <div><img src={icon1} alt="" className='w-20 h-full' /></div>
                    <div className="">
                        <h2 className="card-title">Linkedin Profile</h2>
                    </div>
                    <div className="">
                        <button className="btn"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkSection;