# 📘 UEM College Attendance Management System

## 🚀 Overview

This is a **web-based attendance monitoring system** built to address the real-time classroom attendance issues at **UEM College**. The goal is to let:
- 📚 **Students** check their live attendance status.
- 👨‍🏫 **Teachers** mark attendance easily.
- 👨‍💼 **Admins** manage student, teacher, and timetable data.

⚠️ **Note:** This project is a **work-in-progress**. Some features are not fully implemented yet.

---

## ✨ Features

- 🔐 Role-based login and navigation (`Admin`, `Teacher`, `Student`)
- 🧑‍🎓 Student management interface (Add students, assign details)
- 👨‍🏫 Teacher management interface (Add teacher with stream & ID)
- 🕒 Time table management
- ✅ Attendance marking (by teacher)
- 👁️ Live attendance view (by student)
- ☁️ Firebase Authentication and Realtime Database integration

---

## 📁 Project Structure

```bash
├── index.html               # Role selection (Admin / Teacher / Student)
├── Admin.html              # Admin login
├── admin_panel.html        # Admin dashboard
├── admin_students.html     # Admin interface for managing students
├── admin_teachers.html     # Admin interface for managing teachers
├── admin_timetable.html    # Admin interface for timetable setup
├── student.html            # Student interface to view attendance
├── attendance.js           # Attendance logic using Firebase
├── auth.js                 # Authentication logic using Firebase
├── firebaseConfig.js       # Firebase project configuration


## 🔧 Technologies Used
🖥️ HTML, CSS, JavaScript

🔥 Firebase (Auth + Realtime Database)

🎨 Vanilla styling (no frameworks)


## 🧩 Incomplete / TODOs
🔄 Firebase read/write operations for student and teacher entries

📊 Real-time attendance display in student.html

🧑‍🏫 Fully implemented teacher login & dashboard (teacher.html, teacher_dashboard.html)

🗃️ Backend data validation and error handling

📝 Attendance records summary by date/period

## 🤝 Contributions
This project is currently under development. Contributions, ideas, and suggestions are welcome!


