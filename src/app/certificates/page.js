"use client"
import React, { useState } from 'react';
import Dashboard from '../../components/Dashboard';
import Link from 'next/link';
import {listData} from "./data"

const CertificatesPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? listData
    : listData.filter(item => item.type === filter);

  return (
    <>
      <Dashboard />
      <div className="container pt-96 md:pt-11 sm:pt-11">
        {/* Header */}
        <div className="p-6 bg-slate-300 rounded-2xl">
          <div className="text-2xl font-bold pb-2">Portofolio</div>
          <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-400 to-blue-500"></div>

          {/* Filter */}
          <div className="flex pt-7 gap-2 text-blue-600 md:">
            <button onClick={() => setFilter('all')} className="hover:underline">All</button>
            <span className="px-1">.</span>
            <button onClick={() => setFilter('certificate')} className="hover:underline">Certificates</button>
            <span className="px-1">.</span>
            <button onClick={() => setFilter('project')} className="hover:underline">Projects</button>
          </div>
        </div>

        {/* Card Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <a
              key={item.id}
              href={item.link}
              target={item.type === 'certificate' ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="border p-4 rounded-xl shadow bg-white cursor-pointer 
                 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default CertificatesPage;
