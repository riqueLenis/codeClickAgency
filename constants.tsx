import React from "react";
import {
  Lightbulb,
  Users,
  ChartLine,
  Rocket,
  Code2,
  Globe,
} from "lucide-react";
import { Service, TeamMember, Advantage } from "./types";

export const SERVICES: Service[] = [
  {
    id: "marketing",
    title: "Consultoria e Estratégia",
    description:
      "Desenvolvemos planos abrangentes para atingir seus objetivos de mercado com precisão cirúrgica.",
    icon: <Rocket className="w-8 h-8 text-purple-600" />,
  },
  {
    id: "development",
    title: "Desenvolvimento FullStack",
    description:
      "Criação de ecossistemas digitais, websites e apps mobile personalizados com as tecnologias mais modernas.",
    icon: <Code2 className="w-8 h-8 text-purple-600" />,
  },
  {
    id: "traffic",
    title: "Gestão de Performance",
    description:
      "Otimizamos suas campanhas de tráfego pago para garantir o máximo retorno sobre investimento (ROI).",
    icon: <Globe className="w-8 h-8 text-purple-600" />,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "henrique",
    name: "Henrique Lenis",
    role: "CEO & FullStack Developer",
    quote:
      "Como CEO da CodeClick, garanto que cada solução é pensada para escalar seu negócio de verdade!",
    image: "/assets/images/eu.png",
  },
  {
    id: "henrique",
    name: "Henrique Lenis",
    role: "Diretor de Marketing",
    quote:
      "Criamos estratégias sob medida para aumentar a presença online e gerar resultados reais e mensuráveis.",
    image: "/assets/images/eu.png",
  },
];

export const ADVANTAGES: Advantage[] = [
  {
    id: "approach",
    title: "Abordagem Única",
    description:
      "Estratégias personalizadas que fogem do óbvio para destacar sua marca.",
    icon: <Lightbulb className="w-10 h-10" />,
  },
  {
    id: "team",
    title: "Time Especialista",
    description:
      "Profissionais dedicados que respiram inovação em cada projeto entregue.",
    icon: <Users className="w-10 h-10" />,
  },
  {
    id: "b2b",
    title: "Foco em Crescimento",
    description:
      "Resultados validados por dados para empresas que buscam expansão real.",
    icon: <ChartLine className="w-10 h-10" />,
  },
];
