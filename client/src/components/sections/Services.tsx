import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface Service {
  title: string;
  description: string;
  features: string[];
  badge?: string;
  gradient?: string;
  href?: string;
}

interface ServicesProps {
  title: string;
  subtitle: string;
  services: Service[];
}

export default function Services({ title, subtitle, services }: ServicesProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
              <div className={`h-2 ${service.gradient || 'hero-gradient'}`} />
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {service.href && (
                    <div className="pt-4">
                      <Link href={service.href}>
                        <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                          Learn More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
