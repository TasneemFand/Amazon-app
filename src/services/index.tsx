import StartFireBase from './fireBaseConfig/index';
import { ref, onValue } from 'firebase/database';
import { category, item } from '../types/index';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';

const db = StartFireBase().db;
const auth = StartFireBase().auth;

export const createUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};
export const getCategories = async () => {
  const dbRef = ref(db, 'categories');
  const records: Array<category> = [];
  await onValue(dbRef, (snapshot) => {
    snapshot.forEach((child) => {
      const data = child.val();
      records.push(data);
    });
  });

  return records;
};

export const getItems = async () => {
  const dbRef = ref(db, 'items');
  const records: Array<item> = [];
  await onValue(dbRef, (snapshot) => {
    snapshot.forEach((child) => {
      const data = child.val();
      records.push(data);
    });
  });

  return records;
};

export const getItem = async (name: string) => {
  const dbRef = ref(db, 'items');
  let record: item;
  await onValue(dbRef, (snapshot) => {
    snapshot.forEach((child) => {
      const data = child.val();
      if (data.name === name) {
        record = data;
      }
    });
  });
  return record;
};

export const getCategoryItem = async (name: string) => {
  const dbRef = ref(db, 'categories');
  const records: Array<item> = [];
  await onValue(dbRef, (snapshot) => {
    snapshot.forEach((child) => {
      const data = child.val();
      if (data.name === name) {
        data.items.forEach(async (item) => {
          const item1 = await getItem(item.name);
          const Item = { ...item, ...item1 };
          records.push(Item);
        });
      }
    });
  });
  return records;
};
