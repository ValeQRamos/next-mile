import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkSE3ql0preBIat1DmYOjLr-2JztwB7ZQ",
  authDomain: "next-mile-b9b38.firebaseapp.com",
  projectId: "next-mile-b9b38",
  storageBucket: "next-mile-b9b38.appspot.com",
  messagingSenderId: "755824624249",
  appId: "1:755824624249:web:3a32f214fc7a7bf0820aa8",
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
