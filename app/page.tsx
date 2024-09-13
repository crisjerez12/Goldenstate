"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChevronDown,
  Facebook,
  Twitter,
  Youtube,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/logo.png";
import BSIT from "@/public/BSIT.jpg";
import GoldenPic from "@/public/golden.jpg";
import BECE from "@/public/kid.jpg";
import BSHM from "@/public/bshm.png";
const navItems = [
  {
    name: "About Us",
    href: "#",
    subItems: ["History", "Mission & Vision", "Faculty"],
  },
  {
    name: "Programs",
    href: "#",
    subItems: [
      "BSIT",
      "B Early Childhood Education",
      "BS Hospitality Management",
    ],
  },
  {
    name: "Admissions",
    href: "#",
    subItems: ["Requirements", "Process", "Scholarships"],
  },
  {
    name: "Student Life",
    href: "#",
    subItems: ["Activities", "Organizations", "Facilities"],
  },
  {
    name: "Contact",
    href: "#",
    subItems: ["Location", "Contact Form", "FAQs"],
  },
];

const carouselItems = [
  {
    image: GoldenPic,
    title: "Welcome to Goldenstate College of Kiamba Inc.",
    description:
      "Empowering minds, shaping futures. Discover our world-class programs in IT, Education, and Hospitality Management.",
  },
  {
    image: BSIT,
    title: "Innovative IT Education",
    description:
      "Our BSIT program equips students with cutting-edge skills for the digital age.",
  },
  {
    image: BECE,
    title: "Nurturing Early Childhood Educators",
    description:
      "Shape young minds with our B Early Childhood Education program.",
  },
  {
    image: BSHM,
    title: "Excellence in Hospitality",
    description:
      "Prepare for a global career with our BS Hospitality Management program.",
  },
];

const cardData = [
  { title: "BSIT", icon: "💻" },
  { title: "B Early Childhood Education", icon: "🎓" },
  { title: "BS Hospitality Management", icon: "🏨" },
];

export default function Page() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay
  };

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
      <header className="bg-[#324E9E] dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex space-x-4">
              <Button
                variant="link"
                className="text-white hover:text-[#FCD228] dark:hover:text-[#FCD228]"
              >
                Student Portal
              </Button>
              <Button
                variant="link"
                className="text-white hover:text-[#FCD228] dark:hover:text-[#FCD228]"
              >
                Alumni
              </Button>
              <Button
                variant="link"
                className="text-white hover:text-[#FCD228] dark:hover:text-[#FCD228]"
              >
                Contact Us
              </Button>
            </div>
            <div className="flex space-x-4 items-center">
              <Link
                href="#"
                className="hover:text-[#FCD228] dark:hover:text-[#FCD228]"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-[#FCD228] dark:hover:text-[#FCD228]"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-[#FCD228] dark:hover:text-[#FCD228]"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Button size="icon" onClick={toggleDarkMode} className="ml-2 ">
                {darkMode ? (
                  <Sun className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <Moon className="h-[1.2rem] w-[1.2rem]" />
                )}
              </Button>
            </div>
          </div>
        </div>
        <nav className="bg-white dark:bg-gray-900 text-[#324E9E] dark:text-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2 ">
                <Image
                  src={Logo}
                  className="h-8 w-8 md:h-14 md:w-14 aspect-square"
                  alt="goldenstate logo"
                />
                <div className="lg:text-xl font-bold text-[#324E9E] text-sm w-36 md:w-64 dark:text-white leading-4 font-serif">
                  Goldenstate College of Kiamba Inc.
                </div>
              </div>
              <div className="hidden md:flex space-x-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Button
                      variant="link"
                      className="text-[#324E9E] dark:text-white hover:text-[#EC3237] dark:hover:text-[#FCD228]"
                    >
                      {item.name} <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                    {activeDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-10">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-[#324E9E] dark:text-white hover:bg-[#FCD228] hover:text-[#324E9E] dark:hover:bg-[#324E9E] dark:hover:text-[#FCD228]"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Menu
              </Button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 py-2">
              {navItems.map((item) => (
                <div key={item.name} className="px-4 py-2">
                  <Button
                    variant="link"
                    className="text-[#324E9E] dark:text-white w-full justify-start"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                  >
                    {item.name} <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                  {activeDropdown === item.name && (
                    <div className="ml-4 mt-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem}
                          href="#"
                          className="block py-2 text-sm text-[#324E9E] dark:text-white hover:text-[#EC3237] dark:hover:text-[#FCD228]"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>
      </header>
      <main className="flex-grow bg-white dark:bg-gray-900">
        <div className="relative h-[400px] md:h-[600px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={{
                enter: (direction) => ({
                  y: direction > 0 ? 1000 : -1000,
                  opacity: 0,
                }),
                center: {
                  zIndex: 1,
                  y: 0,
                  opacity: 1,
                },
                exit: (direction) => ({
                  zIndex: 0,
                  y: direction < 0 ? 1000 : -1000,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <Image
                src={carouselItems[currentSlide].image}
                alt={carouselItems[currentSlide].title}
                height={0}
                width={0}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                <div className="text-center max-w-4xl px-4">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {carouselItems[currentSlide].title}
                  </h1>
                  <p className="text-md md:text-xl mb-8">
                    {carouselItems[currentSlide].description}
                  </p>
                  <Button className="bg-[#FCD228] text-[#324E9E] hover:bg-yellow-600 hover:text-white dark:bg-[#324E9E] dark:text-[#FCD228] dark:hover:bg-blue-950 dark:hover:text-white transition-colors duration-300">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="outline"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-transparent hover:bg-transparent border-none  hover:text-[#324E9E] dark:hover:text-[#FCD228] z-10 opacity-40 hover:opacity-100 hover:scale-150 duration-200"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white  bg-transparent border-none  hover:bg-transparent  hover:text-[#324E9E]  dark:hover:text-[#FCD228] z-10 opacity-40 hover:opacity-100 hover:scale-150 duration-200"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {cardData.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:bg-[#324E9E] dark:hover:bg-[#FCD228] transition-colors duration-300 border-2 border-[#324E9E] dark:border-[#FCD228]">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-[#FCD228] dark:bg-[#324E9E] group-hover:bg-white transition-colors duration-300">
                        <span className="text-3xl">{card.icon}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-center mb-2 text-[#324E9E] dark:text-[#FCD228] group-hover:text-white dark:group-hover:text-[#324E9E] transition-colors duration-300">
                        {card.title}
                      </h2>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="link"
                        className="w-full text-[#324E9E] dark:text-[#FCD228] group-hover:text-[#FCD228] dark:group-hover:text-[#324E9E] transition-colors duration-300"
                      >
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <footer className="bg-[#324E9E] dark:bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Poblacion, Kiamba, Sarangani Province</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@goldenstatecollegekiamba.edu</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#FCD228] dark:hover:text-[#FCD228]"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#FCD228] dark:hover:text-[#FCD228]"
                  >
                    Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#FCD228] dark:hover:text-[#FCD228]"
                  >
                    Campus Life
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#FCD228] dark:hover:text-[#FCD228]"
                  >
                    Career Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="hover:text-[#FCD228] dark:hover:text-[#FCD228]"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#FCD228] dark:hover:text-[#FCD228]"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#FCD228] dark:hover:text-[#FCD228]"
                >
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>
              &copy; 2023 Goldenstate College of Kiamba Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
