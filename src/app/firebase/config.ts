import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
};

const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth=getAuth(app);

export {auth,app};