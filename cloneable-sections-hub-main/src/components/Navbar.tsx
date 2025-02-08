
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl hover:text-primary transition-colors">KK</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/about">ABOUT</NavLink>
              <NavLink href="/skills">SKILLS</NavLink>
              <NavLink href="/projects">PROJECTS</NavLink>
              <NavLink href="/services">SERVICES</NavLink>
              <NavLink href="/blog">BLOG</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
  <Link
    to={href}
    className={`text-sm tracking-wider hover:text-primary transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;
