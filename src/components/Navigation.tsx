import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Facebook,
  Home,
  Linkedin,
  Phone,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: <Home size={24} /> },
    { name: "About", href: "#about", icon: <User size={24} /> },
    { name: "Services", href: "#services", icon: <Briefcase size={24} /> },
    { name: "Career", href: "#career", icon: <BookOpen size={24} /> },
    { name: "Contact", href: "#contact", icon: <Phone size={24} /> },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/pentarix-labs",
      icon: <Linkedin size={24} />,
    },
    {
      name: "Facebook",

      href: "https://facebook.com/pentarixlabs",
      icon: <Facebook size={24} />,

    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Fixed Top Nav (for desktop) */}
      <motion.nav
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 h-20 bg-slate-900/90 backdrop-blur-md shadow-md transition-all duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/1.png"
                alt="Pentarix Logo"
                className="h-10 w-auto"
              />
          
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-gray-300 hover:text-white hover:bg-orange-500/90 transition-all duration-300 ease-in-out shadow-sm hover:shadow-orange-500/40 text-sm font-medium"
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Socials */}
              <div className="flex items-center space-x-4 border-l border-slate-600 pl-4 ml-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 hover:text-orange-500 transition"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Bottom Mobile Nav */}
      <AnimatePresence>
        {isMobile && (
          <motion.div
            key="mobile-bottom-menu"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 z-50 flex justify-around items-center h-20 px-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center text-gray-300 hover:text-white text-xs font-medium transition-all duration-200"
                aria-label={item.name}
              >
                <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-600 hover:bg-orange-500/90 hover:shadow-lg hover:shadow-orange-400/40 transition-all duration-300 ease-in-out">
                  {item.icon}
                </div>
                <span className="mt-1">{item.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
