import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";


const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;