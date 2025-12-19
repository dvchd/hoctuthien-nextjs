"use client";
import { authClient } from "@/lib/auth-client";

export default function LoginButton() {
  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard", // Sau khi login xong thì đi đâu
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-white text-black border px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition"
    >
      Sign in with Google
    </button>
  );
}
