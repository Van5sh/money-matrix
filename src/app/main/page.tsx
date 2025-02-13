import SignOutButton from "@/app/components/buttons/signout";

export default function Page() {
    return (
        <div className="relative h-screen w-screen text-white">
            <img
                src="/images/dollars.jpg"
                alt="Dollars"
                className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <div className="absolute top-4 right-4 z-10">
                <SignOutButton />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="text-6xl font-bold">MONEY MATRIX</h1>
                <div>

                </div>
            </div>
        </div>
    );
}
