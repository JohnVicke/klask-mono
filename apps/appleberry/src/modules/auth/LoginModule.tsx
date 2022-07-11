import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { CloseIcon } from "../../icons/CloseIcon";

const auth = getAuth();

const LoginModule = () => {
  const continueWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
      const idToken = await user.getIdToken();
      const body = new FormData();
      body.append("idToken", idToken);
      await fetch("/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p className="pt-2">
        Continue by signing in via Google. Currently only{" "}
        <span className="text-primary">Cygni</span> employees have access to
        participate in the leaderboard
      </p>
      <button
        type="button"
        className="btn btn-primary mt-6 mx-auto"
        onClick={continueWithGoogle}
      >
        continue with google
      </button>
    </div>
  );
};

interface LoginModalProps {
  open: boolean;
  close: () => void;
}

export const LoginModal = ({ open, close }: LoginModalProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        className="absolute overflow-hidden top-0 h-[calc(100vh-64px)] left-0 mt-16 w-screen bg-[rgba(0,0,0,.3)]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="flex justify-center mt-40  w-full"
          onClick={event => event.preventDefault()}
        >
          <div className="max-w-md w-full h-auto bg-neutral rounded-md px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Continue with Google</h1>
              <button
                type="button"
                onClick={close}
                className="btn btn-ghost btn-circle"
              >
                <CloseIcon />
              </button>
            </div>
            <LoginModule />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export const LoginPage = () => <LoginModule />;
