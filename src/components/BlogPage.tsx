import Rectangle7 from "../../public/Rectangle7.png";
import Rectangle8 from "../../public/Rectangle8.png";
import YellowCard from "./YellowCard";
const BlogPage = () => {
    return (
        <div className="w-full h-full mt-16 px-28">
            <div className="w-full flex items-center gap-2">
                <p className="text-black text-sm font-normal font-['Inter'] leading-normal">
                    Hooman Digital
                </p>
                <div className="w-[5px] h-[5px] bg-black" />
                <p className="text-zinc-950 text-sm font-normal font-['Inter'] leading-normal">
                    Blog
                </p>
            </div>
            <div className="w-full mt-16">
                <p className="text-black text-5xl font-bold font-['DM Sans'] uppercase">
                    Digital Publishing Online
                </p>
                <p className=" text-black text-xl font-normal font-['DM Sans'] capitalize leading-[30px] mt-5 ">
                    Discover the most amazing articles that are popular right
                    now on technologies that can improve your way of thinking
                    and innovation!Discover the most amazing articles that are
                    popular right now on technologies of thinking and
                    innovation!
                </p>
                <img
                    className="mt-16 "
                    height={420}
                    width={1170}
                    src={Rectangle7.src}
                />
                <div className="w-full flex justify-between mt-10">
                    <p className="text-black text-xl font-bold font-['DM Sans'] leading-[30px]">
                        DEVELOPMENT
                    </p>
                    <p className="text-black text-xl font-normal font-['DM Sans'] leading-[30px]">
                        23 September 2023
                    </p>
                </div>
                <p className="text-black text-3xl mt-4 font-bold font-['DM Sans'] leading-loose">
                    8 Rules of Thumb in UI Design
                </p>
                <p className=" text-black text-xl font-normal font-['DM Sans'] leading-[30px]">
                    Keep it simple: Simplicity is key in UI design. Strive for
                    clean and uncluttered interfaces that are easy to understand
                    and navigate. Avoid overwhelming users with too many options
                    or information. Consistency is key: Consistent design
                    elements and patterns across the interface enhance user
                    familiarity and make it easier for users to learn and
                    navigate the system. Maintain consistent use of colors,
                    typography, icons, and layout throughout the interface.
                    <br />
                    <br />
                    Provide feedback and affordance: Users should receive clear
                    feedback when they interact with UI elements. Visual cues,
                    such as hover effects or button states, can help users
                    understand the system's response to their actions.
                    Additionally, elements should have clear affordance, meaning
                    they should visually communicate their functionality.
                    Prioritize readability: Ensure that text is legible and easy
                    to read. Choose appropriate font sizes, contrast, and
                    spacing to enhance readability. Consider different device
                    sizes and viewing conditions to accommodate various user
                    needs.
                </p>
                <div className="w-full flex justify-between gap-7 mt-24">
                    <div className=" ">
                        <img width={570} height={360} src={Rectangle8.src} />
                        <div className="w-full flex justify-start gap-2 mt-7">
                            <p className="w-[88px] text-black text-xs font-bold font-['DM Sans'] leading-[18px]">
                                DEVELOPMENT
                            </p>
                            <p className="w-[120px] text-black text-xs font-normal font-['DM Sans'] leading-[18px]">
                                23 September 2023
                            </p>
                        </div>
                    </div>
                    <div className=" ">
                        <img width={570} height={360} src={Rectangle8.src} />
                        <div className="w-full flex justify-start gap-2 mt-7">
                            <p className="w-[88px] text-black text-xs font-bold font-['DM Sans'] leading-[18px]">
                                DEVELOPMENT
                            </p>
                            <p className="w-[120px] text-black text-xs font-normal font-['DM Sans'] leading-[18px]">
                                23 September 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <YellowCard />
        </div>
    );
};

export default BlogPage;
