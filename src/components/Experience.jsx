// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faCalendar } from "@fortawesome/free-solid-svg-icons";

// // const experiences = [
// //   {
// //     role: "Founding Engineer",
// //     company: "2nd Swap",
// //     date: "Jan 2025 - Apr 2025",
// //     achievements: [
// //       "Built backend infrastructure with 12+ RESTful endpoints and secure authentication, enabling real-time updates with <200ms latency for 50+ items and 25+ active users.",
// //       "Created an OCR and OAuth verification system that reduced manual work by 20% while maintaining 99.8% platform uptime.",
// //       "Architected complete backend using Node.js, Express, MongoDB, REST APIs, OAuth 2.0, and Socket.io.",
// //     ],
// //     side: "right",
// //   },
// //   {
// //     role: "SDE Intern - Android Development",
// //     company: "PMStack",
// //     date: "Dec 2024 - Apr 2025",
// //     achievements: [
// //       "Developed mobile UI components with Flutter and integrated analytics for user insights; resolved critical bugs across Android versions through Crashlytics monitoring achieving 120+ beta users within the first month of beta release.",
// //       "Boosted app performance through code restructuring and implementing architecture refinements like modularity; resolved 163 technical issues in frontend and backend systems.",
// //       "Built applications using Flutter, Firebase, Dart, Google Analytics, Crashlytics, and Figma.",
// //     ],
// //     side: "left",
// //   },
// // ];

// // const ExperienceTimeline = () => {
// //   return (
// //     <section className="relative py-16 bg-black text-white">
// //       <h2 className="text-4xl font-bold text-center mb-4">
// //         Professional Experience
// //       </h2>
// //       <p className="text-center mb-10 text-gray-400">
// //         My professional journey and key accomplishments.
// //       </p>

// //       <div className="relative">
// //         {/* Vertical Line */}
// //         <div className="absolute left-1/2 transform hidden md:block -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-green-500 to-pink-500"></div>

// //         <div className="space-y-20">
// //           {experiences.map((exp, idx) => (
// //             <div
// //               key={idx}
// //               className={`relative flex ${
// //                 exp.side === "left" ? "justify-start" : "justify-end"
// //               }`}
// //             >
// //               {/* Dot */}
// //               <div className="absolute left-1/2 transform -translate-x-1/2">
// //                 <span className="w-6 h-6 bg-black border-4 border-cyan-500 rounded-full block"></span>
// //               </div>

// //               {/* Card */}
// //               <div
// //                 className={`w-full max-w-md p-6 rounded-lg bg-gray-900 shadow-lg ${
// //                   exp.side === "left" ? "ml-12 text-left" : "mr-12 text-left"
// //                 }`}
// //               >
// //                 <div className="flex justify-between items-center">
// //                   <h3 className="text-cyan-400 font-bold text-lg">
// //                     {exp.role}
// //                   </h3>
// //                   <div className="flex items-center gap-2 text-gray-400 text-sm">
// //                     <FontAwesomeIcon icon={faCalendar} />
// //                     <span>{exp.date}</span>
// //                   </div>
// //                 </div>
// //                 <p className="mt-1 font-semibold">{exp.company}</p>
// //                 <div className="mt-4">
// //                   <h4 className="text-green-400 font-semibold mb-2">
// //                     Key Achievements
// //                   </h4>
// //                   <ul className="list-none  space-y-2">
// //                     {exp.achievements.map((item, i) => (
// //                       <li key={i} className="flex gap-2">
// //                         <span  className="text-green-400">➜</span>
// //                         <span  className="text-gray-300">{item}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ExperienceTimeline;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendar } from "@fortawesome/free-solid-svg-icons";
// const experiences = [
//   {
//     role: "React Developer",
//     company: "DeetyaSoft Pvt. Ltd.",
//     date: "Feb 2025 - Present",
//     achievements: [
//       "React Development for Web Applications.",
//       "Tailwind CSS for modern, responsive designs.",
//       "API Integration and full-stack development tasks.",
//       "Collaborating on end-to-end web development projects.",
//     ],
//     side: "right",
//   },
//   {
//     role: " Web Developer",
//     company: "4STEPS Digital Consulting",
//     date: "June 2024 - Feb 2025",
//     achievements: [
//       "Frontend Development: Expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js.",
//       "Backend Development: Proficiency in Node.js and database management using MongoDB.",
//       "APIs & Integrations: Familiarity with RESTful APIs and third-party integrations (payment gateways, social logins).",
//       "Version Control: Experience with Git and GitHub for collaboration and code management.",
//     ],
//     side: "left",
//   },
// ];

// const ExperienceTimeline = () => {
//   return (
//     <section className="relative max-w-6xl  py-16 items-center  text-white">
//       <h2 className="md:text-4xl text-3xl font-semibold text-center mb-4">
//         Professional Experience
//       </h2>
//       <p className="text-center mb-10 text-gray-400">
//         My professional journey and key accomplishments.
//       </p>

//       <div className="relative">
//         {/* Vertical Line (Hidden on Mobile) */}
//         <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-green-500 to-pink-500"></div>

//         <div className="space-y-5">
//           {experiences.map((exp, idx) => (
//             <div
//               key={idx}
//               className={`relative flex ${
//                 exp.side === "left" ? "justify-start" : "justify-end"
//               } md:flex`}
//             >
//               {/* Dot (Hidden on Mobile) */}
//               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
//                 <span className="w-6 h-6 bg-black border-4 border-cyan-500 rounded-full block"></span>
//               </div>

//               {/* Card */}
//               <div
//                 className={`w-full max-w-md md:p-6 p-4 rounded-lg bg-gray-900 shadow-lg ${
//                   exp.side === "left "
//                     ? "ml-12 md:text-left text-center"
//                     : "mr-12 md:text-left text-center"
//                 } mx-auto`}
//               >
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-cyan-400 font-semibold md:text-[20px] text-base ">
//                     {exp.role}
//                   </h3>

//                   <div className="inline-flex items-center gap-2 border border-gray-400 rounded-full px-4 py-1 text-white text-sm">
//                     <FontAwesomeIcon icon={faCalendar} />
//                     <span>{exp.date}</span>
//                   </div>
//                 </div>
//                 <p className="mt-1 text-lg font-semibold">{exp.company}</p>
//                 <div className="mt-4">
//                   <h4 className="text-green-400 text-sm font-semibold mb-2">
//                     Key Achievements
//                   </h4>
//                   <ul className="list-none space-y-2">
//                     {exp.achievements.map((item, i) => (
//                       <li key={i} className="flex gap-2">
//                         <span className="text-green-400 text-sm">➜</span>
//                         <span className="text-gray-400 text-sm">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceTimeline;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendar } from "@fortawesome/free-solid-svg-icons";

// const experiences = [
//   {
//     role: "Founding Engineer",
//     company: "2nd Swap",
//     date: "Jan 2025 - Apr 2025",
//     achievements: [
//       "Built backend infrastructure with 12+ RESTful endpoints and secure authentication, enabling real-time updates with <200ms latency for 50+ items and 25+ active users.",
//       "Created an OCR and OAuth verification system that reduced manual work by 20% while maintaining 99.8% platform uptime.",
//       "Architected complete backend using Node.js, Express, MongoDB, REST APIs, OAuth 2.0, and Socket.io.",
//     ],
//     side: "right",
//   },
//   {
//     role: "SDE Intern - Android Development",
//     company: "PMStack",
//     date: "Dec 2024 - Apr 2025",
//     achievements: [
//       "Developed mobile UI components with Flutter and integrated analytics for user insights; resolved critical bugs across Android versions through Crashlytics monitoring achieving 120+ beta users within the first month of beta release.",
//       "Boosted app performance through code restructuring and implementing architecture refinements like modularity; resolved 163 technical issues in frontend and backend systems.",
//       "Built applications using Flutter, Firebase, Dart, Google Analytics, Crashlytics, and Figma.",
//     ],
//     side: "left",
//   },
// ];

// const ExperienceTimeline = () => {
//   return (
//     <section className="relative py-16 bg-black text-white">
//       <h2 className="text-4xl font-bold text-center mb-4">
//         Professional Experience
//       </h2>
//       <p className="text-center mb-10 text-gray-400">
//         My professional journey and key accomplishments.
//       </p>

//       <div className="relative">
//         {/* Vertical Line */}
//         <div className="absolute left-1/2 transform hidden md:block -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-green-500 to-pink-500"></div>

//         <div className="space-y-20">
//           {experiences.map((exp, idx) => (
//             <div
//               key={idx}
//               className={`relative flex ${
//                 exp.side === "left" ? "justify-start" : "justify-end"
//               }`}
//             >
//               {/* Dot */}
//               <div className="absolute left-1/2 transform -translate-x-1/2">
//                 <span className="w-6 h-6 bg-black border-4 border-cyan-500 rounded-full block"></span>
//               </div>

//               {/* Card */}
//               <div
//                 className={`w-full max-w-md p-6 rounded-lg bg-gray-900 shadow-lg ${
//                   exp.side === "left" ? "ml-12 text-left" : "mr-12 text-left"
//                 }`}
//               >
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-cyan-400 font-bold text-lg">
//                     {exp.role}
//                   </h3>
//                   <div className="flex items-center gap-2 text-gray-400 text-sm">
//                     <FontAwesomeIcon icon={faCalendar} />
//                     <span>{exp.date}</span>
//                   </div>
//                 </div>
//                 <p className="mt-1 font-semibold">{exp.company}</p>
//                 <div className="mt-4">
//                   <h4 className="text-green-400 font-semibold mb-2">
//                     Key Achievements
//                   </h4>
//                   <ul className="list-none  space-y-2">
//                     {exp.achievements.map((item, i) => (
//                       <li key={i} className="flex gap-2">
//                         <span  className="text-green-400">➜</span>
//                         <span  className="text-gray-300">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceTimeline;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const experiences = [
  {
    role: "React Developer",
    company: "DeetyaSoft Pvt. Ltd.",
    date: "Feb 2025 - Present",
    achievements: [
      "React Development for Web Applications.",
      "Tailwind CSS for modern, responsive designs.",
      "API Integration and full-stack development tasks.",
      "Collaborating on end-to-end web development projects.",
    ],
    side: "right",
  },
  {
    role: " Web Developer",
    company: "4STEPS Digital Consulting",
    date: "June 2024 - Feb 2025",
    achievements: [
      "Frontend Development: Expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js.",
      "Backend Development: Proficiency in Node.js and database management using MongoDB.",
      "APIs & Integrations: Familiarity with RESTful APIs and third-party integrations (payment gateways, social logins).",
      "Version Control: Experience with Git and GitHub for collaboration and code management.",
    ],
    side: "left",
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="relative max-w-6xl  py-16 items-center  text-white">
      <h2 className="md:text-4xl text-2xl font-semibold text-center mb-4">
        Professional Experience
      </h2>
      <p className="text-center mb-10 text-gray-400">
        My professional journey and key accomplishments.
      </p>

      <div className="relative">
        {/* Vertical Line (Hidden on Mobile) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-green-500 to-pink-500"></div>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row ${
                exp.side === "left" ? "md:justify-start" : "md:justify-end"
              } items-center md:items-stretch`}
            >
              {/* Dot (Hidden on Mobile) */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                <span className="w-6 h-6 bg-black border-4 border-cyan-500 rounded-full block"></span>
              </div>

              {/* Card */}
              <div
                className={`w-full md:max-w-md p-6 rounded-lg bg-gray-900 shadow-lg mx-4 md:mx-0 ${
                  exp.side === "left"
                    ? "md:ml-12 text-center md:text-left"
                    : "md:mr-12 text-center md:text-left"
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 md:gap-0">
                  <h3 className="text-cyan-400 font-semibold text-base md:text-[20px]">
                    {exp.role}
                  </h3>
                  <div className="inline-flex items-center gap-2 border border-gray-400 rounded-full px-4 py-1 text-white text-sm mt-2 md:mt-0">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>{exp.date}</span>
                  </div>
                </div>

                <p className="mt-2 text-lg font-semibold">{exp.company}</p>

                <div className="mt-4">
                  <h4 className="text-green-400 text-sm font-semibold mb-2">
                    Key Achievements
                  </h4>
                  <ul className="list-none space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-green-400 text-sm mt-1">➜</span>
                        <span className="text-gray-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
