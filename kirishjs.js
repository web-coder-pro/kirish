
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv9lk4gceOKaef8YdGHdWaOt1Lx1U-FIk",
  authDomain: "proexem-6381a.firebaseapp.com",
  projectId: "proexem-6381a",
  storageBucket: "proexem-6381a.firebasestorage.app",
  messagingSenderId: "591009159276",
  appId: "1:591009159276:web:dea631e11141150cf06049",
  measurementId: "G-LE53LDLQKQ"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);