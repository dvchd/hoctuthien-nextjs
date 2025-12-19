import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema"; // Import tất cả các bảng bạn đã định nghĩa

/**
 * 1. Khởi tạo Client LibSQL
 * LibSQL là driver tốt nhất cho SQLite hiện nay (tương thích hoàn toàn với Turso)
 */
const client = createClient({
  // Lấy URL từ file .env. Nếu không có, mặc định dùng file local.db
  url: process.env.DATABASE_URL ?? "file:local.db",

  // Nếu bạn dùng Turso (Cloud SQLite), bạn sẽ cần Auth Token
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

/**
 * 2. Khởi tạo thực thể DB của Drizzle
 * Chúng ta truyền 'schema' vào để sử dụng tính năng "Relational Queries"
 * (ví dụ: db.query.user.findFirst...) cực kỳ mạnh mẽ và type-safe.
 */
export const db = drizzle(client, { schema });

// Export thêm client nếu bạn cần đóng kết nối thủ công trong một số trường hợp script
export { client };
