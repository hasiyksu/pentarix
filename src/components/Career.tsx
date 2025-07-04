import { motion } from "framer-motion";
import { Award, Briefcase, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";

// Icon mapping to be used with fetched data
const iconMap: Record<string, JSX.Element> = {
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

const Career = () => {
  const [careerPaths, setCareerPaths] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const benefits = [
    "Competitive salary packages",
    "Flexible remote work options",
    "Professional development opportunities",
    "Health and wellness benefits",
    "Modern development tools",
    "Collaborative team environment",
  ];

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await fetch("/api/careers"); // Replace with your real backend endpoint
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setCareerPaths(data);
        }
      } catch (err) {
        console.error("Failed to fetch careers:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  return (
    <section id="career" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Build Your Career with <span className="text-orange-500">Pentarix</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join our growing team of passionate developers and innovators. We offer clear career progression 
            paths and the opportunity to work on cutting-edge projects that make a real impact.
          </p>
        </motion.div>

        {/* Career Paths */}
        {loading ? (
          <p className="text-center text-gray-400">Loading career opportunities...</p>
        ) : careerPaths.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {careerPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 p-3 rounded-lg mr-4">
                    {iconMap[path.icon] || <Briefcase className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{path.title}</h3>
                    <p className="text-orange-400 text-sm">{path.level}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{path.description}</p>
                <div className="flex flex-wrap gap-2">
                  {path.skills?.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-600 text-orange-400 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-300 mb-16">
            <p className="mb-4">
              <strong className="text-orange-400">Currently, no openings are available.</strong>
            </p>
            <p>
              But you can still send your CV to our team — we’ll consider you when opportunities arise.
            </p>
          </div>
        )}

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-700 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Why Choose Pentarix?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center text-gray-300"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                {benefit}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Join Our Team
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
