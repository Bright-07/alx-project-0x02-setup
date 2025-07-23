# Next.js Project Setup and Basics

This project demonstrates a foundational setup and usage of a Next.js application using **TypeScript**, **Tailwind CSS**, and **ESLint**. It is part of the ALX Frontend Advanced module and showcases key frontend development concepts.

---

## 🚀 Project Structure

alx-project-2/
├── components/
│ ├── common/
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ ├── PostCard.tsx
│ │ ├── PostModal.tsx
│ │ └── UserCard.tsx
│ └── layout/
│ └── Header.tsx
├── interfaces/
│ └── index.ts
├── pages/
│ ├── about.tsx
│ ├── home.tsx
│ ├── index.tsx
│ ├── posts.tsx
│ └── users.tsx
├── public/
│ └── assets/
│ └── images/
├── styles/
│ └── globals.css
├── tailwind.config.js
└── tsconfig.json


---

## 🚀 Features

- ✅ **Next.js + TypeScript + Tailwind CSS** setup
- ✅ Page Routing (`/home`, `/about`, `/posts`, `/users`)
- ✅ **Reusable Components**:
  - `Card`: Displays title and content
  - `Button`: Supports size and shape props
  - `PostModal`: Accepts user input and dynamically displays it
  - `PostCard`: Fetches and displays posts from an API
  - `UserCard`: Fetches and displays users from an API
- ✅ `Header` navigation bar shared across all pages
- ✅ Mock data fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- ✅ Fully responsive UI built with Tailwind

---

## 🌐 Pages & Routes

| Path        | Description                                        |
|-------------|----------------------------------------------------|
| `/`         | Basic landing page                                 |
| `/home`     | Welcome screen, Cards and user-created Post display |
| `/about`    | Button component demo page                         |
| `/posts`    | List of posts fetched from API                     |
| `/users`    | List of users fetched from API                     |

---

## 🛠️ Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/Bright-07/alx-project-0x02-setup.git
cd alx-project-0x02-setup/alx-project-2
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Development Server
bash
Copy
Edit
npm run dev -- -p 3000
Visit http://localhost:3000 in your browser.

📁 Static Assets
You can store images or public assets here:

swift
Copy
Edit
/public/assets/images/
🧠 Author
Bright Asamoah Nyarko
Frontend Developer — ALX SE Program
🔗 GitHub: @Bright-07

📜 License
This project is intended for educational purposes under the ALX Software Engineering program.

yaml
Copy
Edit

---

### ✅ Next Step:
1. Paste this into your `README.md`
2. Run:
```bash
git add README.md
git commit -m "Update README with full project details"
git push origin main