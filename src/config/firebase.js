import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCeTdso3z3ylxRrFgV6WX15I_eX1hkmqqM",
  authDomain: "mobileapp-es74a.firebaseapp.com",
  projectId: "mobileapp-es74a",
  storageBucket: "mobileapp-es74a.firebasestorage.app",
  messagingSenderId: "1076060763968",
  appId: "1:1076060763968:web:ceba869cd6dcd1169beca5"
};

const app = initializeApp(firebaseConfig);
const auth_mod = getAuth(app);

export default app;
export { auth_mod};
