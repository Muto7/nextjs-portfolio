import Image from "next/image";
import DataImage from "../data/data";

const About = () => {
  return (
    <div className="container">
      <div className="p-6 bg-slate-300 rounded-2xl">
        <div  className="text-2xl">About</div>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-400 to-blue-500"></div>
          <div className="mt-4 space-y-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed">
            <p >
            I am a passionate DevOps enthusiast and L2 Application Support engineer, highly skilled in infrastructure provisioning, automation, and configuration management. I have contributed to major projects such as the myTelkomsel application in the role of a DevOps Engineer.
            </p>
            <p >
              I am proficient in using key DevOps tools such as Jenkins and Ansible to streamline development processes and improve efficiency. I have hands-on experience managing and monitoring services and infrastructure on AWS, ensuring high availability within Kubernetes clusters. I am also well-versed in monitoring tools like Splunk, Grafana, and Datadog. I successfully implemented traffic routing using Kong API Gateway to ensure proper service targeting and request distribution. My automation skills are strongly rooted in CI/CD pipelines and Bash scripting, which I use to reduce manual effort and enhance operational efficiency.
            </p>
            <p>Having led large-scale projects, I am deeply committed to continuous learning and professional growth. I am determined to further pursue my path in both DevOps and L2 Application Support, seizing every opportunity to grow and contribute effectively.</p>
          </div>
          <div className="text-lg sm:text-xl font-semibold mt-9">What i'm Doing</div>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-400 to-blue-500"></div>
          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-2">
             <div className="p-6 max-w-md mx-auto mt-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
             <Image src={DataImage.Connection1} alt="Profile" width={120} height={80} className="mx-auto w-12 h-auto" priority />
              <h2 className="font-semibold text-black text-base sm:text-lg text-center">Devops</h2>
              <p className="mt-2 text-black/80 text-base sm:text-lg text-center">
                I enjoy automating processes and improving existing systems to enhance delivery speed and quality, while achieving CI/CD.
              </p>
          </div>
            <div className="p-6 max-w-md mx-auto mt-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
            <Image src={DataImage.Responsibility1} alt="Profile" width={120} height={80} className="mx-auto w-12 h-auto" priority />
              <h2 className="font-semibold text-black text-base sm:text-lg text-center">L2 Application Support</h2>
              <p className="mt-2 text-black/80 text-base sm:text-lg text-center">
                I enjoy providing technical support, diagnosing and resolving incidents, and implementing improvements to optimize application performance and ensure operational stability.
              </p>
            </div>
            <div className="p-6 max-w-md mx-auto mt-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
            <Image src={DataImage.Settings1} alt="Profile" width={120} height={80} className="mx-auto w-12 h-auto" priority />
              <h2 className="font-semibold text-black text-base sm:text-lg text-center">Cloud Engineer</h2>
              <p className="mt-2 text-black/80 text-base sm:text-lg text-center">
                I enjoy designing, deploying, and managing cloud infrastructure, optimizing performance, and ensuring scalability, and reliability.
              </p>
            </div>
            <div className="p-6 max-w-md mx-auto mt-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
            <Image src={DataImage.WebProgramming} alt="Profile" width={120} height={80} className="mx-auto w-12 h-auto" priority />
              <h2 className="font-semibold text-black text-base sm:text-lg text-center">Software Developer</h2>
              <p className="mt-2 text-black/80 text-base sm:text-lg text-center">
                I enjoy learning software development either for personal or specific purposes
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}



export default About