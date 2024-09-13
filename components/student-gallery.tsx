import Image from "next/image";
import { useState, useEffect } from "react";
import Kid from "@/public/kid.jpg";
const students = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  image: Kid,
}));

export function StudentGalleryComponent() {
  return (
    <div
      className="min-h-screen p-8 transition-colors duration-300 
          dark:bg-gray-900 text-yellow-100"
    >
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-500">
        BSIT-4 Student Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {students.map((student) => (
          <div
            key={student.id}
            className="group relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out bg-gray-800 hover:shadow-xl"
          >
            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
              <Image
                src={student.image}
                alt={student.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-16 overflow-hidden bg-gradient-to-t from-black  to-transparent  transition-all duration-300 ease-in-out bg-opacity-90">
              <p className="text-center py-2 px-4 text-sm font-semibold truncate ">
                {student.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
