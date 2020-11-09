import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";

import "./sign-in-and-sign-up.styles.sass";

export interface SignInProps {}

const SignInAndSignUpPage: React.FC<SignInProps> = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
  </div>
);

export default SignInAndSignUpPage;