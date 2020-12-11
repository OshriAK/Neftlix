import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB7XQLUJaUmepSVeNa-8J_UaMkF4Hth-W8',
  authDomain: 'neftlix-3cb81.firebaseapp.com',
  projectId: 'neftlix-3cb81',
  storageBucket: 'neftlix-3cb81.appspot.com',
  messagingSenderId: '800426027550',
  appId: '1:800426027550:web:739ee2fdabfdf611169c0f',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
