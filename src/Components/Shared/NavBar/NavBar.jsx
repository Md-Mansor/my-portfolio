import { FaBars } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const navItem = <>
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='about'><li><a>About</a></li></NavLink>
        <NavLink to='skill'><li><a>Skill</a></li></NavLink>
    </>
    return (
        <div className="bg-gradient-to-r fixed z-50 from-slate-950  via-black via-20% to-slate-950 opacity-90 p-5  w-screen  text-white h-28 ">
            <div className="flex justify-between lg:justify-evenly items-center">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-lg lg:hidden">
                            <FaBars />
                        </div>
                        <ul tabIndex={0} className="text-black dropdown-content mt-3 z-[1] p-2 shadow bg-lime-300 rounded-lg w-52 font-medium text-xl">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/'><a className="btn btn-ghost text-2xl">My Portfolio </a></Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal text-2xl font-semibold px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="">
                    <Link to='contact'> <a className="btn bg-lime-400 text-xl font-semibold "><span className="hidden lg:block">Let's Talk </span><span><BsArrowRight />
                    </span></a></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;