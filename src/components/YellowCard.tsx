import vector1 from "../../public/vector1.svg";
import group1 from "../../public/group1.svg";

const YellowCard = () => {
    return (
        <>
            <div className="w-full bg-amber-200 mt-24 p-6 sm:p-10 flex max-lg:flex-col-reverse mb-24 gap-10">
                <div>
                    <p className="w-full text-gray-900 text-4xl sm:text-5xl font-bold font-['DM Sans'] uppercase p-1">
                        Let’s make things happen
                    </p>
                    <p className="  text-gray-900 text-base am:text-lg font-normal font-['DM Sans'] leading-5 sm:leading-7 p-1">
                        No matter what your digital needs are, we have the
                        expertise and experience to help you succeed. Explore
                        our services and portfolio to see how we can help you
                        elevate your digital presence. And when you're ready,
                        contact us to schedule a consultation with our team.
                        <br />
                    </p>
                    <div className=" w-40 sm:w-48 h-12 mt-6 px-8 py-2 flex  items-center gap-2 rounded-3xl border border-black">
                        <a
                            href="/contact"
                            className="flex justify-start items-center gap-2"
                        >
                            <button
                                className="text-black  text-xs sm:text-base font-medium font-['DM
                Sans'] leading-4 sm:leading-8"
                            >
                                Let’s Talk to us
                            </button>
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
        </>
    );
};

export default YellowCard;
