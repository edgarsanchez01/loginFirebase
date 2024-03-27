import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAo3OoBOwe0RM0ZaS8Pwz5ECYQ-0O2Wc6M",
  authDomain: "loginreact-d8336.firebaseapp.com",
  projectId: "loginreact-d8336",
  storageBucket: "loginreact-d8336.appspot.com",
  messagingSenderId: "527169495030",
  appId: "1:527169495030:web:92a7549c3fa003eaa831d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth}