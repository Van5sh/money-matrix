import SignOutButton from "@/app/components/buttons/signout";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-800 text-white">
            <h1 className="text-6xl">Main Page</h1>
            <p className="text-2xl">This is the main page</p>
            <SignOutButton/>
        </div>
    );
}
