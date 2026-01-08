# Civix — A Community-Powered Civic Issue Ledger

Civix is a modern, community-driven platform designed to document, track, and resolve civic issues in a transparent and structured manner. It transforms everyday local problems into a shared public record — enabling visibility, accountability, and collective action.

Rather than noise or outrage, Civix focuses on **facts, traceability, and civic responsibility**.

---

##  What Problem Does Civix Solve?

Local civic issues — potholes, sanitation problems, broken infrastructure — often go unnoticed or unresolved due to lack of visibility and accountability.

Civix solves this by:
- Creating a **single digital ledger** of community-reported issues
- Making issues **publicly visible and trackable**
- Enabling **administrative oversight** for resolution
- Encouraging **citizen participation** without friction

---

## Key Features

###  Issue Reporting
- Report civic issues with:
  - Title & description
  - Category (Roads, Sanitation, Electricity, etc.)
  - Location / landmark
  - Optional image URL
- Automatically timestamps reports
- Issues default to `reported` status

###  Public Issue Feed
- Browse all reported issues
- Filter by:
  - Category
  - Status (Reported / In Progress / Resolved)
- Editorial-style issue cards
- Real-time status reflection

###  Admin Panel
- Secure admin-only access
- View all issues
- Update issue status:
  - `reported` → `in_progress` → `resolved`
- Changes instantly reflect on the public feed

###  Authentication
- Firebase Authentication
- Email & password based login/signup
- Role-based access control (Admin vs User)

###  Editorial UI / UX
- Serif-led typography for civic tone
- Subtle grid-based backgrounds
- Micro-interactions and scroll animations
- Calm, minimal, and purposeful design

---

##  Tech Stack

### Frontend
- **React (Vite)**
- **Tailwind CSS**
- **Lucide Icons**
- **React Router DOM**

### Backend / Services
- **Firebase Authentication**
- **Firebase Firestore**
- **Firebase Hosting**

---

##  Project Structure

```text
Civix/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── images, illustrations
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── IssueCard.jsx
│   │   ├── IssueModal.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── AdminRoute.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── BrowseIssues.jsx
│   │   ├── ReportIssues.jsx
│   │   ├── AdminPanel.jsx
│   │   ├── SignIn.jsx
│   │   └── SignUp.jsx
│   │
│   ├── firebase.js
│   ├── App.jsx
│   └── main.jsx
│
├── README.md
├── package.json
└── vite.config.js
````

---

##  Screenshots



###  Homepage

<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/8f2c0ca0-df15-4082-81da-aa98800ec648" />
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/b0abcb57-1704-471c-9061-3bfccd19ea42" />
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/d9786f9a-7f4a-46b5-87c2-4ccd909685f1" />
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/ad9fce2d-225a-4a4c-b130-cf33586a0592" />
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/45bf11ca-6853-4207-956f-dd76cbd6bb31" />
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/349519de-93a0-4b66-ab39-dd4a975cd26b" />



###  Issue Feed
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/9eb2ba0a-83c1-4bfb-92cd-221f26f84117" />
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/95d62d9e-9564-4b74-835f-b9aa81062e61" />
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/a3789cd2-3a92-44b1-89de-3891bd7619ff" />




###  Report Issue Page
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/df346718-2a2b-40c5-ae7b-8c49a22be9d7" />
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/fd7dccfe-ca2e-4ae9-9127-58bd51e2e62d" />

###  My Reports
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/9c56c0e6-2571-40c0-8bca-02271715ded9" />


###  Admin Panel

<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/d335ed66-f845-4a19-aed4-42d3220a310b" />


###  Authentication

<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/531b15ab-6d96-4661-bf92-f39879310eb1" />
<img width="1467" height="830" alt="image" src="https://github.com/user-attachments/assets/7b5ee3cd-3144-41b5-a247-732294470756" />




---

##  Role-Based Access Logic

* **Users**

  * Can report issues
  * Can browse all public issues
  * Can view their own reports

* **Admins**

  * Can access Admin Panel
  * Can update issue statuses
  * Changes sync instantly with Firestore

Admin access is handled via context-based role checking.

---

##  Environment Setup

###  Clone the repository

```bash
git clone https://github.com/<your-org-or-username>/Civix.git
cd Civix
```

###  Install dependencies

```bash
npm install
```

###  Firebase Configuration

Create a Firebase project and add your config inside:

```js
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

##  Running Locally

```bash
npm run dev
```

Visit:

```
http://localhost:5173
```

---

##  Deployment (Firebase Hosting)

```bash
npm run build
firebase login
firebase init
firebase deploy
```

---

##  Future Improvements

* Image upload via Firebase Storage
* Comments / discussion on issues
* Location-based issue clustering (Maps)
* Issue upvoting & prioritization
* Analytics dashboard for civic authorities
* Progressive Web App (PWA) support

---

##  Why Civix Matters

Civix is designed especially for:

* College students
* First-time civic participants
* Communities lacking structured reporting tools

It helps users **learn civic responsibility early**, understand how public accountability works, and actively participate in improving their surroundings.

---

## Contributors 


**Shristi**  
UI/UX Design, Firebase Authentication, Firestore Integration, and Deployment

**Ekansh Satsangi**  
Frontend Development with React and Application Logic




---

##  License

This project is open-source and intended for educational and community-driven use.

---

