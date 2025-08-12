# Online Exam System

An online exam web application with JWT authentication, randomized MCQs, timer, score calculation, and result display.

---

## 🚀 Features
- User registration and login with JWT authentication
- “Start Exam” interface fetching randomized questions from backend
- MCQs display with Next/Previous navigation
- Countdown timer with auto-submit functionality
- Submit exam and calculate score
- Result page showing the score

---

## 🛠 Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT

---

## 📂 Folder Structure
project-root/
│── server/ # Express.js server
│── client/ # React.js client
│── README.md # Project documentation


---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/online-exam-system.git
cd online-exam-system

2️⃣ Backend Setup
bash
Copy code
cd server
npm install

Create a .env file in the backend folder:
MONGO_URI=your-mongo-db-url
JWT_SECRET=your-secret-key
PORT=8080

Run backend:
npm start

3️⃣ Frontend Setup
cd ../client
npm install
npm run dev


## API Testing with Postman

- Download the included `postman_collection.json` file.
- Import it into Postman using **File → Import**.
- Set the `BASE_URL` variable to your backend URL.
- Use the requests to test:
  - User Registration (`/api/auth/register`)
  - User Login (`/api/auth/login`)
  - Start Exam (`/api/exam/start`)
  - Submit Exam (`/api/exam/submit`)
  - Get Results (`/api/exam/results`)




