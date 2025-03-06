
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="absolute bottom-2 md:bottom-6 left-0 right-0 flex justify-center animate-bounce"
    >
      <button
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        className="text-foreground/60 hover:text-foreground transition-colors group glass p-2 rounded-full"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
      </button>
    </motion.div>
  );
}
