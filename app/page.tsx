"use client"; 

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Importando o componente de imagem otimizado do Next.js

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const projects = [
    {
      title: "Dra. Mayara Cortez",
      description: "Site institucional odontológico de alta performance focado em conversão e SEO, com configuração avançada de infraestrutura DNS na Vercel.",
      techs: ["Next.js", "Tailwind CSS", "SEO", "End-to-End"],
      category: "Front-end",
      link: "https://dramayaracortez.com.br/",
      linkText: "Acessar Site"
    },
    {
      title: "Clínica ITH Prime",
      description: "Plataforma médica desenvolvida com arquitetura moderna, garantindo carregamento ultrarrápido e provisionamento otimizado de infraestrutura.",
      techs: ["Next.js", "React", "Infraestrutura", "End-to-End"],
      category: "Front-end",
      link: "https://ithprime.com.br/",
      linkText: "Acessar Site"
    },
    {
      title: "Finexor",
      description: "Dashboard interativo full-stack para análise comparativa de ativos financeiros e indicadores. API construída em C# com ASP.NET Core e banco de dados SQL Server.",
      techs: ["C#", ".NET Core", "SQL Server", "Next.js"],
      category: "Full-Stack",
      link: "https://github.com/Gabriel-2911", 
      linkText: "Ver Código"
    }
  ];

  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = ["Todos", "Front-end", "Full-Stack"];

  return (
    <div className="flex flex-col items-center w-full">
      
      {/* --- HERO SECTION COM FOTO --- */}
      {/* Mudamos o layout para flex-row no desktop (md:) e adicionamos gap */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[85vh] px-6 py-12 gap-10 w-full max-w-6xl">
        
        {/* Bloco de Texto (Esquerda no desktop, Baixo no mobile) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Gabriel <span className="text-emerald-500">Cortes Teixeira</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-zinc-400 font-medium mb-6">
            Desenvolvedor Full-Stack
          </h2>
          
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            Especialista em criar interfaces performáticas com Next.js, React e TypeScript, integradas a APIs robustas em .NET. Experiência na sustentação de sistemas críticos e garantia da integridade de dados.
          </p>
          
          {/* Botões alinhados ao centro no mobile, esquerda no desktop */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link 
              href="https://wa.me/5511947553424" 
              target="_blank"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 hover:-translate-y-1 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-emerald-900/20"
            >
              Falar no WhatsApp
            </Link>
            <Link 
              href="https://github.com/Gabriel-2911" 
              target="_blank"
              className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 hover:-translate-y-1 text-white font-semibold rounded-lg transition-all duration-300 border border-zinc-700"
            >
              GitHub
            </Link>
            <Link 
              href="https://www.linkedin.com/in/gabriel-cortes-teixeira-0b9a4722b" 
              target="_blank"
              className="px-8 py-3 bg-blue-700 hover:bg-blue-600 hover:-translate-y-1 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/20"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Bloco da Imagem (Direita no desktop, Topo no mobile) */}
        <div className="flex-shrink-0 relative w-48 h-48 md:w-80 md:h-80">
          {/* Efeito de "luz" esmeralda atrás da foto */}
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl transform -translate-x-4 -translate-y-4"></div>
          
          {/* Componente de Imagem Otimizado */}
          <Image
            src="/foto.jpeg" // Certifique-se que a imagem está na pasta public com este nome
            alt="Foto de Gabriel Cortes Teixeira"
            fill // Ocupa todo o espaço do container pai (w-48 h-48 ou w-80 h-80)
            className="rounded-full object-cover border-4 border-zinc-800 shadow-2xl relative z-10"
            priority // Carrega a imagem imediatamente (importante para a primeira dobra)
          />
        </div>

      </section>

      {/* --- SEÇÃO DE PROJETOS COM FILTRO --- */}
      <section className="w-full max-w-6xl px-6 py-20 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-zinc-100 mb-2">Projetos em Destaque</h3>
            <p className="text-zinc-400">Um pouco do que venho construindo recentemente.</p>
          </div>
          
          <div className="flex p-1 bg-zinc-900 rounded-lg border border-zinc-800">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-zinc-800 text-emerald-400 shadow-sm" 
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-zinc-100 mb-3">{project.title}</h4>
              <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 bg-zinc-800 text-emerald-400 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link 
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-sm font-semibold text-zinc-100 hover:text-emerald-400 transition-colors mt-auto group"
              >
                {project.linkText} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- SEÇÃO DE EXPERIÊNCIA PROFISSIONAL --- */}
      <section className="w-full max-w-6xl px-6 py-20 border-t border-zinc-800">
        <div className="mb-12 text-center md:text-left">
          <h3 className="text-3xl font-bold text-zinc-100 mb-2">Experiência Profissional</h3>
          <p className="text-zinc-400">Minha vivência prática resolvendo problemas reais e escaláveis.</p>
        </div>

        <div className="flex flex-col gap-8">
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-emerald-500/30 transition-colors relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pl-4">
              <div>
                <h4 className="text-2xl font-bold text-zinc-100">Estagiário em Tecnologia / Desenvolvedor</h4>
                <p className="text-lg text-emerald-400 font-medium mt-1">RB Investimentos</p>
              </div>
              <span className="text-zinc-500 text-sm mt-4 md:mt-0 font-medium px-3 py-1 bg-zinc-800 rounded-full border border-zinc-700">
                Julho de 2024 — Presente
              </span>
            </div>

            <p className="text-zinc-300 mb-6 pl-4">
              Atuo na área de desenvolvimento e sustentação de sistemas da corretora, focado na construção de soluções automatizadas, modernização de aplicações financeiras e integração de serviços.
            </p>

            <ul className="space-y-4 text-zinc-400 pl-4 list-none">
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></span>
                <strong className="text-zinc-200">Desenvolvimento .NET:</strong> Desenvolvimento e manutenção de sistemas utilizando o ecossistema .NET (C#) e ASP.NET Core.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></span>
                <strong className="text-zinc-200">Banco de Dados:</strong> Modelagem, otimização e manipulação de dados em larga escala utilizando bancos de dados relacionais (SQL Server e Oracle), garantindo a integridade das regras de negócio.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></span>
                <strong className="text-zinc-200">APIs e Integração:</strong> Desenvolvimento, integração e validação técnica de APIs REST (via Postman) para comunicação segura entre microsserviços.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></span>
                <strong className="text-zinc-200">Sustentação:</strong> Modernização de sistemas legados e resolução ágil de incidentes de Back-end, analisando logs para garantir a alta disponibilidade das operações.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></span>
                <strong className="text-zinc-200">Engenharia de Requisitos:</strong> Levantamento de requisitos e elaboração de documentação técnica (diagramas UML), traduzindo as necessidades das áreas de negócio em especificações de arquitetura de software.
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-blue-500/30 transition-colors relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-xl"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pl-4">
              <div>
                <h4 className="text-2xl font-bold text-zinc-100">Desenvolvedor Web Autônomo</h4>
                <p className="text-lg text-blue-400 font-medium mt-1">Freelancer</p>
              </div>
              <span className="text-zinc-500 text-sm mt-4 md:mt-0 font-medium px-3 py-1 bg-zinc-800 rounded-full border border-zinc-700">
                2025 — Presente
              </span>
            </div>

            <p className="text-zinc-300 mb-6 pl-4">
              Atuação no ciclo completo de desenvolvimento (End-to-End) na criação de plataformas digitais para o setor de saúde, desde o levantamento de requisitos com o cliente até o deploy em produção.
            </p>

            <ul className="space-y-4 text-zinc-400 pl-4 list-none">
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500"></span>
                <strong className="text-zinc-200">Arquitetura Front-end:</strong> Criação de interfaces modernas, responsivas e de carregamento ultrarrápido utilizando Next.js, React e Tailwind CSS.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500"></span>
                <strong className="text-zinc-200">Otimização e SEO:</strong> Implementação de estratégias avançadas de SEO técnico, garantindo indexação eficiente no Google e melhor posicionamento orgânico.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500"></span>
                <strong className="text-zinc-200">Infraestrutura e DNS:</strong> Configuração de apontamentos DNS complexos e gerenciamento de deploys contínuos (CI/CD) em plataformas de nuvem como Vercel.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- SEÇÃO DE FORMAÇÃO ACADÊMICA --- */}
      <section className="w-full max-w-6xl px-6 py-20 border-t border-zinc-800">
        <div className="mb-12 text-center md:text-left">
          <h3 className="text-3xl font-bold text-zinc-100 mb-2">Formação Acadêmica</h3>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 relative overflow-hidden">
           <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-600 rounded-l-xl"></div>
           <div className="pl-4">
              <h4 className="text-xl font-bold text-zinc-100">Bacharelado em Sistemas de Informação</h4>
              <p className="text-zinc-400 font-medium mt-1">Universidade São Judas Tadeu</p>
              <p className="text-zinc-500 text-sm mt-2">Conclusão prevista: Junho de 2026</p>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full py-8 border-t border-zinc-800 text-center text-zinc-500 text-sm flex flex-col items-center justify-center gap-2">
        <p>© {new Date().getFullYear()} Gabriel Cortes Teixeira. Desenvolvido com Next.js e Tailwind CSS.</p>
      </footer>

    </div>
  );
}
