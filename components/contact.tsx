"use client";

import { useState } from 'react';
import { 
  Linkedin,
  Mail,
  MapPin,
  Github,
  Clock,
  CheckCircle,
  Copy,
  Send,
  User,
  MessageSquare
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO } from "@/lib/constants";

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${PERSONAL_INFO.email}`;
  };

  const handleLocationClick = () => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(PERSONAL_INFO.location)}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      
      setSubmitMessage('Opening your email client...');
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitMessage('');
      }, 3000);
      
    } catch (error) {
      setSubmitMessage('Error opening email client. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-muted/30 relative">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in-up animation-delay-200">
              Get In Touch
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in-up animation-delay-300">
              I'm always open to discussing new opportunities, interesting projects, and collaborations.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <Card className="hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in-left animation-delay-400">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Let's Connect</CardTitle>
              <p className="text-muted-foreground">
                Ready to start a conversation? Reach out through any of these channels.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div 
                  onClick={handleEmailClick}
                  className="contact-item flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer hover:scale-105 hover:translate-x-1 transition-all duration-200 group"
                >
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{PERSONAL_INFO.email}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyEmail();
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {copiedEmail ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                
                <div 
                  onClick={handleLocationClick}
                  className="contact-item flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer hover:scale-105 hover:translate-x-1 transition-all duration-200 group"
                >
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

                <div className="contact-item flex items-center gap-3 p-4 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Connect with me on social media
                </p>
                <div className="flex justify-center gap-3">
                  <a 
                    href={PERSONAL_INFO.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Button variant="outline" size="icon" className="hover:scale-110 hover:rotate-3 transition-all hover:border-primary/50">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                  <a 
                    href={PERSONAL_INFO.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Button variant="outline" size="icon" className="hover:scale-110 hover:rotate-3 transition-all hover:border-primary/50">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    aria-label="Send Email"
                  >
                    <Button variant="outline" size="icon" className="hover:scale-110 hover:rotate-3 transition-all hover:border-primary/50">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in-right animation-delay-500">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you soon
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {submitMessage && (
                  <div className="text-sm text-center p-2 rounded-md bg-primary/10 text-primary">
                    {submitMessage}
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full gap-2 hover:scale-105 transition-transform h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="pt-4 mt-4 border-t">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">What I'm looking for:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="hover:scale-110 transition-transform cursor-default">
                      Web Development
                    </Badge>
                    <Badge variant="secondary" className="hover:scale-110 transition-transform cursor-default">
                      System Admin
                    </Badge>
                    <Badge variant="secondary" className="hover:scale-110 transition-transform cursor-default">
                      Collaboration
                    </Badge>
                    <Badge variant="secondary" className="hover:scale-110 transition-transform cursor-default">
                      Freelance Work
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};