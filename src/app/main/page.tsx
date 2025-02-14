import SignOutButton from "@/app/components/buttons/signout";

export default function Page() {
    return (
        <div className="flex h-screen w-screen text-white">

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <SignOutButton />
                <h1 className="text-6xl text-green-400 font-bold">MONEY MATRIX</h1>
                <div>

                </div>
            </div>
        </div>
    );
}
