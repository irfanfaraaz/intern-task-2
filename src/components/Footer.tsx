import logo1 from "../../public/logo1.svg";
import logo2 from "../../public/logo2.svg";
import icon1 from "../../public/icon1.svg";
import icon2 from "../../public/icon2.svg";
import icon3 from "../../public/icon3.svg";
import icon4 from "../../public/icon4.svg";
import group2 from "../../public/group2.svg";
const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer>
            <div className="w-full flex flex-wrap justify-between px-5 sm:px-16 md:px-28 mt-40 gap-6">
                <div className="">
                    <div className="flex gap-2">
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

                    <p className="w-[291px] h-[124px] text-black text-opacity-90 text-lg font-normal font-['DM Sans'] leading-[30px] mt-10">
                        At Hooman Digital, we're more than just a team of
                        digital experts. We're a group of individuals.
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-black text-sm font-normal font-['DM Sans']">
                    <p className="text-base font-bold">Company</p>
                    <p>Hire Team</p>
                    <p>Jobs</p>
                    <p>Brochure</p>
                    <p>FAQs</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                </div>
                <div className="flex flex-col gap-2 text-black text-sm font-normal font-['DM Sans'] ">
                    <p className="text-base font-bold">Services</p>
                    <p>UI/UX design</p>
                    <p>Web Development</p>
                    <p>Content writing</p>
                    <p>Partnerships</p>
                    <p>Community management</p>
                </div>
                <div className="flex flex-col gap-2 text-black text-sm font-normal font-['DM Sans'] ">
                    <p className="text-base font-bold">Start a Conversation</p>
                    <div className="flex gap-2 items-center">
                        <img src={icon1.src} alt="" />
                        <p>Hooman Digital</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={icon2.src} alt="" />
                        <p>hello@hoomandigital.com</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={icon3.src} alt="" />
                        <p>+91 123-456-0124</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={icon4.src} alt="" />
                        <p>+91 123-456-0124</p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-zinc-400 h-0.5 mt-10"></div>
            <div className="w-full h-16 flex flex-wrap justify-between items-center  px-28 ">
                <p className="text-black text-base font-normal font-['DM Sans']">
                    Copyright © {year}. All Rights Reserved.
                </p>
                <img src={group2.src} alt="" />
            </div>
        </footer>
    );
};

export default Footer;
