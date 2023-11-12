import Rectangle2 from "../../public/Rectangle2.png";
import vector1 from "../../public/vector1.svg";
const About = () => {
    return (
        <div className="w-full flex max-md:flex-col-reverse items-center  mt-12 pr-10 pl-10 md:pl-[135px] justify-center  pb-32 gap-6  ">
            <div className="md:w-full p-1 ">
                <img width={400} height={400} src={Rectangle2.src} />
            </div>
            <div className="md:w-full ">
                <p className="text-black text-[46px] font-bold font-['DM Sans'] uppercase">
                    About us
                </p>
                <p className=" text-justify text-black text-lg font-normal font-['DM Sans'] leading-loose">
                    At Hooman Digital, we're more than just a team of digital
                    experts. We're a group of individuals who are passionate
                    about using our skills and expertise to help others succeed.
                    Our team is made up of designers, developers, writers,
                    marketers, and community builders, each with a unique
                    perspective and set of skills. We're committed to creating
                    digital solutions that are authentic, innovative, immersive,
                    and intuitive. Whether we're designing a new website,
                    developing a brand identity.
                </p>
                <div className=" w-[170px] mt-10 px-8 py-4 flex justify-start items-center gap-2 bg-amber-200 rounded-[50px] border-2">
                    <button className="">View More</button>
                    <a href="/services">
                        <img src={vector1.src} alt="vector" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
