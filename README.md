# 🧠 Habit Tracker App

A simple and elegant **Habit Tracker** built with **React + TypeScript + Redux Toolkit + Material UI**.  
Track your daily habits, toggle completions and visualize your streaks!

🔗 **Live Demo:** [habit-tracker-vert-chi.vercel.app](https://habit-tracker-vert-chi.vercel.app/) 

---

## ✨ Features

- Add and remove habits
- Toggle daily habit completion
- Visualize habit streaks
- Async state updates with Redux Thunk
- Clean and responsive Material UI components

---

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Redux Toolkit, Redux Thunk
- **Styling:** Material UI (`@mui/material`)
- **State Management:** Redux Store, Slices, DevTools
- **Deployment:** Vercel

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SuriyaSR/Habit-Tracker.git
cd Habit-Tracker
```

### 2. Install dependencies
``` bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
App will run locally on http://localhost:5173/ (Vite default)

## 🎨 Using Material UI
This project uses **Material UI (MUI)** for UI components and layout.

### If you want to customize or extend:
You can import any components from @mui/material

Theme customization is possible via MUI's ThemeProvider

📦 Installed packages:
```bash
npm install @mui/material @emotion/react @emotion/styled
```
### 📸 Screenshot
https://github.com/user-attachments/assets/f8e345f9-0464-4f53-8acb-adf6a68b1799

## 🧠 Redux Toolkit Overview
 - State is managed via habitSlice.ts
 - addHabit, toggleHabit, and removeHabit actions are dispatched from components
 - Async logic handled via redux-thunk using extraReducers

🛠 DevTools Integration:
 - Use the Redux DevTools extension in your browser to inspect state changes in real time

## To Do / Improvements
 - Persist data with localStorage or Firebase
 - Add calendar view
 - Dark/light mode toggle
 - Add progress analytics

 ### 🤝 Contributing
Pull requests and suggestions are welcome!
If you find any bugs or want a feature added, feel free to open an issue.

### 📄 License
MIT License — Free to use, modify and share.
