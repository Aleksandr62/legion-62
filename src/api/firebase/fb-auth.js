import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { appFirebase } from "./firebase";

const createUser = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;
  }
};
const signUser = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;
  }
};

export const fbAuth = {
  create: createUser,
  auth: signUser,
};
