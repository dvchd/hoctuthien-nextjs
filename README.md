# 🌟 Hoctuthien - Fullstack Next.js 16 Starter

Dự án sử dụng bộ công nghệ hiện đại nhất (God Stack 2025) để xây dựng ứng dụng Fullstack với tốc độ phát triển cực nhanh, bảo mật và hiệu năng cao.

## 🚀 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Auth:** [Better Auth](https://www.better-auth.com/) (Google Login + Admin Plugin)
- **Database ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database Engine:** [LibSQL / SQLite](https://turso.tech/libsql)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Optimization:** [React Compiler](https://react.dev/learn/react-compiler)
- **Code Quality:** Prettier (Space 2) & ESLint

---

## 🛠️ Cài đặt ban đầu

### 1. Clone dự án và cài đặt thư viện

```bash
git clone <your-repo-url>
cd hoctuthien
npm install
```

### 2. Cấu hình biến môi trường

Tạo file `.env` từ file `.env.example` và điền các thông số:

```env
DATABASE_URL="file:local.db"
BETTER_AUTH_SECRET="your_secret_here"
BETTER_AUTH_URL="http://localhost:3000"

GOOGLE_CLIENT_ID="xxx.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="GOCSPX-xxx"
```

### 3. Khởi tạo Database & Auth

Đây là bước quan trọng nhất để đồng bộ Schema:

```bash
# 1. Tạo Schema cho Better Auth
npm run auth:gen

# 2. Đẩy cấu hình Schema vào file database local.db
npm run db:push

# 3. Tạo dữ liệu mẫu (Admin test)
npm run db:seed
```

---

## 📖 Các câu lệnh quan trọng (Scripts)

| Lệnh                | Mô tả                                                    |
| :------------------ | :------------------------------------------------------- |
| `npm run dev`       | Chạy ứng dụng ở chế độ Development                       |
| `npm run auth:gen`  | Cập nhật schema Auth khi thay đổi config trong `auth.ts` |
| `npm run db:push`   | Đồng bộ Schema Drizzle trực tiếp vào Database            |
| `npm run db:studio` | Mở giao diện Web để xem/sửa dữ liệu Database             |
| `npm run db:seed`   | Chèn dữ liệu mẫu vào Database                            |
| `npm run format`    | Tự động định dạng toàn bộ code về Space 2                |
| `npm run lint`      | Kiểm tra lỗi logic bằng ESLint                           |

---

## 🏗️ Cấu trúc thư mục (Project Structure)

- `src/app`: Routes, Pages và Server Components.
- `src/components`: Các UI components dùng chung.
- `src/db`: Toàn bộ cấu hình Database.
  - `schema/`: Chứa các định nghĩa bảng (Auth, Business).
  - `index.ts`: Kết nối Drizzle với LibSQL.
- `src/lib`: Cấu hình các thư viện bên thứ 3 (Auth client/server, utils).
- `src/actions`: Chứa các Server Actions xử lý logic nghiệp vụ.

---

## 🔐 Quy trình cập nhật Auth & Database

Mỗi khi bạn muốn thêm một bảng mới hoặc thêm tính năng cho Better Auth (ví dụ: bật plugin mới):

1. Cập nhật cấu hình trong `src/lib/auth.ts`.
2. Chạy `npm run auth:gen` để cập nhật file code schema.
3. Chạy `npm run db:push` để cập nhật bảng thực tế trong Database.

---

## 🎨 Quy chuẩn Code (Code Standards)

- **Indentation:** 2 spaces (đã cấu hình qua Prettier).
- **Naming:**
  - Biến/Hàm: `camelCase`.
  - Components: `PascalCase`.
  - Database Columns: `snake_case` (trong DB) và `camelCase` (trong code).
- **Tailwind:** Sử dụng hàm `cn()` từ `src/lib/utils.ts` để gộp class.

---

## 🛡️ Bảo mật

- Database local (`*.db`) và file `.env` đã được chặn trong `.gitignore`.
- Tuyệt đối không commit các thông tin nhạy cảm lên Repository.
- Sử dụng `src/middleware.ts` để bảo vệ các route `/dashboard` và `/admin`.

---

## 📝 Giấy phép

Dự án được phát triển cho mục đích [Học Từ Thiện]. Vui lòng không sao chép khi chưa được phép.

---

**Happy Coding! 🚀**

---

### Mẹo nhỏ:

Bạn có thể mở `README.md` này trong VS Code và nhấn `Ctrl + Shift + V` để xem bản xem trước (Preview) cực đẹp trước khi commit lên GitHub nhé!
