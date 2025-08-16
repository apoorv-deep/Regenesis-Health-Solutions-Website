import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Users, 
  Stethoscope, 
  Building2, 
  TrendingUp,
  Shield,
  Award
} from "lucide-react";

const heroProps = {
  title: "Revolutionizing Regenerative Medicine",
  subtitle: "Regenesis Health Solutions",
  description: "Bridging entrepreneurs and physicians to create compliant, profitable regenerative medicine ventures through innovative protocols and strategic partnerships.",
  primaryCTA: {
    text: "Explore Opportunities",
    href: "/entrepreneurs"
  },
  secondaryCTA: {
    text: "Learn More",
    href: "/about"
  }
};

const services = [
  {
    title: "For Entrepreneurs",
    description: "Complete compliance solutions for opening regenerative treatment facilities",
    features: [
      "Legal compliance guidance",
      "Medical spa setup support",
      "Regulatory navigation",
      "Business model optimization"
    ],
    badge: "Investors",
    gradient: "hero-gradient",
    href: "/entrepreneurs"
  },
  {
    title: "For Physicians",
    description: "Monetize your innovative protocols through our medical Spotify library",
    features: [
      "Protocol licensing opportunities",
      "Residual income streams",
      "Peer collaboration network",
      "Research support"
    ],
    badge: "Medical Professionals",
    gradient: "section-gradient",
    href: "/physicians"
  },
  {
    title: "Business Consultation",
    description: "Strategic guidance for regenerative medicine ventures",
    features: [
      "Market analysis",
      "Compliance consultation", 
      "Partnership facilitation",
      "Growth strategies"
    ],
    badge: "Consulting",
    gradient: "orange-gradient",
    href: "/about"
  }
];

const treatmentServices = [
  {
    title: "IV Glutathione Therapy",
    description: "Master antioxidant for cellular detoxification and anti-aging benefits",
    image: "https://pixabay.com/get/g9d52ff47d911155b24b47b3914766787f4bc40d9197dcd6d7bbaca4cce5bda85ec1c1e71cef9c9ce3316515d6362f0f2d026e4d99ba5b314f53a324fc60fd4fe_1280.jpg"
  },
  {
    title: "NAD+ Infusions", 
    description: "Cellular energy restoration and cognitive enhancement protocols",
    image: "https://pixabay.com/get/g5b383d05da5058cfe0bb5095dc7174d096958398b125425a7e7077c2e7428170747492253a9539abc54419d3e00528c7e0a966dbe92268616e69a108207a28e4_1280.jpg"
  },
  {
    title: "IV Hydration Therapy",
    description: "Rapid rehydration and nutrient delivery for optimal wellness",
    image: "https://pixabay.com/get/g99dfb2dfcc039887809e40c04a775480e39b620b795fa89fc3c0cf083837344f942cb4e3ca717aa49307572f5b8202d02bf7836be3682368b1279784bf5e65b8_1280.jpg"
  },
  {
    title: "Peptide Therapies",
    description: "Targeted peptide protocols for weight loss and metabolic optimization",
    image: "https://pixabay.com/get/g618aba3c6137c0df33eb7c8946c53c307ef0f318831f8c35485ae456196c09db2cc0e866f4e128dcf88fb49561c33e55507fa965091249209d5cf1a83c173809_1280.jpg"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Partner Physicians" },
  { icon: Building2, value: "150+", label: "Treatment Facilities" },
  { icon: Award, value: "95%", label: "Compliance Rate" },
  { icon: TrendingUp, value: "300%", label: "Average ROI" }
];

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero {...heroProps} />
      
      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">Our Vision</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Transforming Healthcare Through Innovation
              </h2>
              <p className="text-lg text-muted-foreground">
                To democratize access to cutting-edge regenerative medicine by creating 
                a seamless ecosystem where entrepreneurs can confidently enter the market 
                with full compliance support, while physicians can monetize their expertise 
                through our innovative protocol library system.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Regulatory compliance assurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Physician-entrepreneur partnerships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Sustainable revenue models</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-3 p-0">
                    <stat.icon className="h-8 w-8 text-primary mx-auto" />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Services 
        title="Our Solutions"
        subtitle="Comprehensive support for every stakeholder in the regenerative medicine ecosystem"
        services={services}
      />

      {/* Treatment Services */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Regenerative Medicine Treatments
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Cutting-edge therapies that our partner facilities offer to optimize health and longevity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentServices.map((treatment, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {treatment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the Regenesis ecosystem and be part of the regenerative medicine revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/entrepreneurs">
                <Button size="lg" className="hero-gradient text-white hover:opacity-90 px-8 py-6">
                  <Users className="mr-2 h-5 w-5" />
                  For Entrepreneurs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/physicians">
                <Button size="lg" variant="outline" className="px-8 py-6">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  For Physicians
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
