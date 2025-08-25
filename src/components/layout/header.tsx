"use client";
import Link from "next/link";
import { Home, Briefcase, GraduationCap, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
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
      <header className="flex fixed top-4 right-4 z-50 border-2 border-blue-600 dark:border-blue-400 text-white rounded-lg shadow-lg h-14 items-center px-4 space-x-6 bg-transparent backdrop-blur-sm">
        <nav className="flex items-center gap-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
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

      {/* Mobile header */}
      {/* <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-lg px-4 py-3 flex justify-between items-center">
        <span className="font-bold">My Site</span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-gray-700"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header> */}

      {/* Mobile menu dropdown */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-gray-800 text-white shadow-lg py-4 space-y-2 z-40">
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
      )} */}
    </>
  );
}
