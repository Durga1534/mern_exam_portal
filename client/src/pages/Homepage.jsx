import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-blue-600">Exam Portal</h1>
          <nav className="flex gap-4">
            <Link to="/login" className="text-gray-600 hover:text-blue-600">
              Login
            </Link>
            <Link to="/signup" className="text-gray-600 hover:text-blue-600">
              Signup
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-1 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to the Exam Portal
        </h2>
        <p className="text-gray-600 text-center max-w-lg mb-6">
          Take exams online, track your scores, and prepare for success with our
          simple and secure platform.
        </p>

        <div className="flex gap-4">
          <Link
            to="/exam"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Start Exam
          </Link>
          <Link
            to="/about"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Learn More
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Exam Portal. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
