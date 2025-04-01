import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface TeamMemberProps {
    image: string;
    name: string;
    profileLink: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, profileLink }) => {
    return (
        <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 group mb-8 2xl:h-[50vh] 2xl:w-[55vw] ">
            <div className="w-full h-full rounded-full relative overflow-hidden">
                <img
                    src={image}
                    className="absolute inset-0 border-4 border-green-500 opacity-90 transition-all duration-700 group-hover:opacity-85 object-cover w-full h-full rounded-full"
                    alt={name}
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 backdrop-blur-sm text-xl md:text-2xl lg:text-3xl group-hover:hidden text-center bg-green-900 bg-opacity-70">
                    <div className="font-bebas text-white font-bold tracking-wider">{name}</div>
                </div>
            </div>

            <div className="rounded-full hidden duration-700 ease-in-out absolute inset-0 group-hover:flex justify-center items-center group-hover:backdrop-blur-sm text-2xl md:text-3xl lg:text-4xl">
                <button className="ease-in-out duration-300 hover:scale-125 hover:text-green-300">
                    <a href={profileLink}>LINK</a>
                </button>
            </div>
        </div>
    );
};

const AboutSection: React.FC = () => {
    const [showContent, setShowContent] = useState<boolean>(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="duration-500 bg-black text-white overflow-hidden"
            onClick={() => setShowContent(!showContent)}
        >
            <AnimatePresence mode="popLayout">
                {!showContent ? (
                    <motion.div
                        key="about-image"
                        initial={{ x: "-100%" }}
                        animate={{ x: "0" }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.5 }}
                        className="relative flex items-center justify-center overflow-hidden group transition-opacity duration-500"
                    >
                        <img
                            src="/images/ab.avif"
                            alt="Dollars"
                            className="w-full opacity-35 max-h-[75vh] duration-500 group-hover:scale-125 group-hover:opacity-[98%]"
                        />
                        <h1 className="absolute text-4xl md:text-6xl lg:text-8xl font-anton transition-all duration-500 group-hover:scale-125 group-hover:text-green-200 tracking-wider text-center px-4">
                            WE ARE MONEYMATRIX
                        </h1>
                    </motion.div>
                ) : (
                    <motion.div
                        key="about-content"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                        className="relative min-h-[75vh] p-6 bg-black text-white overflow-hidden"
                    >
                        <img
                            src="/images/ourpicbg.avif"
                            className="absolute inset-0 w-full h-full object-cover opacity-25 backdrop-blur-lg"
                            alt="Background"
                        />

                        <div className="absolute inset-0 flex flex-col items-center w-full">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 font-mono py-4 z-10 2xl:pb-16">
                                ABOUT US
                            </h2>

                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-14 mb-2 p-4 w-full max-w-7xl mx-auto justify-center items-center">
                                <TeamMember
                                    image="images/vanshdhir.jpg"
                                    name="VANSH DHIR"
                                    profileLink="https://github.com/Aditya150422"
                                />

                                {/* Team Member 2 */}
                                <TeamMember
                                    image="images/Aditya1.jpg"
                                    name="ADITYA MISHRA"
                                    profileLink="https://github.com/Aditya150422"
                                />

                                {/* Team Member 3 */}
                                <TeamMember
                                    image="images/vibhor.jpg"
                                    name="VIBHOR KATARIA"
                                    profileLink=""
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default AboutSection;