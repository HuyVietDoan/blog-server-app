# Blog Application - Node.js + Express

Ứng dụng Blog đơn giản với Backend API (Node.js/Express) và Frontend (Vanilla JS).

## 🚀 Cấu trúc Project
```
blog-app/
├── backend/           # Backend API Server
│   ├── server.js
│   └── package.json
├── frontend/          # Frontend Application
│   └── index.html
└── README.md
```

## 📋 Yêu cầu

- Node.js >= 14.x
- npm hoặc yarn

## 🔧 Cài đặt và Chạy

### Backend (Port 8080)
```bash
cd backend
npm install
npm start
```

Backend sẽ chạy tại: `http://localhost:8080`

### Frontend

Mở file `frontend/index.html` trong browser hoặc dùng Live Server.

## 📡 API Endpoints

- `GET /api/health` - Health check
- `GET /api/blogs` - Lấy danh sách blog
- `GET /api/blogs/:id` - Lấy chi tiết blog theo ID
- `GET /api/blogs/:slug` - Lấy chi tiết blog theo slug

## 🌐 Deploy trên CodeSandbox

1. Import repository này vào CodeSandbox
2. CodeSandbox sẽ tự động detect và chạy backend
3. Truy cập frontend để xem kết quả

## 👨‍💻 Tác giả

Tạo bởi [Doan Viet Huy AT141]

## 📝 License

MIT
```

---

## ✅ Kiểm tra lại cấu trúc

Sau khi tạo xong, cấu trúc thư mục của bạn sẽ như này:
```
blog-nodejs-app/
├── backend/
│   ├── server.js          ✅
│   └── package.json       ✅
├── frontend/
│   └── index.html         ✅
├── .gitignore             ✅
├── sandbox.config.json    ✅
└── README.md              ✅
