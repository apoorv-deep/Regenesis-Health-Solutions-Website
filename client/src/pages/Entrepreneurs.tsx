import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  ArrowRight,
  CheckCircle, 
  Shield,
  TrendingUp,
  Users,
  Building2,
  FileText,
  DollarSign,
  Clock,
  Star
} from "lucide-react";

const heroProps = {
  title: "Launch Your Regenerative Medicine Venture",
  subtitle: "For Entrepreneurs & Investors",
  description: "Complete compliance solutions and business guidance for opening profitable regenerative treatment facilities in the rapidly growing wellness market.",
  primaryCTA: {
    text: "Schedule Consultation",
    href: "/contact"
  },
  secondaryCTA: {
    text: "View Solutions",
    href: "#solutions"
  },
  backgroundImage: "https://pixabay.com/get/gc6387514a48a17cab13dbaeb22b360a6687e1fcd7ff1c443c6bf9edb42e78378cd183e29598851dba1fd2a1ead50f91a4f30f57b537e73e86a826fda71375663_1280.jpg"
};

const complianceServices = [
  {
    title: "Legal Compliance Framework",
    description: "Navigate complex regulations with our comprehensive legal guidance",
    features: [
      "State licensing requirements",
      "FDA compliance protocols",
      "Medical director partnerships",
      "Operational legal structure"
    ],
    badge: "Essential",
    gradient: "hero-gradient"
  },
  {
    title: "Business Setup Support",
    description: "End-to-end assistance for establishing your medical spa facility",
    features: [
      "Location selection criteria",
      "Equipment procurement",
      "Staff training programs",
      "Operational procedures"
    ],
    badge: "Comprehensive",
    gradient: "section-gradient"
  },
  {
    title: "Marketing & Growth",
    description: "Proven strategies to attract and retain high-value clients",
    features: [
      "Brand development",
      "Digital marketing campaigns",
      "Client retention programs",
      "Revenue optimization"
    ],
    badge: "Growth",
    gradient: "orange-gradient"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Regulatory Assurance",
    description: "Stay compliant with all federal and state regulations from day one"
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Our partners achieve an average 300% return on investment within 18 months"
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Access to vetted physicians and medical professionals"
  },
  {
    icon: Building2,
    title: "Turnkey Solutions",
    description: "Complete facility setup with operational guidance"
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description: "All necessary forms, protocols, and legal documentation"
  },
  {
    icon: DollarSign,
    title: "Financial Planning",
    description: "Revenue projections and business model optimization"
  }
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Medical Spa Owner",
    company: "Vitality Wellness Center",
    content: "Regenesis made our compliance journey seamless. We went from concept to opening in just 6 months with full regulatory confidence.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Healthcare Investor",
    company: "Wellness Ventures LLC",
    content: "The ROI exceeded our projections. Their business model guidance was instrumental in our success.",
    rating: 5
  }
];

const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    description: "Assess your goals, budget, and timeline for market entry"
  },
  {
    step: "2", 
    title: "Compliance Audit",
    description: "Review all regulatory requirements for your target location"
  },
  {
    step: "3",
    title: "Business Planning",
    description: "Develop comprehensive business plan and financial projections"
  },
  {
    step: "4",
    title: "Setup & Launch",
    description: "Guide facility setup, staff training, and market launch"
  }
];

export default function Entrepreneurs() {
  return (
    <div className="space-y-0">
      <Hero {...heroProps} />
      
      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">Market Opportunity</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                $15 Billion Regenerative Medicine Market
              </h2>
              <p className="text-lg text-muted-foreground">
                The regenerative medicine market is experiencing unprecedented growth, 
                with medical spas and wellness centers leading the charge in accessible treatments.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-4">
                  <CardContent className="space-y-2 p-0">
                    <div className="text-2xl font-bold text-primary">25%</div>
                    <div className="text-sm text-muted-foreground">Annual Growth Rate</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="space-y-2 p-0">
                    <div className="text-2xl font-bold text-primary">$2.3M</div>
                    <div className="text-sm text-muted-foreground">Average Annual Revenue</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="https://pixabay.com/get/g204b613499269fb838dd3e3195f358c0b565637dd6abd2ea2441dd56b325baaaf258ee47daad59e5891ca81ecf9625da8a0a118ecc38a17742f0ffeda8b2c147_1280.jpg"
                alt="Modern medical spa facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Services 
        title="Complete Compliance Solutions"
        subtitle="Everything you need to launch and operate a successful regenerative medicine facility"
        services={complianceServices}
      />

      {/* Benefits Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Regenesis?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach ensures your success from day one
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to get you from concept to successful operation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Hear from entrepreneurs who transformed their vision into profitable ventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
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
              Ready to Launch Your Medical Spa?
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule a consultation to discuss your vision and learn how we can help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="hero-gradient text-white hover:opacity-90 px-8 py-6">
                  <Clock className="mr-2 h-5 w-5" />
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="px-8 py-6">
                  Learn More About Us
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
