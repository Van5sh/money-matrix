import Agentbox from "@/app/chat/components/agentbox";
import { MessageSquareMore } from 'lucide-react';
import Link from "next/link";

export default function Page() {
    const Agents = [
        { id: 1, name: "John Doe",email:"jane02@gmail.com", phoneno: "123-456-7890" ,company:"ABC",services:"Consultant" },
        { id: 2, name: "Jane Smith",email:"jane02@gmail.com", phoneno: "987-654-3210",company:"ABC",services: "Finance Broker" },
        { id: 3, name: "Jane Smith",email:"jane02@gmail.com", phoneno: "987-654-3210",company:"ABC",services: "Inverstment Banker" },
        { id: 4, name: "Jane Smith",email:"jane02@gmail.com", phoneno: "987-654-3210",company:"ABC",services: "Inverstment Banker" },
    ];

    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-ping-slow -top-20 -left-20"></div>
                <div className="absolute w-[300px] h-[300px] bg-cyan-400 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-pulse -bottom-10 -right-10"></div>
                {Agents.map((agent)=>{
                    return(
                        <Agentbox email={agent.email} company={agent.company} key={agent.id} id={agent.id} name={agent.name} phoneno={agent.phoneno} services={agent.services}/>
                    )
                })}
            </div>
            {/*<div className="flex justify-end gap-4 items-center"  >*/}
            {/*    <Link href="/chat/community">*/}
            {/*        <div className="group fixed bg-green-800 p-2 w-16 h-16 flex items-center justify-center rounded-full bottom-5 right-5 hover:w-[15vw] transition-all duration-400 cursor-pointer" >*/}
            {/*            <MessageSquareMore color="white" size={32} className="transition-all duration-300 group-hover:mr-32"/>*/}
            {/*            <p className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center justify-end ml-8 text-sm whitespace-nowrap ">*/}
            {/*                ASK COMMUNITY*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </>
    );
}
