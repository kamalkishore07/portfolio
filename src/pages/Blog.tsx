
import Navbar from "../components/Navbar";

const Blog = () => {
  const blogs = [
    {
      title: "The Future of Web Development",
      category: "DEVELOPMENT",
      date: "March 15, 2024",
      description: "Exploring upcoming trends in web development and their impact on the industry."
    },
    {
      title: "Design Systems in 2024",
      category: "DESIGN",
      date: "March 10, 2024",
      description: "Understanding the importance of design systems in modern web applications."
    },
    {
      title: "Freelancing Tips & Tricks",
      category: "FREELANCE",
      date: "March 5, 2024",
      description: "Essential tips for succeeding as a freelance developer in today's market."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h2 className="text-sm tracking-wider text-primary mb-4 animate-fade-in">MY BLOG</h2>
        <h1 className="text-4xl font-bold text-white mb-12 animate-fade-in">Latest Articles</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className="group bg-[#1E2329] p-6 rounded-lg hover:bg-[#2A2F36] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 bg-gray-800 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
              </div>
              <p className="text-primary text-sm mb-2">{blog.category}</p>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-400 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-500">{blog.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
