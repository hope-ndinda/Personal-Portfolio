import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold mb-4">NISHIMWE NDINDABAHIZI Hope</h3>
            <p className="text-muted-foreground mb-4">
              Building exceptional digital experiences with code and creativity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                {/* <Link
                  href="/#experience"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </Link> */}
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/hope-ndinda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hope-nishimwe-7a8935305/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="hopenishimwe5@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Hope NISHIMWE NDINDABAHIZI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}