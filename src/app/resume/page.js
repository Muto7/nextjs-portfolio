import Dashboard from "../../components/Dashboard";
import { experienceList, skillList, skills} from "./data";
import Image from "next/image";

const ResumePage = () => {
  return (
    <>
      <Dashboard />
      <div className="container pt-96 md:pt-11 sm:pt-11">
        <div className="p-6 bg-slate-300 rounded-2xl">
          <div className="flex items-center gap-3 pb-2">
            <div className="text-2xl bold">Resume</div>
          </div>
          <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-400 to-blue-500"></div>
            <div className="pt-4">
              <div className="flex items-center gap-3 pb-2">
                <i className="ri-briefcase-line ri-2x"></i>
                <div className="text-2xl bold">Experience List</div>
              </div>
              <div className="relative border-l border-blue-500 pl-6">
              {experienceList.map((exp, i) => (
                  <div key={i} className="mb-10">
                    <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <h6 className="text-sm text-gray-500">Project: {exp.project}</h6>
                    <div className="text-sm text-gray-500">{exp.date}</div>

                    <ul className="mt-2 text-sm text-gray-600 space-y-1 text-justify leading-relaxed">
                      {exp.tasks.map((task, index) => (
                        <li key={index}>- {task}</li>
                      ))}
                    </ul>

                    <p className="mt-2 font-semibold">{exp.location}</p>
                  </div>
                ))}
              </div>
            </div>
              <div className=" grid grid-cols-1 grid-rows-1">
                <div className="p-6  mt-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-4">
                      <i className="ri-graduation-cap-line ri-xl"></i>
                      <h2 className="font-semibold text-black text-base sm:text-lg">Education</h2>
                    </div>
                    <p className="mt-2 text-black/80 text-base sm:text-lg">
                      Tekik Informatika
                    </p>
                    <p className="text-slate-500 text-base sm:text-lg">Universitas Pamulang - Bachelor&apos;s Degree</p>
                    <p className="text-slate-500 text-base sm:text-lg">IPK : 3.59</p>
                  </div>
              </div>
              <div className="mt-9">
                  <div className="text-2xl bold">Skills</div>
                  <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-400 to-blue-500"></div>
                </div>
              <div className="mt-8">
                  {skills.map((item, i) => (
                    <div key={i} className="mb-4">
                      <div className="flex justify-between text-sm text-black mb-1">
                        <span>{item.skill}</span>
                        <span>{item.level}</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full"
                          style={{ width: item.percent }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              <div className="pt-12">
                <div>
                  <div className="text-2xl bold">Code Skills</div>
                  <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-400 to-blue-500"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                    {skillList.map((imgl, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg"
                      >
                        <Image src={imgl.svgfile} alt="Profile" width={120} height={80} className="mx-auto w-12 h-auto" priority />
                        <div className="text-sm font-medium">{imgl.name}</div>
                      </div>
                    ))}
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default ResumePage