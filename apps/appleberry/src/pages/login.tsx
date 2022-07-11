import React from "react";
import {
  signInWithPopup,
  signOut,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const auth = getAuth();

const Login = () => {
  const loginWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
      const idToken = await user.getIdToken();
      const formData = new FormData();
      formData.append("idToken", idToken);
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });
      console.log(user, idToken, response);
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={loginWithGoogle}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
