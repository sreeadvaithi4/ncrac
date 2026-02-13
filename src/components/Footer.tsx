import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-beige border-t border-border">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4 green-underline">Quick Links</h3>
            <ul className="mt-6 space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/important-dates" className="text-muted-foreground hover:text-primary transition-colors text-sm">Important Dates</Link></li>
              <li><Link to="/registration" className="text-muted-foreground hover:text-primary transition-colors text-sm">Registration</Link></li>
              <li><Link to="/committee" className="text-muted-foreground hover:text-primary transition-colors text-sm">Committee</Link></li>
              <li><Link to="/speakers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Speakers</Link></li>
              <li><Link to="/sponsors" className="text-muted-foreground hover:text-primary transition-colors text-sm">Sponsors</Link></li>
              <li><Link to="/travel" className="text-muted-foreground hover:text-primary transition-colors text-sm">Travel & Accommodation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4 green-underline">Contact</h3>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>📧 <a href="mailto:ncrac2026@iittp.ac.in" className="hover:text-primary transition-colors">ncrac2026@iittp.ac.in</a></p>
              <p>Department of Mechanical Engineering</p>
              <p>Indian Institute of Technology Tirupati</p>
              <p>Tirupati, Andhra Pradesh, India</p>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4 green-underline">NCRAC 2026</h3>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              National Conference on Refrigeration and Air Conditioning — bringing together researchers, academicians, industry professionals, and policymakers to discuss smart & sustainable HVAC systems.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 NCRAC. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Developed by <span className="text-primary font-semibold">Sree Advaithi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
