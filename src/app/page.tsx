"use client";

import Image from "next/image";

// Componente SkillCard
interface SkillCardProps {
  iconClass: string;
  name: string;
  desc: string;
  destaque?: boolean;
}

function SkillCard({
  iconClass,
  name,
  desc,
  destaque = false,
}: SkillCardProps) {
  return (
    <div
      className={`flex flex-col items-center bg-[var(--color-header)] rounded-xl p-6 shadow transform transition duration-300 hover:scale-105 border border-[var(--color-detalhe)] animate-fade-in`}
    >
      <i
        className={`${iconClass} ${destaque ? "text-6xl" : "text-4xl"} mb-2`}
      />
      <h4 className={`font-bold mb-1 ${destaque ? "text-xl" : "text-lg"}`}>
        {name}
      </h4>
      <p className="text-gray-400 text-center text-sm">{desc}</p>
    </div>
  );
}

// Project interface
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

// Projects data
const projects: Project[] = [
  {
    title: "Sistema de Gerenciamento para Bares e Restaurantes",
    description:
      "Aplicação full stack para gerenciamento completo de bares e restaurantes, com foco em agilidade no atendimento, organização interna da equipe e controle eficiente do fluxo de pedidos e estoque. Inclui sistema de comandas, controle de estoque, kanban interativo para cozinha, notificações em tempo real e relatórios gerenciais.",
    image: "/img/login.png",
    technologies: [
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Next.js",
      "shadcn/ui",
      "WebSocket",
      "Docker",
      "TypeScript",
    ],
    link: "https://github.com/rafaelzagui/tcc-frontend",
  },
  {
    title: "Conecta Saúde",
    description:
      "Landing page moderna para clínica médica, desenvolvida com Next.js. Apresenta serviços médicos, depoimentos de pacientes, agendamento de consultas e informações de contato. Design responsivo e otimizado para conversão.",
    image: "/img/conectaSaude.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    link: "https://conecta-saude-phi.vercel.app/",
  },
  {
    title: "Sistema de Controle Financeiro",
    description:
      "Aplicação web para controle financeiro pessoal e empresarial, permitindo gestão de receitas, despesas, categorização de transações e geração de relatórios. Sistema com autenticação segura e interface intuitiva para acompanhamento das finanças.",
    image: "/img/controle_financeiro.png",
    technologies: ["Java", "Spring Boot", "JWT", "PostgreSQL", "REST API"],
    link: "https://github.com/rafaelzagui/Financial-Control",
  },
  {
    title: "Gateway de Pagamento",
    description:
      "Serviço backend desenvolvido para integração completa com gateway de pagamento. Sistema robusto utilizando Express.js para processamento de transações, validações de segurança e gestão de pagamentos. Inclui APIs RESTful para e-commerce com logs detalhados e controle de erros.",
    image: "/img/gateway_pagamento.png",
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Gateway API",
      "REST API",
      "Nodemon",
    ],
    link: "https://github.com/rafaelzagui/Gateway-de-pagamento",
  },
];

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[var(--color-header)] rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 border border-[var(--color-detalhe)] animate-scale-in">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-white mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[var(--color-destaque)] bg-opacity-20 text-white rounded-full text-sm hover:bg-opacity-30 transition"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            className="inline-block bg-[var(--color-destaque)] text-white px-4 py-2 rounded hover:bg-opacity-80 transition animate-glow"
          >
            Ver projeto
          </a>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-principal)] text-[var(--color-texto)]">
      {/* Header fixo */}
      <header className="fixed top-0 left-0 w-full bg-[var(--color-header)] bg-opacity-95 z-50 flex items-center justify-between px-8 py-4 shadow-md">
        <span className="font-bold text-lg tracking-wide">Rafael Zagui</span>
        <nav className="hidden md:flex gap-8 text-sm">
          <a
            href="#home"
            className="hover:text-[var(--color-destaque)] transition-colors"
          >
            Início
          </a>
          <a
            href="#about"
            className="hover:text-[var(--color-destaque)] transition-colors"
          >
            Sobre
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--color-destaque)] transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--color-destaque)] transition-colors"
          >
            Contato
          </a>
        </nav>
        <button className="md:hidden text-2xl">☰</button>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center pt-24 relative"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4 gap-8">
          {/* Texto à esquerda */}
          <div className="flex-1 flex flex-col justify-center items-start z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-bounce-in text-white">
              Olá
              <span className="text-[var(--color-destaque)] animate-pulse">
                .
              </span>
            </h1>
            <div
              className="flex items-center mb-2 animate-slide-up opacity-0"
              style={{
                animationDelay: "0.5s",
                animationFillMode: "forwards",
              }}
            >
              <span className="block w-16 h-1 bg-[var(--color-destaque)] mr-4 animate-pulse" />
              <span className="text-2xl md:text-3xl font-light text-white">
                Eu sou Rafael Zagui
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold mb-6 text-white animate-slide-up opacity-0"
              style={{
                animationDelay: "1s",
                animationFillMode: "forwards",
              }}
            >
              Desenvolvedor Full Stack
            </h2>
            <div
              className="flex gap-4 mb-8 animate-slide-up opacity-0"
              style={{
                animationDelay: "1.5s",
                animationFillMode: "forwards",
              }}
            >
              <a
                href="#contact"
                className="bg-[var(--color-destaque)] text-white px-6 py-2 rounded font-semibold shadow hover:bg-opacity-80 transition animate-glow hover:scale-110"
              >
                Tem um projeto?
              </a>
              <a
                href="/curriculo/CurriculoRafael.pdf"
                className="border border-[var(--color-destaque)] text-[var(--color-destaque)] px-6 py-2 rounded font-semibold hover:bg-[var(--color-destaque)] hover:text-white transition hover:scale-105"
              >
                Meu currículo
              </a>
            </div>
          </div>
          {/* Foto à direita com halo */}
          <div className="flex-1 flex justify-center items-center relative w-full md:w-auto h-[350px] md:h-[450px]">
            {/* Halo circular com animação */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[400px] md:h-[400px] rounded-full border-8 border-[var(--color-destaque)] opacity-40 z-0 animate-pulse-slow"
              style={{ boxShadow: "0 0 80px 20px var(--color-destaque)" }}
            />
            {/* Linhas decorativas animadas */}
            <div className="absolute top-1/4 left-1/4 w-12 h-12 border-t-4 border-l-4 border-[var(--color-detalhe)] transform rotate-45 opacity-30 animate-pulse-fast" />
            <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-b-4 border-r-4 border-[var(--color-detalhe)] transform rotate-45 opacity-30 animate-pulse-slower" />
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQEzdDZPqP5kGQ/profile-displayphoto-shrink_800_800/B4DZUUvU08HYAc-/0/1739809706133?e=1755129600&v=beta&t=EgxOzJYbRxY19zT_m_mN5jL7AhowXqehPNjP4UQ57o4"
              alt="Foto de Rafael Zagui"
              width={400}
              height={400}
              className="object-cover z-10 relative drop-shadow-2xl rounded-full animate-float"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-3xl animate-float">💻</span>
            <div>
              <h4 className="font-bold text-lg">Desenvolvimento de Sites</h4>
              <p className="text-sm text-gray-400">
                Websites modernos e responsivos
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl animate-float">📱</span>
            <div>
              <h4 className="font-bold text-lg">Desenvolvimento de Apps</h4>
              <p className="text-sm text-gray-400">Aplicações web e mobile</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl animate-float">☁️</span>
            <div>
              <h4 className="font-bold text-lg">Hospedagem de Sites</h4>
              <p className="text-sm text-gray-400">Soluções em nuvem e VPS</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Sobre mim</h3>
          <p className="mb-6 text-gray-300">
            Desenvolvedor em busca de oportunidades para aplicar e expandir
            minhas habilidades em desenvolvimento de software. Comprometido com
            a entrega de soluções eficientes, colaborativas e de alta qualidade,
            busco contribuir ativamente para o sucesso de projetos desafiadores
            e inovadores.
          </p>
          <div className="flex gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-[var(--color-destaque)]">
                5+
              </div>
              <div className="text-xs text-gray-400">Anos de experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold mb-2 text-center">Projetos</h3>
        <p className="text-center text-gray-400 mb-8">
          Alguns dos meus trabalhos mais recentes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Seção de Habilidades */}
      <section id="skills" className="max-w-5xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold mb-2 text-center">Habilidades</h3>
        <p className="text-center text-gray-400 mb-8">
          Tecnologias e ferramentas que domino
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <SkillCard
            iconClass="devicon-typescript-plain colored"
            name="TypeScript"
            desc="Minha principal linguagem para desenvolvimento web e backend moderno."
            destaque={true}
          />
          <SkillCard
            iconClass="devicon-angularjs-plain colored"
            name="Angular"
            desc="Framework SPA para aplicações robustas."
          />
          <SkillCard
            iconClass="devicon-spring-plain colored"
            name="Spring Boot"
            desc="Framework Java para APIs e microsserviços."
          />
          <SkillCard
            iconClass="devicon-microsoftsqlserver-plain colored"
            name="SQL Server"
            desc="Banco de dados relacional para aplicações empresariais."
          />
          <SkillCard
            iconClass="devicon-docker-plain colored"
            name="Docker"
            desc="Contêineres para ambientes portáteis e escaláveis."
          />
          <SkillCard
            iconClass="devicon-javascript-plain colored"
            name="JavaScript (ES6)"
            desc="Linguagem base para web moderna."
          />
          <SkillCard
            iconClass="devicon-nodejs-plain colored"
            name="NodeJS"
            desc="Back-end JavaScript para alta performance."
          />
          <SkillCard
            iconClass="devicon-git-plain colored"
            name="Git"
            desc="Controle de versão e colaboração."
          />
          <SkillCard
            iconClass="devicon-tailwindcss-plain colored"
            name="Tailwind"
            desc="Framework CSS utilitário para estilização rápida."
          />
          <SkillCard
            iconClass="devicon-css3-plain colored"
            name="CSS"
            desc="Estilização avançada para web."
          />
          <SkillCard
            iconClass="devicon-java-plain colored"
            name="Java"
            desc="Linguagem robusta para sistemas corporativos."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold mb-2 text-center">Contato</h3>
        <p className="text-center text-gray-400 mb-8">
          Entre em contato comigo para discutir projetos e oportunidades
        </p>
        <div className="flex justify-center">
          <div className="space-y-6 max-w-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--color-destaque)] bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h4 className="font-bold text-white">Gmail</h4>
                <a
                  href="mailto:rafagm02@gmail.com"
                  className="text-gray-400 hover:text-[var(--color-destaque)] transition"
                >
                  rafagm02@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--color-destaque)] bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <div>
                <h4 className="font-bold text-white">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/rafael-zc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[var(--color-destaque)] transition"
                >
                  linkedin.com/in/rafael-zc
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--color-destaque)] bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <h4 className="font-bold text-white">GitHub</h4>
                <a
                  href="https://github.com/rafaelzagui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[var(--color-destaque)] transition"
                >
                  github.com/rafaelzagui
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
