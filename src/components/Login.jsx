import React, { useState } from 'react';

const Login = ({ onLogin, onSwitchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true); // true for Sign In, false for Sign Up

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, just call onLogin
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Panel - Welcome Section */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:w-1/2 flex flex-col items-center justify-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {isSignIn ? 'Welcome Back!' : 'Hello, Friend!'}
            </h2>
            <p className="text-center mb-8 text-blue-100">
              {isSignIn 
                ? 'To keep connected with us please sign up with your personal info'
                : 'Already have an account? Sign in to continue your journey'}
            </p>
            
            {isSignIn ? (
              <button
                onClick={() => setIsSignIn(false)}
                className="border-2 border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
              >
                Create Account
              </button>
            ) : (
              <button
                onClick={() => setIsSignIn(true)}
                className="border-2 border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Right Panel - Form Section */}
          <div className="p-8 md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {isSignIn ? 'Sign In' : 'Create Account'}
            </h3>
            
            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-4 mb-6">
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-xl">f</span>
              </button>
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-xl">G</span>
              </button>
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-xl">in</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or use your email to {isSignIn ? 'sign in' : 'sign up'}
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Forgot Password - Only show for Sign In */}
              {isSignIn && (
                <div className="mb-6 text-right">
                  <button 
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium"
              >
                {isSignIn ? 'Sign In' : 'Sign Up'}
              </button>
            </form>

            {/* Mobile Toggle - Only visible on small screens */}
            <div className="mt-6 text-center md:hidden">
              <p className="text-sm text-gray-600">
                {isSignIn ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setIsSignIn(!isSignIn)}
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  {isSignIn ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;