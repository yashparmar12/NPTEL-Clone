import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  interface MenuItem {
    title: string;
    href: string;
  }
  const menuItems: MenuItem[] = [
    { title: "Learn about NPTEL", href: "#" },
    { title: "Local Chapters", href: "/localchapter" },
    { title: "Industry Associates", href: "#" },
    { title: "Translation", href: "#" },
    { title: "GATE Preparation", href: "#" },
    { title: "CSR", href: "#" },
    { title: "Internship", href: "#" },
    { title: "PreDoc Fellowship", href: "#" },
    { title: "Faculty Initiatives", href: "#" },
    { title: "Workshops", href: "#" },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 ml-25">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <img
                  src="https://nptel.ac.in/assets/shared/logo-m.jpg"
                  alt="NPTEL Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto ml-5"
                />
              </div>
              <div className="hidden md:flex items-center space-x-4 ml-20">
                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
                    style={{ fontSize: "18px" }}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>Initiatives</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{ width: "200%" }}
                      className="absolute left-0 z-10 mt-5  origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div className="py-2">
                        {menuItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-[#6B7280] hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
                    style={{ fontSize: "18px" }}
                  >
                    <span>Programs</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
                    style={{ fontSize: "18px" }}
                  >
                    <span>NPTEL STARS</span>
                  </button>
                </div>

                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
                    style={{ fontSize: "18px" }}
                  >
                    <span>Coordinators</span>
                  </button>
                </div>

                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
                    style={{ fontSize: "18px" }}
                  >
                    <span>NPTEL Testimonials</span>
                  </button>
                </div>

                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
                    style={{ fontSize: "18px" }}
                  >
                    <span>Help Videos</span>
                  </button>
                </div>

                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
                    style={{ fontSize: "18px" }}
                  >
                    <span>More</span>
                  </button>
                </div>
              </div>
              <button
                className="text-white bg-blue-600 hover:bg-blue-700 pl-3 pr-3 pt-1 pb-1"
                style={{ borderRadius: "5px", marginLeft: "8%" }}
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
