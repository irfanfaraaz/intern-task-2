import vector1 from "../../public/vector1.svg";
import subtract from "../../public/subtract.svg";
import Union from "../../public/Union.svg";
import user1 from "../../public/user1.png";
import user2 from "../../public/user2.png";
import user3 from "../../public/user3.png";
import Rectangle1 from "../../public/Rectangle1.png";

const servicesData = [
    "Web Design",
    "UI/UX design",
    "Web3",
    "Content writing",
    "Branding",
];

const Home = () => {
    return (
        <div className="w-full px-28 flex max-md:flex-col justify-center \  ">
            <div className="w-full   mt-14 p-1">
                <div>
                    <p className=" text-black text-6xl font-semibold font-['DM Sans'] uppercase leading-[80px]">
                        Inspiring Brand <br />
                        Experiences{" "}
                    </p>
                    <p className=" text-black text-base font-normal font-['DM Sans'] leading-7">
                        Our team of experts specializes in web design &
                        Development, branding, content creation, UI/UX Design,
                        Community manage, and more.
                    </p>
                    <div className=" w-44 mt-10 px-6 py-2 flex justify-start items-center gap-2 bg-amber-200 rounded-[50px] border-2">
                        <a
                            href="/portfolio"
                            className="flex justify-start items-center gap-2"
                        >
                            <button className="">Our Portfolio</button>
                            <img src={vector1.src} alt="vector" />
                        </a>
                    </div>
                </div>
                <div className=" mt-[-37px] flex justify-end p-1">
                    <img className="w-[74px] h-[74px]" src={subtract.src} />

                    <img
                        className="mr-6 mt-6 w-[27px] h-[27px] absolute "
                        src={Union.src}
                    />
                </div>
                <div className="w-[135px] h-[55px] relative mt-20">
                    <div className="w-[55px] h-[55px] left-0 top-0 absolute justify-center items-center inline-flex">
                        <img src={user3.src} />
                        <img
                            className="left-[40px]  absolute"
                            src={user1.src}
                        />
                        <img
                            className=" left-[80px]  absolute"
                            src={user2.src}
                        />
                    </div>
                </div>
                <p className="w-96 mt-4 text-black text-xl font-normal font-['DM Sans'] leading-7">
                    A forward-thinking digital design studio delivering subtle
                    experiences.
                </p>
            </div>
            <div className="w-full mt-10  flex md:flex-col max-sm:flex-col items-center justify-center px-8 xl:px-16">
                <div className=" px-6 py-1">
                    <img width={300} height={400} src={Rectangle1.src} />
                </div>
                <div className="w-80 flex  justify-center p-2 flex-wrap gap-2 mt-7">
                    {servicesData.map((service, index) => (
                        <p
                            key={index}
                            className=" w-24 h-10 flex items-center justify-center bg-zinc-300 bg-opacity-0 rounded-[20px] border border-black text-center text-black text-[15px] font-normal font-['DM Sans'] leading-5"
                        >
                            {service}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
