import React from 'react'

const Footer = () => {
  return (
    
    <div className="bg-gray-800 text-white py-4 mt-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Bagian teks */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>

        {/* Bagian link sosial media */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left mb-12 sm:mb-0">
          <a
            href="https://github.com/Muto7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muchamad-supriyanto/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer