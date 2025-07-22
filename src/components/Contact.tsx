import React, { useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      info: "Goiânia, Brasil",
      color: "text-portfolio-purple",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "eberttpalmerass@gmail.com",
      color: "text-portfolio-blue",
      link: "mailto:contato@ebertdeveloper.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      info: "+55 (64) 981479751",
      color: "text-portfolio-cyan",
      link: "tel:+5511999999999",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/EbertPalmeira",
      color: "hover:text-portfolio-purple",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/ebert-palmeira-dev/",
      color: "hover:text-portfolio-blue",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://w.app/uarmz3",
      color: "hover:text-portfolio-cyan",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-portfolio-dark-light/30"
    >
      <div className="container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-portfolio-text-muted text-lg max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto ou oportunidade de
            colaboração
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-text-light mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div
                      className={`p-3 bg-portfolio-dark rounded-lg ${item.color}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-portfolio-text-light mb-1">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-portfolio-text-muted hover:text-portfolio-purple transition-colors"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-portfolio-text-muted">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-portfolio-text-light mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-portfolio-dark rounded-lg text-portfolio-text-muted ${social.color} transition-all duration-300 hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-portfolio-text-light font-medium mb-2"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-portfolio-dark border border-portfolio-purple/30 rounded-lg text-portfolio-text-light placeholder-portfolio-text-muted focus:border-portfolio-purple focus:ring-1 focus:ring-portfolio-purple transition-colors"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-portfolio-text-light font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-portfolio-dark border border-portfolio-purple/30 rounded-lg text-portfolio-text-light placeholder-portfolio-text-muted focus:border-portfolio-purple focus:ring-1 focus:ring-portfolio-purple transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-portfolio-text-light font-medium mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-portfolio-dark border border-portfolio-purple/30 rounded-lg text-portfolio-text-light placeholder-portfolio-text-muted focus:border-portfolio-purple focus:ring-1 focus:ring-portfolio-purple transition-colors resize-none"
                  placeholder="Conte-me sobre seu projeto ou como posso ajudá-lo..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
