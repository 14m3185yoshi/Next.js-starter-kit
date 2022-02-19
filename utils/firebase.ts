import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }
export const firebaseApp = initializeApp(config);
export const auth = getAuth();

export type FirestoreDocumentData = firebase.firestore.DocumentData;
export type FirestoreQuerySnapshot = firebase.firestore.QuerySnapshot;
export type FirestoreTimestamp = firebase.firestore.Timestamp;
export type FirestoreDB = firebase.firestore.Firestore;

export const db = getFirestore(firebaseApp);

// export const firebaseApp = firebase;
// export const fieldValue = firebase.firestore.FieldValue;
// export const firestoreTimestamp = firebaseApp.firestore.FieldValue.serverTimestamp();
