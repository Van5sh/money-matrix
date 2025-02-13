import {SignIn} from "@/app/firebase/auth";

export default function SignInButton(){
    return(
        <button onClick={SignIn}>
            Sign In
        </button>
    )
}