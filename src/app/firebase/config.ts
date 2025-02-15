import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCeD_3VkF4aQ2fUfRlx7yrnSkex6yd22Es",
    authDomain:"moneymatrix-e10d0.firebaseapp.com",
    projectId:"moneymatrix-e10d0",
    storageBucket:"moneymatrix-e10d0.firebasestorage.app",
    messagingSenderId:"214583048917",
    appId:"1:214583048917:web:537e67471b860e4044405c",
};
const app =initializeApp(firebaseConfig);

const auth=getAuth(app);

const user=auth.currentUser;
// sessionStorage.setItem("user", JSON.stringify(user));

export {auth,app,user};