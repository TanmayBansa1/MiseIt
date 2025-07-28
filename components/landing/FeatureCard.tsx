import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function FeatureCard({ icon, title, description, color, delay = 0 }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    bgColor: string;
    delay?: number;
  }) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay, duration: 0.8 }}
        className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 p-8 rounded-3xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:-translate-y-4 border border-white/10 backdrop-blur-xl overflow-hidden"
      >
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color} rounded-t-3xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}></div>
        
        <div className={`mb-8 p-6 rounded-2xl bg-gradient-to-r ${color} text-white w-fit group-hover:scale-110 transition-transform duration-500`}>
          {icon}
        </div>
  
        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
  
        <p className="text-gray-400 leading-relaxed text-lg">
          {description}
        </p>
      </motion.div>
    );
  }