import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState("");

  const mockUsers = {
    student: { username: "student", password: "123", role: "student" },
    teacher: { username: "teacher", password: "123", role: "teacher" },
    admin: { username: "admin", password: "123", role: "admin" },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const user = Object.values(mockUsers).find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );

    if (user) {
      onLogin(user);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/556195/pexels-photo-556195.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Logo at the top-left corner */}
      <div className="absolute top-5 left-5">
  <img
    src="https://usercontent.one/wp/studyoptions.com/wp-content/uploads/2024/07/UoA-Logo-DarkBlue.png" // Replace this URL with the logo image URL
    alt="University Logo"
    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
  />
</div>


      {/* Background overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(0.6px)",
          zIndex: 1,
        }}
      >
        {/* Login form */}
        <div className="relative w-full max-w-md rounded-lg shadow-0xl p-8 bg-transparent z-10">
          <h1 className="text-5xl font-bold text-center text-white mb-6">
            Login to Portal
          </h1>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="block text-xl font-semibold text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-white focus:outline-none focus:ring-0 italic text-black"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-lg font-semibold text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-white focus:outline-none focus:ring-0 italic text-black"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-lg font-semibold text-white"
              >
                Role
              </label>
              <select
                id="role"
                value={credentials.role}
                onChange={(e) =>
                  setCredentials({ ...credentials, role: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-white focus:outline-none focus:ring-0"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-36 h-12 bg-blue-600 text-white rounded-full text-xl hover:bg-purple-700 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-gray-600 text-sm text-center mt-6">
            Need help? Contact your administrator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

