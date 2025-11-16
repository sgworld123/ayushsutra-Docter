import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json' with { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://shastraapp-2a999.firebaseio.com'
});

const db = admin.firestore();
console.log('Firebase Admin initialized');
export default db;