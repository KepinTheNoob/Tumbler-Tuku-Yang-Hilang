import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZGIC1de6ClUhWpOcP5e86tLS-2nnDDHA",

  authDomain: "tumbler-tuku.firebaseapp.com",

  projectId: "tumbler-tuku",

  storageBucket: "tumbler-tuku.firebasestorage.app",

  messagingSenderId: "750882644506",

  appId: "1:750882644506:web:faa9c9aaf164da8dff27a3",

  measurementId: "G-NZ2WNK9KQ0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
