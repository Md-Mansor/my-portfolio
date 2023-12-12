import { GoArrowRight } from "react-icons/go";
import icon1 from '../../../assets/linkedin-logo-png-2025.png'
import icon2 from '../../../assets/github-logo-icon-16156.png'
import { Link } from "react-router-dom";

const LinkSection = () => {
    return (
        <div>
            <h1 className="font-extrabold text-5xl text-center bg-gray-700  text-white p-5">Important Links</h1>
            <div className="lg:flex justify-center mt-20 gap-10">
                <div className="flex justify-between gap-5 first-letter: p-5 rounded items-center bg-base-100 shadow-xl">
                    <div><img src={icon2} alt="" className='w-20 h-full' /></div>
                    <div className="">
                        <h2 className="card-title">My Git Hub Page</h2>
                    </div>
                    <div className="">
                        <Link to="https://github.com/Md-Mansor" className="btn btn-outline btn-accent"><GoArrowRight /></Link>
                    </div>
                </div>
                <div className="flex justify-between items-center p-5 rounded bg-base-100 gap-5 shadow-xl">
                    <div><img src={icon1} alt="" className='w-24 h-full' /></div>
                    <div className="">
                        <h2 className="card-title">Linkedin Profile</h2>
                    </div>
                    <div className="">
                        <Link to="https://www.linkedin.com/in/md-mansor-105456283/" className="btn btn-outline btn-accent"><GoArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkSection;