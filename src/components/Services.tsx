
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Cloud, 
  Brain, 
  Eye,
  Gamepad2,
  Shield,
  Building,
  Users,
  GraduationCap,
  Hospital,
  UserCheck,
  Home,
  Truck
} from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    { icon: Globe, title: "Web Development", description: "Modern, responsive websites and web applications" },
    { icon: ShoppingCart, title: "E-commerce Platform Development", description: "Complete online store solutions" },
    { icon: Smartphone, title: "Mobile App Development", description: "iOS and Android applications" },
    { icon: Cloud, title: "Cloud-Based System Development", description: "Scalable cloud solutions" },
    { icon: Brain, title: "AI Solutions", description: "Intelligent automation and machine learning" },
    { icon: Eye, title: "Augmented Reality (AR) Solutions", description: "Immersive AR experiences" },
    { icon: Eye, title: "Virtual Reality (VR) Applications", description: "Cutting-edge VR development" },
    { icon: Gamepad2, title: "Game Development", description: "Engaging gaming experiences" },
    { icon: Shield, title: "Blockchain Application Development", description: "Secure blockchain solutions" },
    { icon: Building, title: "ERP System Development", description: "Enterprise resource planning" },
    { icon: Users, title: "CRM System Development", description: "Customer relationship management" },
    { icon: GraduationCap, title: "Learning Management System (LMS)", description: "Educational platforms" },
    { icon: Hospital, title: "Hospital/Clinic Management System", description: "Healthcare solutions" },
    { icon: UserCheck, title: "HR & Payroll Software", description: "Human resource management" },
    { icon: Home, title: "Real Estate Management System", description: "Property management solutions" },
    { icon: Truck, title: "Logistics & Fleet Management System", description: "Transportation optimization" },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What We <span className="text-orange-500">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                  <service.icon className="text-orange-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4">
            Precision Built | On-Time Always | Tailored to You | Scalable & Secure
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
