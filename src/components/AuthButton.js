import React, { useState, useEffect } from 'react';
import { auth, provider, signInWrapper } from '../firebase/auth.js';
import { signOut } from "firebase/auth";

export default function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return (
      <SignOutButton handler={handleClick}></SignOutButton>
    );
  } else {
    return (
      <SignInButton handler={handleClick}></SignInButton>
    );
  }
}

function SignInButton(props) {
  return (
    <button className="btn btn-primary" onClick={props.handler}>Sign in with Google</button>
  );
}

function SignOutButton(props) {
  return (
    <button className="btn btn-primary" onClick={props.handler}>Sign Out</button>
  );
}

function handleClick() {

  var user = auth.currentUser;

  if (user) {
    console.log(user.displayName)
    signOut(auth).then(() => {
      console.log("signed out uwu ;-;")
    }).catch((error) => {
      console.log(error);
    })
  } else {
    signInWrapper();
  }
}