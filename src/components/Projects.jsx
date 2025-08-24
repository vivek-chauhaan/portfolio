// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import projects from "../data/productdata";

// const ProjectsSection = () => {
//   const [showAll, setShowAll] = useState(false);
//   const visibleProjects = showAll ? projects : projects.slice(0, 3);
//   return (
//     <>
//       <div className="py-12 px-6 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6 text-white">
//           Projects
//         </h2>
//         <p className="text-center mb-10 text-gray-400">
//           Showcasing my work spanning web applications, AI integrations, and
//           more.
//         </p>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
//           {visibleProjects.map((project, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-900 border group   relative border-gray-500 hover:border-green-500 rounded-xl p4 flex flex-col shadow-md"
//             >
// <div className="relative w-full h-48 md:h-56 lg:h-64">
//   <Image
//     src={project.image}
//     alt={project.title}
//     fill
//     className=" object-cover"
//     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//   />
// </div>
//               <span className="bg-green-400 absolute  top-2 left-3 text-black text-xs font-semibold px-2 py-1 rounded-full">
//                 {project.badge}
//               </span>
//               <div className=" px-4 py-2">
//                 <div className="flex justify-between items-center mb-2">
//                   {/* <span className="bg-green-500 absolute  top-5 text-black text-xs font-bold px-2 py-1 rounded-full">
//                   {project.badge}
//                 </span> */}
//                 </div>
//                 <h3 className="text-lg font-semibold group-hover:text-green-400 text-cyan-400 mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm mb-4 line-clamp-3">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.techStack.map((tech, idx2) => (
//                     <span
//                       key={idx2}
//                       className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-2 mt-auto">
//                   <a
//                     href={project.repo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 border border-cyan-500 text-cyan-500 px-4 py-2 rounded-full text-xs font-semibold hover:bg-cyan-500 hover:text-black transition"
//                   >
//                     <FontAwesomeIcon icon={faGithub} />
//                     GitHub
//                   </a>
//                   <a
//                     href={project.liveDemo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 border border-green-500 text-green-500 px-4 py-2 rounded-full text-xs font-semibold hover:bg-green-500 hover:text-black transition"
//                   >
//                     <FontAwesomeIcon icon={faUpRightFromSquare} />
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center   mt-8">
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className=" gap-2 border border-cyan-500 text-cyan-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-cyan-500 hover:text-black transition"
//           >
//             {showAll ? "Show Less" : "Show More"}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectsSection;

"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from "../data/productdata";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  // const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="py-12 md:px-6 md:max-w-5xl w-full mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Projects
      </h2>
      <p className="text-center mb-10 text-gray-400">
        Showcasing my work spanning web applications, AI integrations, and more.
      </p>

      <div className="space-y-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row items-start justify-between bg-white/5 border border-gray-700 rounded-xl md:p-6  p-4 gap-6 shadow-lg"
          >
            {/* Left Content */}
            <div className="flex-1 md:order-1 order-2">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, idx2) => (
                  <span
                    key={idx2}
                    className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-cyan-500 text-cyan-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-500 hover:text-black transition"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  Code
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-green-500 text-green-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-500 hover:text-black transition"
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                  Live Demo
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:order-2 order-1 lg:w-2/5 aspect-video relative rounded-xl overflow-hidden border border-gray-600">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain w-full h-full "
              />
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="border border-cyan-500 text-cyan-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-cyan-500 hover:text-black transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;
