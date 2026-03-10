import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoIitt from "@/assets/images/logo_iitt.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/important-dates", label: "Timeline & Guidelines" },
  { path: "/registration", label: "Registration" },
  { path: "/committee", label: "Committee" },
  { path: "/speakers", label: "Speakers" },
  { path: "/sponsors", label: "Sponsors" },
  { path: "/travel", label: "Travel" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-bold text-primary-foreground tracking-wide">
          NCRAC 2026
        </Link>

        {/* Desktop nav + logo */}
        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-accent text-accent-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <img src={logoIitt} alt="IIT Tirupati" className="h-10 w-auto ml-2 bg-white/90 rounded p-0.5" />
        </div>

        {/* Mobile: logo + toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <img src={logoIitt} alt="IIT Tirupati" className="h-8 w-auto bg-white/90 rounded p-0.5" />

          <button
            className="text-primary-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/20">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-accent text-accent-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
