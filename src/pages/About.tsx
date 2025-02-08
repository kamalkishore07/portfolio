
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h2 className="text-sm tracking-wider text-primary mb-4 animate-fade-in">ABOUT ME</h2>
        <h1 className="text-4xl font-bold text-white mb-12 animate-fade-in">Professional Summary</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-400">
              I am a passionate developer with expertise in web development and design. My journey in tech has equipped me with
              skills in various technologies and frameworks, allowing me to create impactful digital solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <InfoItem label="Full Name" value="Kamal Kishore V" />
              <InfoItem label="Age" value="19 Years" />
              <InfoItem label="Nationality" value="Indian" />
              <InfoItem label="Languages" value="English, Tamil" />
              <InfoItem label="Location" value="Tamil Nadu, India" />
              <InfoItem label="Service" value="Freelance" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative hover-scale hover-glow"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="../public/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-[#1E2329] p-4 rounded-lg hover:bg-[#2A2F36] transition-colors duration-300 cursor-pointer hover-glow">
    <p className="text-gray-400 text-sm mb-1">{label}:</p>
    <p className="text-white">{value}</p>
  </div>
);

export default About;

