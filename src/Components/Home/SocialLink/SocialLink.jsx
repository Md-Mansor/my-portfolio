import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import facebook from '../../../assets/facebook-logo-png-4.png'
import instagram from '../../../assets/instagram-icon-971.jpg'


const SocialLink = () => {
    return (
        <div>
            <h1 className="font-extrabold text-5xl text-center p-5">Follow Me</h1>
            <div className="lg:flex justify-center  gap-10 items-center">
                <div className="flex justify-between gap-5 p-5 rounded items-center bg-base-100 shadow-xl">
                    <div><img src={facebook} alt="" className='w-20 h-full' /></div>
                    <div className="">
                        <h2 className="card-title">Facebook</h2>
                    </div>
                    <div className="">
                        <Link to="" className="btn btn-outline btn-accent"><GoArrowRight /></Link>
                    </div>
                </div>
                <div className="flex justify-between gap-5 p-5 rounded items-center bg-base-100 shadow-xl">
                    <div><img src={instagram} alt="" className='w-20 h-full' /></div>
                    <div className="">
                        <h2 className="card-title">Instagram</h2>
                    </div>
                    <div className="">
                        <Link to="" className="btn btn-outline btn-accent"><GoArrowRight /></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SocialLink;