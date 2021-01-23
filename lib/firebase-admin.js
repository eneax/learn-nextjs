/*
  We need Firebase on the server to use SSG methods like 'getStaticProps' and `getStaticPaths`. 
  Those run with Node.js and that code is never shipped to the browser.
  That's why we need 'firebase-admin'
*/

import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
  });
}

export default admin.firestore();
