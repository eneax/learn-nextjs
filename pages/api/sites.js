import firebaseAdmin from '@/lib/firebase-admin';

export default async (_, res) => {
  const snapshot = await firebaseAdmin.collection('sites').get();
  const sites = [];

  snapshot.forEach(doc => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json({ sites });
};
