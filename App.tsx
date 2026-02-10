import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Instagram,
  Linkedin,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";
import { SERVICES, TEAM, ADVANTAGES } from "./constants";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TEAM.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TEAM.length) % TEAM.length);
  };

  const WHATSAPP_LINK =
    "https://api.whatsapp.com/send/?phone=5567996134676&text=Olá, vim do site e quero saber mais!&type=phone_number&app_absent=0";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "glass-header shadow-md py-3" : "bg-transparent py-5"}`}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span
              className={`text-2xl font-extrabold tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}
            >
              CodeClick
            </span>
          </div>

          {/* Desktop Nav */}
          <ul
            className={`hidden md:flex gap-8 font-medium ${isScrolled ? "text-slate-600" : "text-white/90"}`}
          >
            <li>
              <a
                href="#home"
                className="hover:text-purple-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-purple-600 transition-colors"
              >
                Agência
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-purple-600 transition-colors"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-purple-600 transition-colors"
              >
                Equipe
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-purple-600 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>

          <div className="hidden md:block">
            <a
              href={WHATSAPP_LINK}
              className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                isScrolled
                  ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200"
                  : "bg-white text-purple-700 hover:bg-slate-100"
              }`}
            >
              Começar Projeto
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className={isScrolled ? "text-slate-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden animate-in fade-in slide-in-from-top-4">
            <ul className="flex flex-col p-6 gap-4 font-semibold text-slate-800">
              <li>
                <a href="#home" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  Agência
                </a>
              </li>
              <li>
                <a href="#services" onClick={toggleMenu}>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#team" onClick={toggleMenu}>
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contato
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  className="block text-center bg-purple-600 text-white py-3 rounded-lg mt-2"
                >
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center bg-gradient-purple text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-6 py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                <span className="text-sm font-medium">
                  Estratégia Digital de Alta Performance
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Articulamos objetivos, definimos{" "}
                <span className="text-purple-300">resultados.</span>
              </h1>
              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-xl">
                Na CodeClick, transformamos ideias complexas em experiências
                digitais intuitivas e estratégias de marketing que impulsionam o
                crescimento sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#services"
                  className="px-8 py-4 bg-white text-purple-900 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group"
                >
                  Nossos Serviços
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  className="px-8 py-4 bg-purple-500/30 border border-white/30 text-white rounded-xl font-bold hover:bg-purple-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar com Especialista
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -inset-4 bg-purple-400/20 rounded-2xl blur-2xl animate-pulse"></div>
              <img
                src="/assets/images/element.png"
                alt="Digital Agency Work"
                className="relative rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div className="relative">
                <img
                  src="/assets/images/equipeFGoto.jpg"
                  alt="Equipe"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-purple-600 text-white p-8 rounded-2xl shadow-xl hidden lg:block">
                  <p className="text-4xl font-black">5+</p>
                  <p className="text-sm font-medium uppercase tracking-wider">
                    Anos de Inovação
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">
                  Nossa Agência
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                  Acreditamos em ideias que criam mudança real.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Ajudamos marcas a entenderem melhor seus clientes através de
                  dados e criatividade. Não entregamos apenas serviços;
                  entregamos parcerias estratégicas que visam o panorama
                  completo do seu negócio.
                </p>
                <div className="space-y-4">
                  {[
                    "Estratégias orientadas a resultados",
                    "Tecnologia de ponta em desenvolvimento",
                    "Foco total na experiência do usuário",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-purple-600 w-6 h-6" />
                      <span className="font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <blockquote className="border-l-4 border-purple-600 pl-6 py-2 italic text-slate-500 text-lg">
                    "Transformamos desafios em oportunidades, impulsionando o
                    crescimento de forma estratégica e inovadora."
                  </blockquote>
                  <p className="mt-4 font-bold text-slate-900">
                    — Board CodeClick
                  </p>
                </div>
              </div>
            </div>

            {/* Advantages Grid */}
            <div className="text-center space-y-4 mb-12">
              <span className="text-purple-600 font-bold uppercase text-sm">
                Por que nos escolher?
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Nossos Pilares de Sucesso
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {ADVANTAGES.map((adv) => (
                <div
                  key={adv.id}
                  className="p-8 bg-slate-50 rounded-2xl border border-slate-100 card-hover text-center"
                >
                  <div className="w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center mx-auto mb-6 text-purple-600">
                    {adv.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {adv.title}
                  </h3>
                  <p className="text-slate-600">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-2xl space-y-4">
                <span className="text-purple-400 font-bold uppercase text-sm">
                  O que fazemos
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  Soluções de Comunicação Empresarial de Ponta
                </h2>
              </div>
              <a
                href={WHATSAPP_LINK}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all inline-flex items-center gap-2 group"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="group p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="mb-6 p-4 bg-slate-700 rounded-lg inline-block text-purple-400">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Testimonials Section */}
        <section id="team" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="text-purple-600 font-bold uppercase text-sm">
                Liderança
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Quem faz acontecer
              </h2>
            </div>

            <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
              <div className="bg-slate-50 rounded-[2rem] p-8 md:p-16 relative shadow-sm border border-slate-100">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                    <img
                      src={TEAM[currentTestimonial].image}
                      alt={TEAM[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <p className="text-2xl font-medium text-slate-700 italic leading-relaxed">
                      "{TEAM[currentTestimonial].quote}"
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {TEAM[currentTestimonial].name}
                      </h4>
                      <p className="text-purple-600 font-medium">
                        {TEAM[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <ChevronRight className="w-6 h-6 text-slate-600" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-purple rounded-[3rem] p-12 md:p-20 text-white text-center space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-5xl font-extrabold">
                  Pronto para elevar seu negócio?
                </h2>
                <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                  Estamos prontos para criar a próxima grande história de
                  sucesso. Vamos conversar sobre seus objetivos?
                </p>
                <div className="pt-4">
                  <a
                    href={WHATSAPP_LINK}
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-900 font-black text-lg rounded-2xl hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Falar no WhatsApp Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-extrabold tracking-tight">
                  CodeClick
                </span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Sua parceira estratégica em tecnologia e marketing digital.
                Transformando visão em realidade desde 2020.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  className="p-2 bg-slate-800 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Navegação</h4>
              <ul className="space-y-4 text-slate-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    A Agência
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="hover:text-white transition-colors"
                  >
                    Equipe
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>
              © {new Date().getFullYear()} CodeClick - Digital Agency. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
