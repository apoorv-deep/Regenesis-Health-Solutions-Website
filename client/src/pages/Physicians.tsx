import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  ArrowRight,
  DollarSign,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Clock,
  Shield,
  Lightbulb,
  Network,
  Star,
  CheckCircle
} from "lucide-react";

const heroProps = {
  title: "Monetize Your Medical Expertise",
  subtitle: "For Physicians & Medical Professionals", 
  description: "Transform your innovative protocols into residual income streams through our medical Spotify library system and physician collaboration network.",
  primaryCTA: {
    text: "Join Our Network",
    href: "/contact"
  },
  secondaryCTA: {
    text: "Learn How It Works",
    href: "#how-it-works"
  },
  backgroundImage: "https://pixabay.com/get/g75aff98c92674a1bba9bbadf3ce3d4f2741e709f4fa4746e6dd61e52253e3d1cbe134153333de281d2c0f94515ffe09d90a2799c75ec9bddb2f2cedfc406e529_1280.jpg"
};

const revenueStreams = [
  {
    title: "Protocol Licensing",
    description: "License your proven treatment protocols to partner facilities worldwide",
    features: [
      "Residual royalty payments",
      "IP protection support",
      "Global distribution network",
      "Performance analytics"
    ],
    badge: "Primary Revenue",
    gradient: "hero-gradient"
  },
  {
    title: "Consultation Services", 
    description: "Provide expert guidance to new facilities and fellow physicians",
    features: [
      "Remote consultations",
      "Training programs",
      "Best practice sharing",
      "Continuing education"
    ],
    badge: "Professional Growth",
    gradient: "section-gradient"
  },
  {
    title: "Research Collaboration",
    description: "Participate in cutting-edge research with industry compensation",
    features: [
      "Clinical trial participation",
      "Research publication support",
      "Grant opportunities",
      "Academic partnerships"
    ],
    badge: "Innovation",
    gradient: "purple-gradient"
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Recurring Revenue",
    description: "Earn ongoing royalties from protocol usage across our network",
    metric: "Up to $50K/month"
  },
  {
    icon: Network,
    title: "Global Reach",
    description: "Your protocols can be implemented in facilities worldwide",
    metric: "150+ Facilities"
  },
  {
    icon: Shield,
    title: "IP Protection",
    description: "Complete intellectual property protection for your innovations",
    metric: "100% Secure"
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Build your reputation as a thought leader in regenerative medicine",
    metric: "Industry Status"
  },
  {
    icon: Users,
    title: "Peer Network",
    description: "Connect with like-minded physicians and researchers",
    metric: "500+ Members"
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    description: "Access to the latest research and treatment innovations",
    metric: "Continuous Learning"
  }
];

const successStories = [
  {
    name: "Dr. Jennifer Rodriguez",
    specialty: "Regenerative Medicine",
    protocol: "Advanced NAD+ Protocols",
    monthlyRevenue: "$45,000",
    facilitiesUsing: 87,
    testimonial: "The Regenesis platform has allowed me to share my research globally while generating substantial passive income. It's transformed my practice."
  },
  {
    name: "Dr. Michael Thompson",
    specialty: "Anti-Aging Medicine",
    protocol: "Peptide Therapy Combinations",
    monthlyRevenue: "$32,000", 
    facilitiesUsing: 62,
    testimonial: "I never imagined my protocols could reach so many patients. The royalty system is transparent and payments are always on time."
  }
];

const howItWorks = [
  {
    step: "1",
    title: "Submit Your Protocol",
    description: "Share your proven treatment protocols with detailed documentation"
  },
  {
    step: "2",
    title: "Peer Review Process", 
    description: "Our medical board reviews protocols for safety and efficacy"
  },
  {
    step: "3",
    title: "Platform Integration",
    description: "Approved protocols are added to our medical library system"
  },
  {
    step: "4",
    title: "Start Earning",
    description: "Receive royalties each time your protocol is implemented"
  }
];

const protocolCategories = [
  "IV Therapy Protocols",
  "Peptide Combinations",
  "Stem Cell Applications", 
  "Regenerative Aesthetics",
  "Longevity Medicine",
  "Metabolic Optimization"
];

export default function Physicians() {
  return (
    <div className="space-y-0">
      <Hero {...heroProps} />
      
      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">Medical Spotify Model</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Your Protocols, Global Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                Just like Spotify revolutionized music distribution, we're transforming 
                how medical protocols are shared and monetized. Your expertise can now 
                generate revenue streams while helping patients worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Passive income from protocol usage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Global distribution network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Complete IP protection</span>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="https://pixabay.com/get/g0e7bf9364d5f4eaf6c7fb7614279aa41782bbd2882b487f6c9e6795c09481a5e4930462855d48ebd147acde7c2affd956dba341cfa885e1419c7518aec937130_1280.jpg"
                alt="Professional physician consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <Services 
        title="Multiple Revenue Streams"
        subtitle="Diversify your income while advancing the field of regenerative medicine"
        services={revenueStreams}
      />

      {/* Benefits Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Platform Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of physicians already earning from their expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {benefit.metric}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps to start monetizing your medical expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center space-y-4 relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Physician Success Stories
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real physicians earning substantial income through our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4 p-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl">{story.name}</CardTitle>
                      <p className="text-muted-foreground">{story.specialty}</p>
                    </div>
                    <Badge variant="secondary">{story.protocol}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{story.monthlyRevenue}</div>
                      <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{story.facilitiesUsing}</div>
                      <div className="text-sm text-muted-foreground">Facilities Using</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground italic">"{story.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Protocol Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We accept protocols across all areas of regenerative medicine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {protocolCategories.map((category, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-2 p-0">
                  <Lightbulb className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground">{category}</h3>
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
              Ready to Monetize Your Expertise?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our physician network and start earning from your innovative protocols
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="hero-gradient text-white hover:opacity-90 px-8 py-6">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Network
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="px-8 py-6">
                  Learn More
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
