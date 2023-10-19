
import { useState } from 'react';


    const Navbar = () => {
        const [openDropdown, setOpenDropdown] = useState(null);

        const handleDropdownToggle = (index) => {
          setOpenDropdown(openDropdown === index ? null : index);
        };
        const navItems = [
            { label: "Home", link: "/" },
            { label: "About", link: "/about" },
            { label: "Services", link: "/services", dropdownItems: ["Service 1", "Service 2", "Service 3"] },
            { label: "Contact", link: "/contact" },
          ];
      
        

    return (
        <div>
            <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="/">Your Logo</a>
          </div>
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex space-x-4">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.link}
                  className={`text-white ${openDropdown === index ? "bg-blue-700" : ""} px-4 py-2 rounded`}
                  onClick={() => item.dropdownItems && handleDropdownToggle(index)}
                >
                  {item.label}
                </a>
                {item.dropdownItems && openDropdown === index && (
                  <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                    {item.dropdownItems.map((dropdownItem, i) => (
                      <a key={i} href="#" className="block px-4 py-2">
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;