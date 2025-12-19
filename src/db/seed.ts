import { db } from "./index";
import { user } from "./schema";

async function main() {
  console.log("Seed start...");

  // Xóa trắng bảng user trước khi seed (tránh lỗi trùng ID khi chạy lại)
  await db.delete(user);

  await db.insert(user).values({
    id: "test-user-id",
    name: "Admin Test",
    email: "admin@test.com",
    emailVerified: true,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  console.log("Seed done!");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
