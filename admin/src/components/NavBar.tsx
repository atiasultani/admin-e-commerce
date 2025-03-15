"use client"; // ✅ Ensures it's treated as a Client Component

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        My E-Commerce
      </Link>

      <div className="flex gap-4 items-center">
        <Link href="/products" className="hover:text-gray-400">
          Products
        </Link>
        {session ? (
          <>
            <Link href="/dashboard" className="hover:text-gray-400">
              Dashboard
            </Link>
            <span className="text-sm">{session.user?.email}</span>
            <button
              onClick={() => signOut()}
              className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
            >
              Sign out
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  )
}

