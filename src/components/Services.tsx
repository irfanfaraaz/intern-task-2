import React from "react";
import vector2 from "../../public/vector2.svg";
import Rectangle3 from "../../public/Rectangle3.png";
import vector3 from "../../public/vector3.svg";

const servicesData = [
    { id: "01", title: "UI/UX design" },
    { id: "02", title: "Website Development" },
    { id: "03", title: "Content writing" },
    { id: "04", title: "BRANDING" },
    { id: "05", title: "Partnerships" },
    { id: "06", title: "Community manage" },
];

const Services = () => {
    return (
        <>
            <div className="w-full h-28 flex justify-end px-64 absolute -mt-[54px] pb-4">
                <img src={vector2.src} className="w-28 h-28" alt="vector" />
            </div>
            <div className="pl-10 md:pl-[135px] w-full  flex flex-col bg-black justify-center text-white pt-16 sm:pt-20">
                <div className="w-full flex max-md:flex-col sm:justify-between justify-start  p-1">
                    <p className="w-full text-white text-5xl font-bold font-['DM Sans'] uppercase">
                        We Provide
                        <br />
                        Services
                    </p>
                    <p className="text-justify text-white text-lg font-normal font-['DM Sans'] leading-relaxed max-md:pr-10 md:px-10 max-md:mt-8">
                        At Hooman Digital, we offer a range of services to help
                        you achieve your digital goals. Our services include: At
                        Hooman Digital, we offer a range of services to help you
                        achieve your digital goals. Our services include:
                    </p>
                </div>
                <div className="w-full  flex max-md:flex-col  items-center justify-center   mt-10 max-md:gap-6 gap-2">
                    <div className="md:w-full p-2  ">
                        <img
                            width={400}
                            height={570}
                            src={Rectangle3.src}
                            alt="Rectangle"
                        />
                    </div>
                    <div className="w-full px-20 flex flex-col justify-start items-center  gap-6">
                        {servicesData.map((service) => (
                            <>
                                <div
                                    key={service.id}
                                    className="w-full h-[1px] bg-white "
                                ></div>
                                <div
                                    key={service.id}
                                    className="w-full flex justify-between items-center  gap-2"
                                >
                                    <p className=" text-amber-200 text-2xl font-normal font-['DM Sans'] uppercase leading-10">
                                        {service.id}
                                    </p>
                                    <p className="text-white text-2xl font-normal font-['DM Sans'] uppercase">
                                        {service.title}
                                    </p>
                                    <img src={vector3.src} alt="vector" />
                                </div>
                            </>
                        ))}
                        <div className="w-full h-[1px] bg-white "></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
