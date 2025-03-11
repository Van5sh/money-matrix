import Agentbox from "@/app/chat/components/agentbox";
import { MessageSquareMore } from 'lucide-react';

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
                {Agents.map((agent)=>{
                    return(
                        <Agentbox email={agent.email} company={agent.company} key={agent.id} id={agent.id} name={agent.name} phoneno={agent.phoneno} services={agent.services}/>
                    )
                })}
            </div>
            <div className="flex justify-end gap-4">
                <div className="group relative bg-green-800 p-5 w-22 justify-end flex items-end rounded-full bottom-5 right-5 hover:w-[20vw]">
                    <MessageSquareMore color="white" size={38}/>
                </div>
            </div>
            <div className="group relative w-32 h-32 bg-blue-500 rounded-lg transition-all duration-300 hover:w-48 hover:h-48 flex items-center justify-center">
                <p className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    Hovered Text Appears!
                </p>
            </div>
        </>
    );
}
