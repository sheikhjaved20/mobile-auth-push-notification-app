import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const messaging = getMessaging(app);

export { auth, messaging, getToken, onMessage };
