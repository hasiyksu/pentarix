import { motion } from "framer-motion";
import { ArrowRight, Code, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Crafting Digital
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  {" "}Excellence
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              We transform your vision into powerful, scalable solutions. From web development to AI integration, 
              Pentarix delivers precision-built technology that drives your business forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Our Services
              </motion.a>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start"
            >
              {[
                { icon: Code, text: "Custom Development" },
                { icon: Zap, text: "Fast Delivery" },
                { icon: Shield, text: "Secure & Scalable" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <feature.icon className="text-orange-500" size={20} />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
             <video
  src="lovable-uploads/ss.mp4"
  className="shadow-2xl w-full h-auto aspect-[1/1]"
  autoPlay
  loop
  muted
  playsInline
  style={{
    clipPath: 'circle(40% at 40% 40%)',
    WebkitClipPath: 'circle(40% at 50% 50%)',
    borderRadius: '40%',
  }}
/>

              {/* Optional glow overlay — use only if needed */}
              {/* <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                  WebkitClipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                  background: 'linear-gradient(to top right, rgba(255, 165, 0, 0.2), transparent)'
                }}
              ></div> */}
            </div>

            {/* Floating Icon */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-full shadow-xl"
            >
              <Code size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
