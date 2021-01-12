import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";

const Authentication = () => {
  const user = useContext(UserContext);

  console.log(user);

  return <div>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</div>;
};

export default Authentication;
