"use client"
// import { footer } from "motion/react-client";
import { Instagram } from 'lucide-react';
import { Aperture } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Atom } from 'lucide-react';
import { Ear } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Copyright } from 'lucide-react';
import { Bitcoin } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-green-950 border-t-2 border-white py-20 ">
            <div className=" mx-8 ">
                <div className=" flex justify-around pb-6 border-b border-b-green-50">
                    <div className="text-4xl font-mono font-bold text-green-50"><span className=''><Bitcoin className="inline-block size-8 mb-1"/></span>MONEYMATRIX</div>
                    <div className="invisible">
                        hello
                    </div>
                    <div className="flex justify-between pb-6">
                        <div className="invisible">
                            hello
                        </div>
                        <ul className="font-mono leading-8 text-lg">
                            <li className="pb-4 text-xl font-semibold text-green-50 opacity-90"><span className="pr-1"><Linkedin className="inline-block pb-1" /></span>LINKEDIN</li>
                            <li className="text-green-50"><button className='transition:all duration:400 hover:-translate-y-2 hover:scale-125 hover:text-green-400 hover:translate-x-2'>Vansh Dhir</button></li>
                            <li className="text-green-50 pt-2"><button className='transition:all duration:400 hover:-translate-y-2 hover:scale-125 hover:text-green-400 hover:translate-x-2'>Vibhor Kataria</button></li>
                            <li className="text-green-50 pt-2"><button className='transition:all duration:400 hover:-translate-y-2 hover:scale-125 hover:text-green-400 hover:translate-x-2'>Aditya Mishra</button></li>
                        </ul>
                        <div className="invisible">
                            hello
                        </div>
                        <ul className="font-mono leading-8 text-lg ">
                            <li className="pb-4 text-xl font-semibold text-green-50 opacity-90"><span className="pr-1"><Instagram className="inline-block pb-1" /></span>SOCIALS</li>
                            <li className="text-green-50"><button className='transition:all duration:400 hover:-translate-y-2 hover:scale-125 hover:text-green-400 hover:translate-x-2'>vansh_277</button></li>
                            <li className="text-green-50 pt-2"><button className='transition:all duration:400 hover:-translate-y-2 hover:scale-125 hover:text-green-400 hover:translate-x-2'>viberrrr</button></li>
                            <li className="text-green-50 pt-2"><button className='transition:all duration:400 hover:-translate-y-2 hover:scale-125 hover:text-green-400 hover:translate-x-2'>aditya_fatneek</button></li>
                        </ul>
                        <div className="invisible">
                            hello
                        </div>
                    </div>

                </div>
                <div className="px-8  pt-6 flex justify-between">
                    <div className=" text-l pl-2 text-green-50 font-sans">
                        LETS GET YOU INSURED
                    </div>
                    <div className="invisible">

                    </div>
                    <div className="flex gap-8 pr-44 ">
                        <Facebook color="#E8F5E9" />
                        <Aperture color="#E8F5E9" />
                        <Youtube color="#E8F5E9" />
                        <Atom color="#E8F5E9" />
                    </div>
                    <div className=" text-l text-green-50 font-sans mr-1">
                    <span className="pr-1"><Copyright className="inline-block pb-1" /></span>2025 MONEYMATRIX UI.All rights reserved.
                    </div>
                </div>


            </div>

        </footer>
    )
}
export default Footer;