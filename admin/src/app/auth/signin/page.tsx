"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <button
          onClick={() => signIn("google", { callbackUrl: '/admin' })}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full mb-3"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}