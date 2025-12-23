# 🏥 Digital Health Wallet

A full-stack **Digital Health Wallet** application that enables users to securely store, view, track, and share medical reports and vitals anytime, anywhere.

This project is developed as part of the **2care.ai Technical Assignment** using **ReactJS**, **Node.js (Express)**, and **SQLite**.

---

## 📌 Problem Statement

Design a Health Wallet that is accessible to a person anywhere, anytime, with the ability to:
- Upload medical reports
- Track vitals over time
- Retrieve reports by date or category
- Share selected reports with others using access control

---

## 🚀 Features

### 👤 User Management
- User registration and login
- JWT-based authentication
- Role-based access (Owner / Viewer)

### 📄 Medical Reports
- Upload medical reports (PDF/Image)
- Store report metadata (type, date)
- View and download uploaded reports
- Secure server-side file storage

### 📊 Vitals Tracking
- Store vitals linked to medical reports
- Display vitals summary:
  - Blood Pressure
  - Blood Sugar
  - Heart Rate
- Visualize vitals trends using charts
- Logical extraction of vitals from uploaded reports

### 🔐 Report Sharing
- Grant access to selected reports
- Shared users receive **read-only access**
- Shared reports are displayed in a dedicated section

---

## 🧱 System Architecture

### Frontend (ReactJS)
- Component-based UI architecture
- Material UI for responsive and clean design
- Pages:
  - Login
  - Register
  - Dashboard
  - Upload Report
  - Vitals
  - Shared Reports
- Axios for API communication
- Recharts for vitals visualization

### Backend (Node.js + Express)
- RESTful API design
- JWT authentication middleware
- Secure file upload handling
- Authorization logic for shared access

### Database (SQLite)
- Lightweight relational database
- Suitable for local development and prototyping

---

## 🗄️ Database Schema

### Tables
- **users** – stores user credentials and roles
- **reports** – stores uploaded report metadata
- **vitals** – stores extracted vitals over time
- **shared_access** – manages report sharing permissions

---

## 🔐 Security Considerations
- Passwords hashed using **bcrypt**
- JWT used for authentication and authorization
- Protected API routes using middleware
- Shared reports restricted to **read-only access**

---

## 🛠️ Technology Stack

| Layer | Technology |
|-----|-----------|
| Frontend | ReactJS, Material UI, Recharts |
| Backend | Node.js, Express.js |
| Database | SQLite |
| Authentication | JWT |
| File Storage | Local Server Storage (`/uploads`) |

---

## ⚙️ Setup Instructions

### Backend Setup
```bash
cd backend
npm install
node server.js
```
### Frontend Setup
``` bash
cd frontend
npm install
npm start
```

-------
📎 **Recording Link:**  
https://drive.google.com/file/d/1-C_L4VpB61H0E3210sCEP0HWuxFkjTUI/view?usp=sharing
---
## 📌 Conclusion

This **Digital Health Wallet** showcases a secure, scalable, and user-friendly approach to managing personal health data.  
It effectively demonstrates full-stack development, system design, access control mechanisms, and data visualization aligned with real-world healthcare requirements.





