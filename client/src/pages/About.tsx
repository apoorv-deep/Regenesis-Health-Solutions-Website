import Hero from "@/components/sections/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  ArrowRight,
  Users,
  Target,
  Heart,
  Shield,
  Award,
  Building2,
  Stethoscope,
  TrendingUp,
  CheckCircle,
  Star
} from "lucide-react";

const heroProps = {
  title: "Regenesis Health Solutions",
  subtitle: "About Our Company",
  description: "The medical arm pioneering compliant regenerative medicine ventures through physician collaboration and innovative business models.",
  primaryCTA: {
    text: "Partner With Us",
    href: "/contact"
  },
  secondaryCTA: {
    text: "View Our Services",
    href: "#services"
  },
  backgroundImage: "https://pixabay.com/get/gb152d39438d118248dd6c0c03bc1abed17daa6323ed42d8ce46c6519ff58181a41ccaa0e04897f3dc6925fbb835e3e14746d84d5ec1f71cc880a65522deb337b_1280.jpg"
};

const coreValues = [
  {
    icon: Shield,
    title: "Compliance First",
    description: "Unwavering commitment to regulatory excellence and patient safety"
  },
  {
    icon: Heart,
    title: "Patient-Centered",
    description: "Every protocol and partnership serves the ultimate goal of better patient outcomes"
  },
  {
    icon: Users,
    title: "Collaborative Innovation",
    description: "Fostering partnerships between physicians, entrepreneurs, and healthcare leaders"
  },
  {
    icon: Award,
    title: "Excellence in Practice",
    description: "Setting the highest standards for regenerative medicine treatments"
  }
];

const services = [
  {
    title: "Medical Compliance Consultation",
    description: "Comprehensive regulatory guidance for regenerative medicine facilities",
    features: [
      "FDA compliance protocols",
      "State licensing support",
      "Medical director partnerships",
      "Ongoing compliance monitoring"
    ],
    icon: Shield
  },
  {
    title: "Physician Collaboration Network",
    description: "Connecting innovative physicians with entrepreneurial ventures",
    features: [
      "Protocol development support",
      "Medical oversight programs",
      "Continuing education platforms",
      "Research collaboration opportunities"
    ],
    icon: Stethoscope
  },
  {
    title: "Business Development Support",
    description: "Strategic guidance for sustainable regenerative medicine businesses",
    features: [
      "Market analysis and positioning",
      "Revenue model optimization",
      "Operational efficiency consulting",
      "Growth strategy development"
    ],
    icon: TrendingUp
  }
];

const teamHighlights = [
  {
    name: "Dr. Sarah Chen, MD",
    role: "Chief Medical Officer",
    specialty: "Regenerative Medicine",
    experience: "15+ years",
    description: "Leading expert in regenerative protocols with extensive research background"
  },
  {
    name: "Michael Rodriguez, JD",
    role: "Head of Compliance",
    specialty: "Healthcare Law", 
    experience: "12+ years",
    description: "Former FDA regulatory specialist ensuring comprehensive compliance"
  },
  {
    name: "Dr. Jennifer Park, MD",
    role: "Medical Director",
    specialty: "Anti-Aging Medicine",
    experience: "18+ years",
    description: "Pioneer in integrative regenerative treatments and physician education"
  }
];

const achievements = [
  {
    metric: "500+",
    label: "Partner Physicians",
    description: "Across the United States"
  },
  {
    metric: "150+", 
    label: "Facilities Supported",
    description: "Successfully launched"
  },
  {
    metric: "95%",
    label: "Compliance Rate",
    description: "Perfect regulatory record"
  },
  {
    metric: "$50M+",
    label: "Revenue Generated",
    description: "For our partners"
  }
];

const missionStatement = {
  vision: "To democratize access to cutting-edge regenerative medicine by creating a compliant ecosystem where innovation thrives and patients benefit from the best treatments available.",
  mission: "We bridge the gap between groundbreaking medical research and practical clinical application, ensuring that innovative regenerative treatments reach patients through properly regulated, financially sustainable healthcare ventures.",
  values: "Our commitment to compliance, innovation, and collaboration drives everything we do, from supporting entrepreneurs in launching successful medical spas to helping physicians monetize their expertise while advancing patient care."
};

export default function About() {
  return (
    <div className="space-y-0">
      <Hero {...heroProps} />
      
      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Purpose</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Transforming Healthcare Through Innovation
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardHeader className="pb-4 p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{missionStatement.vision}</p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardHeader className="pb-4 p-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{missionStatement.mission}</p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardHeader className="pb-4 p-0">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">Our Values</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{missionStatement.values}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision and partnership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support for every aspect of regenerative medicine ventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4 p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-0">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Experienced professionals leading the regenerative medicine revolution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamHighlights.map((member, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                      <span>{member.specialty}</span>
                      <span>•</span>
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable results from our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-2 p-0">
                  <div className="text-4xl font-bold text-primary">{achievement.metric}</div>
                  <div className="text-lg font-semibold text-foreground">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Healthcare Together?
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're an entrepreneur, physician, or healthcare leader, we have the expertise 
              and network to help you succeed in regenerative medicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="hero-gradient text-white hover:opacity-90 px-8 py-6">
                  <Building2 className="mr-2 h-5 w-5" />
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/entrepreneurs">
                <Button size="lg" variant="outline" className="px-8 py-6">
                  Explore Opportunities
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
