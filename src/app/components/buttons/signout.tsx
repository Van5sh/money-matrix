import {SignOut} from "@/app/firebase/auth";

export default function SignOutButton(){
    return(
        <button onClick={
            SignOut
        } className="border-2 p-6 rounded-full">
            SignOut
        </button>
    )
}