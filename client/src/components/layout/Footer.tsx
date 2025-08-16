import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import regenesisLogo from "@assets/logo_1755340236820.png";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={regenesisLogo} 
                alt="Regenesis Health Solutions" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Leading the future of regenerative medicine through innovative treatments and 
              strategic partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Entrepreneurs", href: "/entrepreneurs" },
                { name: "Physicians", href: "/physicians" },
                { name: "About", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <div className="space-y-2">
              {[
                "IV Therapy Solutions",
                "Medical Spa Compliance",
                "Protocol Licensing",
                "Business Consultation",
                "Physician Partnerships",
              ].map((service) => (
                <p
                  key={service}
                  className="text-sm text-muted-foreground"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@regenesis.health</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">United States</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Regenesis Health Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
