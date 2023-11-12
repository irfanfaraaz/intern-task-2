import { useState } from "react";
import logo1 from "../../public/logo1.svg";
import logo2 from "../../public/logo2.svg";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

// interface Props {
//     title: string;
//     classProps: string;
// }
// const NavbarItems = ({ title, classProps }: Props) => {
//     return <li className={`mx-4 cursor-pointer ${classProps}`}></li>;
// };

const Navbar = () => {
    const [toogleMenu, setToogleMenu] = useState(false);
    const handleClick = () => {
        setToogleMenu(!toogleMenu);
        console.log(toogleMenu);
    };

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
                <div className=" flex relative pr-7">
                    {toogleMenu ? (
                        <AiOutlineClose
                            fontSize={28}
                            className=" cursor-pointer"
                            onClick={() => {
                                handleClick();
                            }}
                        />
                    ) : (
                        <HiMenuAlt4
                            fontSize={28}
                            className="cursor-pointer"
                            onClick={() => {
                                handleClick();
                            }}
                        />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
