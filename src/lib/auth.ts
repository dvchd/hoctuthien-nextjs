// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins"; // Import plugin admin
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  // Thêm vào mảng plugins
  plugins: [admin()],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});
