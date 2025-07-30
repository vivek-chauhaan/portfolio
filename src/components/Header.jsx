// "use client";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFile, faFileAlt } from "@fortawesome/free-solid-svg-icons";

// export default function Header({ onSectionClick }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleSectionClick = (section) => {
//     onSectionClick(section);
//     setMenuOpen(false);
//   };

//   return (
//     <header className=" fixed top-0 w-full  bg-black/65 z-50 bg-opacity-70 backdrop-blur shadow-lg">
//       <div className="max-w-7x mx-aut px-4 sm:px-6 lg:px-8 flex justify-around items-center h-16">
//         <h1 className="text-2xl font-bold text-gradient ">Vivek Chauhan</h1>

//         {/* Desktop Nav */}

//         <div className="hidden md:flex items-center space-x-6">
//           {[
//             { label: "Home", section: null },
//             { label: "Education", section: "education" },
//             { label: "Experience", section: "experience" },
//             { label: "Tech Stack", section: "tech" },
//             { label: "Projects", section: "projects" },
//             { label: "Contact", section: "contact" },
//           ].map(({ label, section }) => (
//             <button
//               key={label}
//               onClick={() => handleSectionClick(section)}
//               className="relative cursor-pointer text-gray-300 hover:text-cyan-500 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-cyan-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
//             >
//               {label}
//             </button>
//           ))}

//           <a
//             href="/resume.pdf"
//             download
//             className="w-10 h-10 flex items-center justify-center rounded-full text-cyan-500 bg-gray-900 shadow transition"
//           >
//             <FontAwesomeIcon icon={faFileAlt} />
//           </a>
//         </div>

//         {/* Fancy Hamburger */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="relative w-10 h-10 focus:outline-none group"
//             aria-label="Toggle menu"
//           >
//             <div className="absolute inset-0 flex items-center justify-center">
//               <a
//                 href="/resume.pdf"
//                 download
//                 className="block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded shadow transition flex items-center justify-center gap-2"
//               >
//                 <FontAwesomeIcon icon={faFile} />
//               </a>
//               {menuOpen ? (
//                 <X
//                   className="text-cyan-500 transition-transform duration-300 ease-in-out transform scale-110"
//                   size={30}
//                 />
//               ) : (
//                 <Menu
//                   className="text-cyan-500 transition-transform duration-300 ease-in-out transform group-hover:scale-125"
//                   size={30}
//                 />
//               )}
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {menuOpen && (
//         <div className="md:hidden bg-opacity-95 backdrop-blur p-4 space-y-4 shadow-md animate-fade-in-down">
//           <button
//             onClick={() => handleSectionClick(null)}
//             className="block w-full text-left hover:text-cyan-600"
//           >
//             Home
//           </button>
//           <button
//             onClick={() => handleSectionClick("projects")}
//             className="block w-full text-left hover:text-cyan-600"
//           >
//             Projects
//           </button>
//           <button
//             onClick={() => handleSectionClick("tech")}
//             className="block w-full text-left hover:text-cyan-600"
//           >
//             Tech Stack
//           </button>
//           <button
//             onClick={() => handleSectionClick("experience")}
//             className="block w-full text-left hover:text-cyan-600"
//           >
//             Experience
//           </button>
//           <button
//             onClick={() => handleSectionClick("education")}
//             className="block w-full text-left hover:text-cyan-600"
//           >
//             Education
//           </button>
//           <button
//             onClick={() => handleSectionClick("contact")}
//             className="block w-full text-left hover:text-cyan-600"
//           >
//             Contact
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export default function Header({ onSectionClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSectionClick = (section) => {
    onSectionClick(section);
    setActiveSection(section);
    setMenuOpen(false);
  };

  const sections = [
    { label: "Home", section: null },
    // { label: "Education", section: "education" },
    { label: "Experience", section: "experience" },
    { label: "Tech Stack", section: "tech" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/65 z-50 bg-opacity-70 backdrop-blur shadow-lg">
      <div className="max-w-7x mx-auto px-4 sm:px-6 lg:px-8 flex  justify-between md:justify-around items-center h-16">
        <h1 className="text-2xl font-bold text-gradient ">Vivek Chauhan</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map(({ label, section }) => (
            <button
              key={label}
              onClick={() => handleSectionClick(section)}
              className={`relative cursor-pointer ${
                activeSection === section ? "text-cyan-500" : "text-gray-300"
              } hover:text-cyan-500 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-cyan-500 after:w-0 hover:after:w-full after:transition-all after:duration-300`}
            >
              {label}
            </button>
          ))}

          <a
            href="/vivek_Resume.pdf"
            download
            className="w-10 h-10 flex items-center justify-center rounded-full text-cyan-500 bg-gray-900 shadow transition"
          >
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
        </div>

        {/* Fancy Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {menuOpen ? (
                <X
                  className="text-cyan-500 transition-transform duration-300 ease-in-out transform scale-110"
                  size={30}
                />
              ) : (
                <Menu
                  className="text-cyan-500 transition-transform duration-300 ease-in-out transform group-hover:scale-125"
                  size={25}
                />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden   h-screen bg-opacity-95 backdrop-blur p-4 space-y-4 shadow-md animate-fade-in-down">
          {sections.map(({ label, section }) => (
            <button
              key={label}
              onClick={() => handleSectionClick(section)}
              className={`block w-full text-left ${
                activeSection === section ? "text-cyan-500" : "text-gray-300"
              } hover:text-cyan-600`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
