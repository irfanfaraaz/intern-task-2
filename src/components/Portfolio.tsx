import Rectangle4 from "../../public/Rectangle4.png";
import Rectangle5 from "../../public/Rectangle5.png";
import Rectangle6 from "../../public/Rectangle6.png";
import vector1 from "../../public/vector1.svg";
import group1 from "../../public/group1.svg";

const data = [
    {
        id: 1,
        src: Rectangle4.src,
        category: "Health Care",
        type: "Application",
    },
    {
        id: 2,
        src: Rectangle5.src,
        category: "Travel & Transport",
        type: "Website",
    },
    {
        id: 3,
        src: Rectangle6.src,
        category: "Media & communication",
        type: "Website",
    },
    {
        id: 4,
        src: Rectangle4.src,
        category: "Health Care",
        type: "Application",
    },
    {
        id: 5,
        src: Rectangle5.src,
        category: "Travel & Transport",
        type: "Website",
    },
    {
        id: 6,
        src: Rectangle6.src,
        category: "Media & communication",
        type: "Website",
    },
];
const Portfolio = () => {
    return (
        <div className="w-full h-full px-28 mt-16">
            <div className="w-full flex flex-wrap justify-between  items-center gap-6">
                <p className="text-black text-4xl font-semibold font-['DM Sans'] uppercase">
                    Our <br />
                    portfolio
                </p>
                <p className="w-[42rem] text-justify text-black text-lg font-normal font-['DM Sans'] leading-relaxed">
                    At Hooman Digital, we're proud of the work we've done for
                    our clients. Our portfolio showcases some of our recent
                    projects, highlighting our expertise in web3 industry and
                    how we've helped other clients succeed.
                </p>
            </div>
            <div className="w-full flex gap-8 flex-wrap mt-10 ">
                {data.map((item) => (
                    <div key={item.id}>
                        <img width={370} height={400} src={item.src} />
                        <p className="text-black text-2xl font-medium font-['DM Sans'] uppercase mt-6">
                            {item.category}
                        </p>
                        <p className="text-black text-base font-normal font-['DM Sans'] leading-normal">
                            {item.type}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center">
                <div className=" w-48 h-12 mt-10 px-8 py-2 flex  items-center gap-2 bg-amber-200 rounded-3xl border-2">
                    <button
                        className="text-black text-base font-medium font-['DM
                Sans'] leading-tight"
                    >
                        View Projects
                    </button>
                    <a href="/portfolio">
                        <img src={vector1.src} alt="vector" />
                    </a>
                </div>
            </div>
            <div className="w-full bg-amber-200 mt-24 p-10 flex max-lg:flex-col-reverse gap-10">
                <div>
                    <p className="text-gray-900 text-[46px] font-bold font-['DM Sans'] uppercase">
                        Let’s make things happen
                    </p>
                    <p className="  text-gray-900 text-lg font-normal font-['DM Sans'] leading-7">
                        No matter what your digital needs are, we have the
                        expertise and experience to help you succeed. Explore
                        our services and portfolio to see how we can help you
                        elevate your digital presence. And when you're ready,
                        contact us to schedule a consultation with our team.
                        <br />
                    </p>
                    <div className=" w-48 h-12 mt-6 px-8 py-2 flex  items-center gap-2 rounded-3xl border border-black">
                        <button
                            className="text-black text-base font-medium font-['DM
                Sans'] leading-8"
                        >
                            Let’s Talk to us
                        </button>
                        <a href="/portfolio">
                            <img src={vector1.src} alt="vector" />
                        </a>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-48">
                        <img
                            src={group1.src}
                            alt="group"
                            height={200}
                            width={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
