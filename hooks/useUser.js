import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../firebase/client";
import { useRouter } from "next/router";

export const USERS_STATE = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const [user, setUser] = useState(USERS_STATE.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    user === USERS_STATE.NOT_LOGGED && router.push("/");
  }, [user]);
  return user;
}
