import Agentbox from "@/app/chat/components/agentbox";
import Image from "next/image";

export default function Page() {
    const Agents = [
        { id: 1, name: "John Doe",email:"jane02@gmail.com", phoneno: "123-456-7890" ,company:"ABC",services:"Consultant" },
        { id: 2, name: "Jane Smith",email:"jane02@gmail.com", phoneno: "987-654-3210",company:"ABC",services: "Finance Broker" },
        { id: 3, name: "Jane Smith",email:"jane02@gmail.com", phoneno: "987-654-3210",company:"ABC",services: "Inverstment Banker" },
        { id: 4, name: "Jane Smith",email:"jane02@gmail.com", phoneno: "987-654-3210",company:"ABC",services: "Inverstment Banker" },
    ];

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            {Agents.map((agent)=>{
                return(
                    <Agentbox email={agent.email} company={agent.company} key={agent.id} id={agent.id} name={agent.name} phoneno={agent.phoneno} services={agent.services}/>
                )
            })}
        </div>
    );
}
