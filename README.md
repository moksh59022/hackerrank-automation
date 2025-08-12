# HackerRank Automation Script

A **Node.js + Puppeteer** automation script that logs into HackerRank, navigates to the "Algorithms → Warmup" section, and automatically opens and solves a coding problem using a pre-defined solution from a local file.

This project demonstrates **browser automation**, **DOM interaction**, and **QA scripting techniques**.

---

## 🚀 Features

- **Automated Login** – Uses stored credentials to log in to HackerRank.
- **Navigation** – Navigates to the Algorithms → Warmup problems section.
- **Auto-Solution Submission** – Injects solutions from a local file and submits them.
- **Element Handling** – Waits for selectors, clicks dynamically loaded elements, and handles checkboxes.
- **Headless or Visible Mode** – Can run headless or in a visible browser for debugging.

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime environment
- **Puppeteer** – Browser automation library for Chrome/Chromium
- **JavaScript (ES6)** – Modern JavaScript syntax

---

## 📂 Project Structure

```
HRAutomation/
│
├── codes.js         # Stores problem solutions
├── hk.js            # Main automation script
├── package.json     # Dependencies & scripts
├── README.md        # Documentation
└── node_modules/    # Installed dependencies
```

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hackerrank-automation.git
   cd hackerrank-automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add credentials**
   - Open `hk.js` and replace the `email` and `password` variables with your HackerRank credentials.

---

## ▶️ Usage

Run the automation script:
```bash
node hk.js
```

The script will:
1. Launch a Chromium browser window.
2. Log into HackerRank.
3. Navigate to Algorithms → Warmup challenges.
4. Select the first challenge and submit the stored solution.

---


