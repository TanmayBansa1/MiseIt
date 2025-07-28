import { motion} from "framer-motion";
import { Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function TestimonialCard({ name, role, content, rating, delay = 0 }: {
    name: string;
    role: string;
    content: string;
    rating: number;
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
        className="bg-gradient-to-br from-gray-900/90 to-black/90 p-8 rounded-3xl hover:bg-gray-800/90 hover:shadow-2xl transition-all duration-500 border border-white/10 backdrop-blur-xl"
      >
        <div className="flex items-center space-x-1 mb-6">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
          ))}
        </div>
        
        <p className="text-gray-300 mb-8 leading-relaxed text-lg font-sans">
          "{content}"
        </p>
        
        <div>
          <div className="font-display font-bold text-white text-xl">{name}</div>
          <div className="text-cyan-400 font-sans font-medium">{role}</div>
        </div>
      </motion.div>
    );
  }