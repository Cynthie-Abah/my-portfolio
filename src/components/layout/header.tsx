"use client";
import Link from "next/link";
import { Home, Briefcase, GraduationCap, UserCircle, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Me", href: "/about", icon: UserCircle },
    { name: "My Works", href: "/works", icon: Briefcase },
    { name: "Certifications", href: "/certifications", icon: GraduationCap },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Desktop header */}
      <header className="hidden sm:flex fixed top-2 sm:top-4 sm:right-4 z-50 border-2 border-blue-600 dark:border-blue-400 text-white rounded-lg shadow-lg h-14 items-center px-1 sm:px-4 space-x-1 sm:space-x-6 bg-transparent backdrop-blur-sm ">
        <nav className="flex items-center gap-1 sm:gap-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-2 sm:px-3 py-2 rounded-md text-[.78rem] sm:text-lg font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-blue-400 bg-blue-900/30"
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-700/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </header>

      <div className="fixed sm:hidden top-2 left-2 z-50 text-white rounded-lg flex flex-col  justify-center p-2 bg-transparent backdrop-blur-sm border-2 border-blue-600 dark:border-blue-400 shadow-2xl">
        <button className="hover:bg-gray-600/50" onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {
          isMobileMenuOpen ? 
          <X /> : 
           <Menu />
        }
         
        </button>

         {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden top-14 left-0 right-0 text-white shadow-lg py-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-blue-400 bg-blue-900/30"
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-700/50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      )}
      </div>

     
    </>
  );
}
