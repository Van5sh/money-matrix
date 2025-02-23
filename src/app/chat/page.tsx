import Agentbox from "@/app/chat/components/agentbox";

const Page = () => {
    const users = [
        { id: 1, name: "Alice Johnson", phone: "9876543210" },
        { id: 2, name: "Bob Smith", phone: "8765432109" },
        { id: 3, name: "Charlie Brown", phone: "7654321098" },
        { id: 4, name: "David Williams", phone: "6543210987" },
        { id: 5, name: "Eva Davis", phone: "5432109876" },
        { id: 6, name: "Frank Miller", phone: "4321098765" }
    ];
    return(
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-gray-50">
            {
                users.map((user)=>{
                    return(
                        <Agentbox key={user.id} id={user.id} name={user.name} phoneno={user.phone}/>
                    )
                })
            }
        </div>
    )
}

export default Page;