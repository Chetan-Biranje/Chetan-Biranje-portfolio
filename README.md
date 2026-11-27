# Chetan Biranje - Cybersecurity & DFIR Portfolio Website

A modern, high-performance, full-stack portfolio website built specifically for **Chetan Biranje** (Digital Forensics & Incident Response / SOC Analyst / Cybersecurity Researcher).

---

## 🚀 Quick Start (कसं सुरू करायचं)

### पर्याय १: Single-Click Batch File (सर्वात सोपा मार्ग)
फक्त `run-portfolio.bat` फाईलवर double-click करा! 
हे Backend आणि Frontend दोन्ही आपोआप वेगवेगळ्या terminal मध्ये चालू करेल.

### पर्याय २: Manual Commands

#### १. Backend सुरू करणे:
```bash
cd backend
npm ci
npm start
```
> Backend API चालू होईल: `http://localhost:5000`

#### २. Frontend सुरू करणे:
```bash
cd frontend
npm ci
npm start
```
> Browser मध्ये Portfolio उघडेल: `http://localhost:3000`

---

## 🛠️ Tech Stack

### Frontend (User Interface)
- **React 18** — Component-based responsive UI
- **Tailwind CSS** — Dark Cyber / Hacker aesthetics (Green/Cyan/Blue neon accents)
- **Framer Motion** — Smooth scroll, fade-ins, and interactive animations
- **React Icons & Simple Icons** — Cybersecurity, terminal & tech stack icons
- **React Type Animation** — Dynamic typing effect in hero section
- **Axios** — API communication with backend

### Backend (REST API)
- **Node.js & Express.js** — Fast, lightweight RESTful API
- **Helmet** — Enterprise-grade HTTP security headers
- **CORS** — Cross-Origin Resource Sharing protection
- **Express Rate Limit** — Application-level request throttling (not complete DDoS protection)
- **Nodemailer** — Contact form email delivery
- **JSON Data Layer** — Easily customizable portfolio data

---

## 📂 Project Structure

```
chetan-portfolio/
│
├── run-portfolio.bat          # 1-click startup script
├── README.md                  # Project documentation
│
├── backend/                   # Node.js + Express API
│   ├── data/
│   │   └── portfolio.json     # All profile, projects, skills data
│   ├── routes/
│   │   ├── profile.js         # API routes for data retrieval
│   │   └── contact.js         # Contact form submission + validation
│   ├── .env                   # Environment configurations
│   ├── package.json           # Backend dependencies
│   └── server.js              # Express application entry point
│
└── frontend/                  # React 18 Application
    ├── public/
    │   └── index.html         # HTML template
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx     # Navigation bar with cyber style
    │   │   ├── Hero.jsx       # Terminal whoami + Type animation
    │   │   ├── ParticleBackground.jsx # Cyber particle matrix effect
    │   │   ├── About.jsx      # Summary, stats, focus areas
    │   │   ├── Skills.jsx     # Categorized skills (DFIR, SOC, SecOps)
    │   │   ├── Experience.jsx # Career & internship timeline
    │   │   ├── Projects.jsx   # Interactive project showcase cards
    │   │   ├── Education.jsx  # Academic background timeline
    │   │   ├── Certifications.jsx # 13+ verified credentials & links
    │   │   ├── Contact.jsx    # Contact form connected to API
    │   │   └── Footer.jsx     # Footer with social profiles
    │   ├── App.jsx            # Root component
    │   ├── index.css          # Tailwind & custom glow styling
    │   └── index.js           # React entry point
    └── package.json           # Frontend dependencies
```

---

## 🌐 Backend API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | API status & endpoint directory |
| `GET` | `/api/profile` | Personal info & summary |
| `GET` | `/api/skills` | Skills categorized by domain |
| `GET` | `/api/experience` | Internship & employment history |
| `GET` | `/api/education` | Degrees and educational background |
| `GET` | `/api/projects` | DevSecOps & Security projects |
| `GET` | `/api/certifications`| TCM Security, Udemy, DevTown certificates |
| `GET` | `/api/volunteering`  | Open-source and community contributions |
| `GET` | `/api/organizations` | OWASP, Bug bounty community |
| `POST`| `/api/contact`       | Contact form validation & email delivery |


## Configuration and privacy

Copy `backend/.env.example` to `backend/.env` for local configuration. Set `CORS_ORIGINS` to the exact frontend origins used by your deployment. Explicitly add preview origins when needed. Keep SMTP credentials and actual contact submissions out of source control. Review retention and access controls for stored messages before production use.
