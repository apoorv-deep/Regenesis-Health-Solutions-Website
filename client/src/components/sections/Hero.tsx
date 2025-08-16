import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA,
  backgroundImage 
}: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-4">
            <p className="text-lg text-white/90 font-medium tracking-wide uppercase">
              {subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance">
              {description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href={primaryCTA.href}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-white/10 to-transparent rounded-full animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-white/10 to-transparent rounded-full animate-pulse delay-1000" />
      </div>
    </section>
  );
}
