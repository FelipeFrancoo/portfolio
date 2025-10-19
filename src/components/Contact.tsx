import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Retornarei o contato em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contato@exemplo.com", label: "Email" },
  ];

  return (
    <section id="contato" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-16 animate-fade-in">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-foreground">
              Vamos conversar
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-silver to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-slide-in">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tem um projeto em mente ou quer discutir oportunidades?
                Ficarei feliz em conversar.
              </p>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground font-inter">
                  Conecte-se comigo:
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-silver/50 hover:shadow-[0_0_20px_rgba(184,184,184,0.2)] transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border focus:border-silver/50 transition-all"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border focus:border-silver/50 transition-all"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border focus:border-silver/50 transition-all min-h-[150px] resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-card hover:bg-accent text-foreground border border-border hover:border-silver/50 hover:shadow-[0_0_20px_rgba(184,184,184,0.2)] transition-all duration-300 group"
              >
                Enviar Mensagem
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
