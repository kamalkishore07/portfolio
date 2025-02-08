
import Navbar from "../components/Navbar";
import { Code, Book, Award } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h2 className="text-sm tracking-wider text-primary mb-4">FEATURES</h2>
        <h1 className="text-4xl font-bold text-white mb-12">What I Do</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SkillCard
              icon={<Code className="w-8 h-8 text-primary" />}
              title="Coding"
              description="Coding is the art of turning logic into action, shaping tomorrow through keystrokes and creativity."
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SkillCard
              icon={<Book className="w-8 h-8 text-primary" />}
              title="Web Development"
              description="Web development is where pixels meet purpose, and creativity crafts digital experiences."
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SkillCard
              icon={<Award className="w-8 h-8 text-primary" />}
              title="Logo Designer"
              description="Logo design is the art of capturing essence in simplicity, where symbols resonate louder than words."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="p-6 rounded-lg bg-[#1E2329] hover:bg-[#2A2F36] transition-all duration-300 cursor-pointer hover-scale hover-glow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Skills;

