import { initializeApp, getApps } from "firebase/app";
import { getFirebaseConfig } from "./getFirebaseConfig";

export const initApp = () => {
  if (!getApps().length) initializeApp(getFirebaseConfig());
};
