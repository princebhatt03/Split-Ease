# SplitEase 💸

**SplitEase** is a modern web application designed to simplify expense tracking, bill splitting, and settlement among friends, family, or roommates. Built with the powerful **MERN Stack** (MongoDB, Express, React + Vite, Node.js), it provides an intuitive and real-time experience for managing shared expenses.

---

## 🔧 Tech Stack

- **Frontend**: React + Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Token)
- **Tools**: Git, GitHub, Postman, Render, VS Code

---

## 📚 Features

### 👥 User Management
- User Registration and Login (with Full Name, Unique Username, Email, UserID, Password)
- Secure Authentication using JWT
- Full CRUD Operations on User Data
- User Profile (publicly visible in settlements, excluding UserID)

### 💰 Expense Tracking & Splitting
- Any user can create an expense
- Expenses can be split:
  - Equally among all users
  - Among selected users
- Real-time visibility of who owes how much to whom

### ✅ Settlement System
- Users can view all pending and completed settlements
- Option to mark expenses as "paid"
- Future enhancement: Integrate real or mock payment gateway

### 🧾 History & Logs *(Upcoming)*
- View historical data of previous settlements and contributions
- Download or export expense reports
