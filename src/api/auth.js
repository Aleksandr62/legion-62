import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { appFireBase } from "./firebase";

const auth = getAuth();

export const get = async (url, email, password) => {
  try {
    console.log("auth-get-5", email, password);
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log("auth-get-8", user);
    const data = user
      ? { email: user.email, name: user.displayName, role: "admin" }
      : null;
    return data;
  } catch (e) {
    console.log("Error", e);
  }
};
export const post = (url) => {
  return { data: [] };
};

export const fbSignOut = async (url, email, password) => {
  try {
    const result = await signOut(auth);
    localStorage.removeItem("legionEmail");
    localStorage.removeItem("legionName");
    console.log("fbSignOut-28", result);
  } catch (e) {
    console.log("Error", e);
  }
};
