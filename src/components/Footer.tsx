
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <img 
                src="/lovable-uploads/e3ed5bb8-2392-4714-bd06-8b894b381875.png" 
                alt="Pentarix Logo" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed max-w-md">
                Pentarix crafts precision-built solutions tailored to your unique needs. 
                We're committed to delivering on time every time without compromising quality.
              </p>
            </motion.div>
            
            <div className="text-orange-500 font-semibold text-lg mb-4">
              Precision Built | On-Time Always | Tailored to You | Scalable & Secure
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300 text-sm">
                    Kalutara North<br/>
                    Kalutara, Sri Lanka
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="text-orange-500 mt-1" size={18} />
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm">070 723 3731</p>
                  <p className="text-gray-300 text-sm">075 135 2570</p>
                  <p className="text-gray-300 text-sm">074 055 8858</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="text-orange-500 mt-1" size={18} />
                <p className="text-gray-300 text-sm">pentarixlabs@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Key Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile App Development",
                "AI Solutions",
                "Cloud Systems",
                "E-commerce Platforms",
                "Custom Software",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 Pentarix. All rights reserved. Built with precision and passion.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
