
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Github, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  const [role, setRole] = useState("Developer");
  
  useEffect(() => {
    const roles = ["Developer", "Designer", "Freelancer","Public Speaker"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % roles.length;
      setRole(roles[currentIndex]);
    }, 3000);

    document.body.style.backgroundColor = "#1A1F23";
    
    return () => {
      clearInterval(interval);
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-sm tracking-wider text-primary">WELCOME TO MY WORLD</h2>
            
            <h1 className="text-5xl font-bold space-y-2">
              <span className="block">Hi, I'm</span>
              <span className="block text-primary">KAMAL KISHORE V</span>
              <span className="block">a {role}.</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-lg animate-fade-in-slow">
              I thrive on tackling real-time challenges with an effective approach, never
              shying away from even the seemingly simpler tasks. Time is my most
              precious asset, and I guard it diligently, channeling my free moments into
              self-improvement endeavors.
            </p>

            <div className="pt-8">
              <h3 className="text-sm tracking-wider mb-4">FIND WITH ME</h3>
              <div className="flex space-x-4">
                <SocialLink href="https://github.com" icon={<Github />} />
                <SocialLink href="https://instagram.com" icon={<Instagram />} />
                <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-slow">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/lovable-uploads/cd113e6c-96cd-4a7e-94b1-1cbde562fee0.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-lg bg-muted hover:bg-primary transition-colors duration-200"
  >
    {icon}
  </a>
);

export default Index;
