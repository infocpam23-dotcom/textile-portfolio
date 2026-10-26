import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-primary-foreground mb-4">Mohammad Rafiqul Islam</h3>
            <p className="text-primary-foreground/80 text-sm">
              Professional textile designer specializing in traditional and contemporary fabric designs.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social links will be added after the real profile URLs are confirmed. */}
          <div>
            <h4 className="text-primary-foreground mb-4">Social Profiles</h4>
            <p className="text-primary-foreground/80 text-sm">
              Social profile links will be added here once the correct accounts are available.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} Mohammad Rafiqul Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
