import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

/* 
! Info
- collection is like a table in a relational db
- {merge: true} maintains the 'uid' unique
*/
