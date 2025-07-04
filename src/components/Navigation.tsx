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
    { name: "Home", href: "#home", icon: <Home size={20} /> },
    { name: "About", href: "#about", icon: <User size={20} /> },
    { name: "Services", href: "#services", icon: <Briefcase size={20} /> },
    { name: "Career", href: "#career", icon: <BookOpen size={20} /> },
    { name: "Contact", href: "#contact", icon: <Phone size={20} /> },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/pentarix-labs",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1A5LtSj6R4/",
      icon: <Facebook size={20} />,
    },
  ];

  // Detect screen size
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
        className="fixed top-0 left-0 right-0 z-50 h-16 bg-slate-900/90 backdrop-blur-md shadow-md transition-all duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/e3ed5bb8-2392-4714-bd06-8b894b381875.png"
                alt="Pentarix Logo"
                className="h-8 w-auto"
              />
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-semibold transition duration-200"
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Socials */}
              <div className="flex items-center space-x-3 border-l border-slate-600 pl-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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

      {/* Bottom Mobile Nav (Always Visible on Mobile) */}
      <AnimatePresence>
        {isMobile && (
          <motion.div
            key="mobile-bottom-menu"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 z-50 flex justify-around items-center h-16 px-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center text-gray-300 hover:text-orange-500 text-xs font-semibold transition"
                aria-label={item.name}
              >
                {item.icon}
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
