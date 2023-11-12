import Rectangle4 from "../../public/Rectangle4.png";
import Rectangle5 from "../../public/Rectangle5.png";
import Rectangle6 from "../../public/Rectangle6.png";
import vector1 from "../../public/vector1.svg";
import YellowCard from "./YellowCard";

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
                    <a
                        href="/portfolio"
                        className="flex justify-start items-center gap-2"
                    >
                        <button
                            className="text-black text-base font-medium font-['DM
                Sans'] leading-tight"
                        >
                            View Projects
                        </button>
                        <img src={vector1.src} alt="vector" />
                    </a>
                </div>
            </div>
            <YellowCard />
        </div>
    );
};

export default Portfolio;
