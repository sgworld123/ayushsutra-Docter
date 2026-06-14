# 🌿 AyushSutra Doctor Portal

A comprehensive digital healthcare platform designed for Ayurvedic practitioners to efficiently manage patients, therapy schedules, appointments, and clinical activities through a modern dashboard experience.

---

## 🚀 Overview

AyushSutra Doctor Portal streamlines day-to-day clinic operations by providing doctors with a centralized platform for:

* Patient management
* Appointment scheduling
* Therapy tracking
* Clinical analytics
* Calendar planning
* Secure authentication

The platform is built using a modern full-stack architecture with React, Node.js, MongoDB, Firebase Authentication, and Cloudinary.

---

## ✨ Features

### 👨‍⚕️ Doctor Dashboard

* Centralized overview of clinic activities
* Patient statistics and summaries
* Upcoming appointments and meetings
* Therapy schedule tracking

### 🩺 Patient Management

* Manage current patients
* View historical patient records
* Track treatment progress
* Access patient details instantly

### 📅 Smart Scheduling

* Interactive calendar interface
* Appointment management
* Therapy scheduling
* Daily and weekly planning

### 📊 Analytics & Insights

* Disease distribution analysis
* Patient progress monitoring
* Overall clinic performance metrics
* Visual reports and charts

### 💬 Patient Communication

* Communication tracking
* Appointment coordination
* Follow-up management

### 🔐 Secure Authentication

* User registration and login
* Protected routes
* Firebase-based authentication
* Session management

### ☁️ Media Management

* Secure image uploads
* Cloudinary integration
* Patient-related media storage

---

## 🖼️ Screenshots

### Dashboard

![Dashboard](./screenshots/dashboard.png)

### Patient Management

![Patients](./screenshots/patients.png)

### Calendar & Scheduling

![Calendar](./screenshots/calendar.png)

> Replace these placeholders with actual screenshots from the application.

---

## 🏗️ System Architecture

```text
Frontend (React + Vite)
            │
            ▼
      Express API
            │
    ┌───────┼────────┐
    ▼       ▼        ▼
MongoDB  Firebase  Cloudinary
Database   Auth     Storage
```

---

## 🛠️ Tech Stack

### Frontend

* React 19
* Vite
* React Router
* HeroUI
* Tailwind CSS
* Framer Motion
* Recharts
* Lucide React

### Backend

* Node.js
* Express.js
* Firebase Admin SDK
* JWT Authentication
* Multer

### Database

* MongoDB
* Mongoose ODM

### Cloud Services

* Firebase Authentication
* Cloudinary

---

## 📂 Project Structure

```text
ayushsutra-doctor/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── routes/
│   │
│   └── public/
│
├── server/
│   ├── src/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── controllers/
│   │
│   └── config/
│
└── README.md
```

---

## 📦 Prerequisites

Before running the project, ensure you have installed:

* Node.js (18+)
* npm
* MongoDB
* Firebase Project
* Cloudinary Account

---

## ⚙️ Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/ayushsutra-doctor.git
cd ayushsutra-doctor
```

---

### Install Frontend Dependencies

```bash
cd client
npm install
```

---

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```text
http://localhost:8000
```

---

### Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 📊 Core Modules

### Dashboard

Provides:

* Patient statistics
* Disease distribution
* Therapy schedules
* Upcoming meetings

### Current Patients

Manage active patient treatments and records.

### Past Patients

Access historical treatment data and archived records.

### Calendar

Organize appointments, therapies, and schedules.

### Therapy Management

Track ongoing therapies and treatment plans.

---

## 🔒 Security

* Firebase Authentication
* Protected API routes
* Secure password hashing using bcrypt
* Middleware-based authorization

---

## 🌱 Future Enhancements

* Telemedicine integration
* E-prescriptions
* AI-assisted diagnosis support
* Multi-doctor management
* SMS & WhatsApp notifications
* Electronic Health Records (EHR)
* Patient mobile application

---
## 🎉 Star = Happy Dance

Every star makes this little project do a happy dance. Thanks for stopping by — I appreciate you!

![dance cat](https://media.giphy.com/media/gXXFrjHFJIMoqKr8UT/giphy.gif)
