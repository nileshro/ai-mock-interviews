// File: app/(auth)/sign-in/page.tsx

import React from "react";
import AuthForm from "@/components/AuthForm"; // ✅ Correct import path

const SignInPage = () => {
  return <AuthForm type="sign-in" />;
};

export default SignInPage;
