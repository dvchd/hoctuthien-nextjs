import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // Lấy session từ server side
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Chào mừng, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      <Image
        src={session.user.image || ""}
        className="rounded-full w-20 h-20"
        alt="User Image"
      />

      <form
        action={async () => {
          "use server";
          // Viết logic SignOut ở đây nếu cần
        }}
      >
        <button className="mt-4 text-red-500">Sign Out</button>
      </form>
    </div>
  );
}
