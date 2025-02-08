
import Navbar from "../components/Navbar";

const Project = () => {
  const projects = [
    {
      title: "CPU Scheduling",
      category: "CPU SCHEDULING",
      description: "A project for using CPU algorithms",
      image: "path-to-image-1"
    },
    {
      title: "Portfolio Website",
      category: "PORTFOLIO",
      description: "A project to display my achievements",
      image: "path-to-image-2"
    },
    {
      title: "Elective Course Selection",
      category: "ELECTIVE COURSE",
      description: "A project developed for choosing elective papers",
      image: "path-to-image-3"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1 className="text-4xl font-bold text-white mb-12">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="bg-[#1E2329] p-6 rounded-lg hover:bg-[#2A2F36] transition-all duration-300">
                <div className="h-48 bg-gray-800 rounded-lg mb-4"></div>
                <p className="text-primary text-sm mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
