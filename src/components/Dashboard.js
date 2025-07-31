"use client";

import Image from "next/image";
import DataImage from "../../public/data";
import Link from "next/link";

const PDF_FILE_URL =
  "https://muto-portofolio.vercel.app/Muchamad_Supriyanto_CV_Mei.pdf";

export default function Dashboard() {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="bg-slate-300 rounded-2xl p-2 h-44 md:h-44 sm:h-full">
      {/* Grid untuk layar md ke atas, tumpuk tengah di layar kecil */}
      <div className="grid md:grid-cols-5 md:grid-rows-5 gap-4 min-h-40">
        
        {/* Foto */}
        <div className="bg-slate-700 w-32 h-32 md:w-40 md:h-full rounded-lg flex items-center justify-center row-span-3 col-start-1 row-start-2 mx-auto md:ml-6">
          <Image src={DataImage.Profile} alt="Profile" width={120} height={80} className="" priority />
        </div>

        {/* Nama & Role */}
        <div className="p-4 pt-8 md:col-span-2 md:row-span-5 md:col-start-2 md:row-start-1 text-center md:text-left flex flex-col items-center md:items-start">
          <p className="font-bold text-2xl">Muchamad Supriyanto</p>
          <p className="text-base font-light">Devops | SRE | L2 Application</p>
          <div className="pt-2 flex justify-center md:justify-start gap-3 text-xl">
            <Link href="#"><i className="ri-instagram-line" /></Link>
            <Link href="#"><i className="ri-github-line" /></Link>
            <Link href="#"><i className="ri-linkedin-box-line" /></Link>
            <Link href="#"><i className="ri-flag-2-line" /></Link>
          </div>
        </div>

        {/* Kontak & CV */}
        <div className="p-4 pt-7 md:col-span-2 md:row-span-5 md:col-start-4 md:row-start-1">
          <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left items-center md:items-start space-y-2 md:space-y-0">
            
            {/* Email & Location */}
            <div className="flex flex-col space-y-2">
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-gray-700">msupri29@gmail.com</p>
              </div>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-gray-700">Jakarta, ID</p>
              </div>
            </div>

            {/* Tombol Resume */}
            <button
              type="button"
              className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-gray-200 rounded-md hover:text-custom-thrid transition-transform duration-300 transform hover:scale-105"
              onClick={() => downloadFileAtURL(PDF_FILE_URL)}
            >
              <i className="ri-mail-download-line w-5 h-5 mr-2 animate-bounce"></i>
              <span className="text-sm font-medium">Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
