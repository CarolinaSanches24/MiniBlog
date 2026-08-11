import React from 'react'
import { Link } from 'react-router'

export const About = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center space-y-8">
        
        {/* Título com Gradiente */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 tracking-tight">
          Sobre o MiniBlog
        </h1>

        {/* Subtítulo / Descrição */}
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
          Este projeto é um <span className="text-purple-400 font-semibold">Mini Blog</span> desenvolvido para compartilhar conhecimentos, ideias e histórias. Uma plataforma leve, intuitiva e focada na melhor experiência de leitura e escrita.
        </p>

        {/* Cards Informativos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 text-left">
          <div className="p-6 bg-slate-800/50 border border-slate-700/60 rounded-2xl backdrop-blur-sm hover:border-purple-500/40 transition-colors shadow-lg">
            <h3 className="text-xl font-bold text-purple-300 mb-2">🚀 Leitura Simples</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Encontre publicações interessantes organizadas de forma clara e responsiva para qualquer dispositivo.
            </p>
          </div>

          <div className="p-6 bg-slate-800/50 border border-slate-700/60 rounded-2xl backdrop-blur-sm hover:border-pink-500/40 transition-colors shadow-lg">
            <h3 className="text-xl font-bold text-pink-300 mb-2">✍️ Publique seu Conteúdo</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crie suas próprias postagens com facilidade e faça parte da nossa comunidade de autores.
            </p>
          </div>
        </div>

        {/* Botão de criação de um novo post */}
        <div className="pt-4">
          <Link
            to="/posts/create" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
          >
            <span>Criar Novo Post</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </Link>
        </div>
        </div>
        </div>
    
    
  )
}
