
import Navbar from "../components/Navbar";
import { Code, Layout, Smartphone, Globe, Database, Cloud } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Creating responsive and dynamic web applications using modern technologies."
    },
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces for exceptional user experience."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with React Native."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "SEO Optimization",
      description: "Optimizing websites for better search engine visibility and performance."
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Database Design",
      description: "Designing and implementing efficient database structures."
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Cloud Solutions",
      description: "Implementing and managing cloud-based solutions for scalability."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h2 className="text-sm tracking-wider text-primary mb-4 animate-fade-in">MY SERVICES</h2>
        <h1 className="text-4xl font-bold text-white mb-12 animate-fade-in">What I Offer</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#1E2329] p-6 rounded-lg hover:bg-[#2A2F36] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4 p-3 bg-background/50 rounded-lg inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
