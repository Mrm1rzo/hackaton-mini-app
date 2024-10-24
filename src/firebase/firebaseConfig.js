import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBh1awCWMeaP9qd4xBEyNLNG13zPoDmB3c",
  authDomain: "busgo-ff374.firebaseapp.com",
  projectId: "busgo-ff374",
  storageBucket: "busgo-ff374.appspot.com",
  messagingSenderId: "381617757345",
  appId: "1:381617757345:web:91977b6f493d614893a4e0",
  measurementId: "G-KZG072QB3N",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
