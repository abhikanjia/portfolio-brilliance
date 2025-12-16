import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kanjiaabhi@gmail.com",
      href: "mailto:kanjiaabhi@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8128074615",
      href: "tel:+918128074615",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Morbi, Gujarat, India",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/abhikanjia" },
    { icon: Linkedin, label: "LinkedIn", href: "https://in.linkedin.com/in/abhi-kanjia-303766247" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-wider">
            // GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href || undefined}
                className={`glass-card p-6 text-center hover-lift group ${!item.href ? 'cursor-default' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </a>
            ))}
          </div>

          {/* CTA and social */}
          <div className="glass-card p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you have a project in mind, need help with AI automation, or just want to explore possibilities, I'd love to hear from you.
            </p>

            <a 
              href="mailto:kanjiaabhi@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Send me a message
            </a>

            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Or connect with me on</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-card hover-lift group"
                  >
                    <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
