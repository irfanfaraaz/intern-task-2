import logo1 from "../../public/logo1.svg";
import logo2 from "../../public/logo2.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex w-full pl-10 md:pl-[135px]  items-center">
            <div className="w-full flex  justify-between  mt-5 ">
                <div className="flex  gap-6">
                    <img
                        src={logo1.src}
                        width={40}
                        height={40}
                        alt="logo"
                        className="cursor-pointer"
                    />
                    <img
                        src={logo2.src}
                        width={92}
                        height={40}
                        alt="logo"
                        className="cursor-pointer"
                    />
                </div>
                <div className="flex px-10 gap-6">
                    <a href="/" className="font-semibold hover:font-bold">
                        Home
                    </a>
                    <a href="/blog" className="font-semibold hover:font-bold">
                        Blog
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
