"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import educationData from "@/data/educationdata";
const Education = () => {
  return (
    <>
      <div className="py-1 px- max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Education
        </h2>
        <p className="text-center text-gray-400 mb-10">
          My academic background and qualifications.
        </p>

        <div className="flex flex-col gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={` border 
              index === 0 ? 
            } rounded-xl p-6 flex justify-between items-start hover:border-cyan-400 transition`}
            >
              <div>
                <h3 className={`font-semibold text-lg ${edu.color}`}>
                  {edu.degree}
                </h3>
                <p className="text-gray-300 mb-2">{edu.institution}</p>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-green-400 font-bold text-right">
                {edu.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
