import SignInButton from "@/app/components/buttons/singin";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LoginBoxProps {
    setUserExist: (exists: boolean) => void;
}

const LoginBox: React.FC<LoginBoxProps> = ({ setUserExist }) => {
    return (
        <Card className="relative p-6 w-full max-w-lg border-green-900 border-8 bg-green-900 bg-opacity-70 rounded-lg shadow-lg">
            <CardTitle className="text-3xl text-white font-bold text-center mb-4">WELCOME</CardTitle>
            <CardTitle className="text-xl text-white font-bold text-center mb-4">LOGIN</CardTitle>
            <CardContent className="flex flex-col space-y-4">
                <label htmlFor="name" className="text-green-500 font-medium">
                    Name/Email:
                    <input
                        id="name"
                        type="text"
                        className="w-full bg-gray-200 text-black border-2 border-green-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your name or email"
                    />
                </label>

                <label htmlFor="password" className="text-green-500 font-medium">
                    Password:
                    <input
                        id="password"
                        type="password"
                        className="w-full bg-gray-200 text-black border-2 border-green-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your password"
                    />
                </label>

                <div className="flex flex-col justify-center items-center space-y-2">
                    <Button onClick={() => setUserExist(false)}>CREATE ACCOUNT</Button>
                    <SignInButton />
                </div>
            </CardContent>
        </Card>
    );
};

export default LoginBox;
