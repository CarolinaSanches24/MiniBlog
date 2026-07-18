import { db } from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //cleanup

  const [cancelled, setCancelled] = useState(false);
  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  /**
   * @param {{
   *   displayName: string,
   *   email: string,
   *   password: string
   * }} data
   *
   *
   */

  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError("");

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      return user;
    } catch (error) {

      if (error instanceof Error) {
        console.log(error.message);
        console.log(typeof error.message);
      }

      let systemErrorMessage = "Ocorreu um erro. Tente novamente mais tarde.";

      if (error instanceof Error) {
        if (error.message.includes("auth/weak-password")) {
          systemErrorMessage = "A senha precisa conter no mínimo 6 caracteres";
        } else if (error.message.includes("auth/email-already-in-use")) {
          systemErrorMessage = "E-mail já cadastrado!";
        } else {
          systemErrorMessage = "Ocorreu um erro. Tente novamente mais tarde.";
        }
        setError(systemErrorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
  };
};
