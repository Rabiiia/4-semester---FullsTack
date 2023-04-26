import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Admin(props:{ children: JSX.Element })  {
  const { state } = useContext(UserContext);

  if (state.user && state.user.roles.includes("admin")) {
    return <div>{props.children}</div>;
  }

  return null;
};


