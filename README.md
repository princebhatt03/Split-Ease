# SplitEase 💸

**SplitEase** is a full-featured expense splitting and settlement web application, designed to streamline shared expense management among friends, family, roommates, or colleagues. Built using the robust **MERN Stack** — MongoDB, Express.js, React (with Vite), and Node.js — it offers an intuitive UI, real-time calculations, secure authentication, and a scalable backend architecture.

---

## 🔧 Tech Stack

- **Frontend**: React + Vite, Tailwind CSS, Framer Motion (for smooth UI animations)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: 
  - JWT (JSON Web Token) for secure session management
  - Google OAuth 2.0 for seamless third-party login
- **Dev Tools**: Git, GitHub, Postman, Render (for deployment), VS Code

---

## 📚 Features

### 👥 User Management
- **User Registration & Login**: Supports both traditional email-password login and Google OAuth login.
- **User Schema Includes**:
  - Full Name
  - Unique Username
  - Email (unique)
  - UserID (system-generated)
  - Password (hashed with bcrypt)
  - Profile Image (optional)
- **JWT Authentication**:
  - Secures protected routes
  - Token stored in HTTP-only cookies or localStorage (based on setup)
- **User Profile Management**:
  - View and update profile details
  - Publicly viewable in settlements (UserID is hidden)

---

### 💰 Expense Tracking & Splitting
- Any user can create an expense and assign participants
- Expenses can be split:
  - **Equally**: Among all selected users
  - **Manually**: (upcoming feature)
- Automatic calculation of individual shares
- Shows clear tracking of:
  - Who owes whom
  - How much
- Real-time syncing using efficient API design (WebSocket support planned)

---

### ✅ Settlement System
- **Pending Settlements**:
  - Users can see how much they owe and to whom
  - Displays per-expense breakdown
- **Mark as Paid**:
  - Users can mark debts as resolved
  - Amounts update in real time
- **Upcoming Features**:
  - Integration with mock or real payment gateways (e.g., Razorpay, Stripe)
  - Transaction verification via receipts or notes

---

### 🧾 History & Logs *(Upcoming)*
- Comprehensive history of all:
  - Expenses created
  - Settlements made
- Filter and sort by:
  - Date
  - Category
  - User
- Option to:
  - Download/export reports as PDF/CSV
  - Share summaries

---

## 🔐 Authentication Flow

### 🧾 JWT-based Auth
- On successful login or registration:
  - JWT token is generated and stored (in HTTP-only cookies or frontend memory)
- Middleware protects routes and decodes token to get user info

### 🔑 Google OAuth 2.0
- Users can login using their Google account
- New users are auto-registered on first login
- Follows OAuth best practices using Google APIs and backend validation

---

## 🌐 Environment Variables Setup

### 🔒 Backend: `backend/.env`
```env
PORT=3000
DB_CONNECT=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_TIMEOUT=1d
FRONTEND_URL=your_frontend_URL
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```
🎯 Frontend: frontend/.env
```
VITE_BACKEND_URL=http://localhost:3000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```
🚀 Project Setup
📦 Backend
```
cd backend
npm install
nodemon or npx nodemon
```

💻 Frontend
```
cd frontend
npm install
npm run dev
```
📁 Folder Structure (Simplified)

```
SplitEase/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│   └── .env
│
└── README.md

```

✨ Future Enhancements
🏦 Payment Gateway Integration (Razorpay / Stripe)

📊 Graphs and Analytics

📱 Mobile Responsive Design

🧠 AI-Based Expense Suggestions

📌 Group Creation for recurring split

🔔 Notification System (Email/SMS)

🙌 Contributing
Contributions, feature ideas, and bug reports are welcome!
Feel free to fork this repo and submit a pull request.

📧 Contact
Prince Bhatt
📧 Email: princebhatt316@gmail.com
🌐 Portfolio: https://princebhatt03.github.io/Portfolio
🔗 GitHub: princebhatt03
