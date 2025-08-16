import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Users,
  Stethoscope,
  Building2,
  Send,
  CheckCircle
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  inquiryType: z.enum(["entrepreneur", "physician", "consultation", "partnership", "other"]),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const inquiryTypes = [
  { value: "entrepreneur", label: "Entrepreneur / Investor", icon: Users },
  { value: "physician", label: "Physician / Medical Professional", icon: Stethoscope },
  { value: "consultation", label: "Business Consultation", icon: Building2 },
  { value: "partnership", label: "Partnership Opportunity", icon: Building2 },
  { value: "other", label: "Other Inquiry", icon: Mail }
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@regenesis.health",
    description: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Monday - Friday, 9AM - 6PM EST"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "United States",
    description: "Serving facilities nationwide"
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "24 Hours",
    description: "Average response time for inquiries"
  }
];

const faqs = [
  {
    question: "How long does the compliance process take?",
    answer: "Typically 3-6 months depending on state requirements and facility complexity."
  },
  {
    question: "What are the initial investment requirements?",
    answer: "Initial investments typically range from $250K to $500K depending on facility size and services."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we provide continuous compliance monitoring and business support throughout your journey."
  },
  {
    question: "How do physician royalties work?",
    answer: "Physicians earn 15-25% royalties on protocol usage, with monthly payments and detailed reporting."
  }
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "entrepreneur",
      subject: "",
      message: "",
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactForm.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Ready to Start Your Journey?
            </h1>
            <p className="text-xl text-white/90">
              Connect with our team of experts to explore opportunities in regenerative medicine
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <Card className="p-8 text-center">
                  <CardContent className="space-y-6 p-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="p-6">
                  <CardHeader className="p-0 pb-6">
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Tell us about your goals and we'll help you get started
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Smith" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="john@example.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+1 (555) 123-4567" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Company Name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="inquiryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Type of Inquiry</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select inquiry type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {inquiryTypes.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>
                                      <div className="flex items-center space-x-2">
                                        <type.icon className="h-4 w-4" />
                                        <span>{type.label}</span>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="How can we help you?" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your goals, timeline, and any specific questions you have..."
                                  className="min-h-[120px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full hero-gradient text-white hover:opacity-90"
                          disabled={submitContactForm.isPending}
                        >
                          {submitContactForm.isPending ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-0">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-0">
                  {faqs.map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-foreground">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      {index < faqs.length - 1 && <hr className="my-4" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-white/90">
              For urgent inquiries or to speak with our team directly, give us a call
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +1 (555) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6">
                <Mail className="mr-2 h-5 w-5" />
                Email: info@regenesis.health
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
