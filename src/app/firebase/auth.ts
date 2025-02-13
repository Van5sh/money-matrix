import {auth} from "../firebase/config"
import { signInWithRedirect , GoogleAuthProvider,signOut } from "firebase/auth";

export async function SignIn(){
    try{
        const provider=new GoogleAuthProvider();
        signInWithRedirect(auth,provider);
    }catch (err){
        console.log(err)
    }
}

export async function SignOut(){
    signOut(auth).then(()=>{
        return;
    }).catch((error)=>{
       console.log(error);
    });
}