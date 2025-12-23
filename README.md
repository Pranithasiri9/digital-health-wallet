🏥 Digital Health Wallet

A full-stack Digital Health Wallet that allows users to securely store, view, track, and share medical reports and vitals anytime, anywhere.
This project is built as part of the 2care.ai Assignment using ReactJS, Node.js, and SQLite.

🚀 Features
👤 User Management

User registration and login

JWT-based authentication

Role-based access (Owner, Viewer)

📄 Medical Reports

Upload medical reports (PDF/Image)

Store metadata (report type, date)

View and download uploaded reports

Reports stored securely on the backend

📊 Vitals Tracking

Store vitals linked to medical reports

Display vitals summary (BP, Sugar, Heart Rate)

Visualize vitals trends using charts

Vitals are logically extracted from uploaded reports

🔐 Report Sharing

Share selected reports with other users

Shared users get read-only access

Shared reports visible in a separate section

🧱 System Architecture
Frontend (ReactJS)

Component-based UI using Material UI

Pages: Login, Register, Dashboard, Upload Report, Vitals, Shared Reports

Axios used for API communication

Charts rendered using Recharts

Backend (Node.js + Express)

RESTful APIs

JWT authentication middleware

Secure file uploads

Access control for shared reports

Database (SQLite)

Lightweight relational database

Tables:

users

reports

vitals

shared_access

🗄️ Database Schema (Summary)

users: stores user credentials

reports: stores uploaded report metadata

vitals: stores extracted vitals over time

shared_access: controls report sharing permissions

🔐 Security Considerations

Passwords hashed using bcrypt

JWT used for authentication

Protected routes using middleware

Shared reports are strictly read-only

🛠️ Tech Stack

Frontend: ReactJS, Material UI, Recharts

Backend: Node.js, Express.js

Database: SQLite

Auth: JWT

File Storage: Local server storage (/uploads)

⚙️ Setup Instructions
Backend
cd backend
npm install
node server.js


Backend runs on: http://localhost:4000

Frontend
cd frontend
npm install
npm start


Frontend runs on: http://localhost:3000

🎥 Demo & Recording

A screen recording demonstrating:

Application walkthrough

Key features

Code structure

Local setup and execution

📎 Recording Link: https://drive.google.com/file/d/1-C_L4VpB61H0E3210sCEP0HWuxFkjTUI/view?usp=sharing

📌 Conclusion

This Digital Health Wallet demonstrates a scalable, secure, and user-friendly approach to managing personal health data, aligned with real-world healthcare needs
