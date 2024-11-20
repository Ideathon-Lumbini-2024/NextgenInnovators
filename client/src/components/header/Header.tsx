import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"} className="flex items-center">
            {/* <img
              src="https://via.placeholder.com/150x50"
              alt="GoFundMe Logo"
              className="h-10"
            /> */}
            राहत
          </Link>

          <nav className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/fundraisers"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Fundraisers
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Search and Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search fundraisers"
                className="w-48 pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <span className="absolute right-3 top-2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.1-5.4A6.5 6.5 0 1111.15 4.5a6.5 6.5 0 017.55 7.55z"
                  />
                </svg>
              </span>
            </div>

            {/* Buttons */}
            <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-full shadow hover:bg-green-600">
              Start a Fundraiser
            </button>
            <button className="px-4 py-2 text-sm font-medium text-green-600 border border-green-500 rounded-full hover:bg-green-50">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
