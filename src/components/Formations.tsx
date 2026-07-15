import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, BarChart, ChevronRight, X } from 'lucide-react';
import { cn } from '../lib/utils';

const formations = [
  {
    title: 'Full Stack Master',
    description: 'Domine React, Node.js, TypeScript, bancos de dados e cloud. 900h de conteúdo + projetos reais.',
    duration: '12 meses',
    level: 'Do Zero ao Pleno',
    color: 'from-brand-purple',
    popular: true,
  },
  {
    title: 'MBA Tech & Liderança',
    description: 'Para devs que querem liderar times e arquitetar sistemas em escala.',
    duration: '18 meses',
    level: 'Avançado',
    color: 'from-brand-cyan',
    popular: false,
  },
  {
    title: 'Mentoria VIP',
    description: 'Acompanhamento semanal individual com um mentor sênior.',
    duration: '6 meses',
    level: 'Todos os níveis',
    color: 'from-brand-gold',
    popular: false,
  },
  {
    title: 'Bootcamp Intensivo',
    description: '12 semanas, 100% prático, focado na sua primeira vaga.',
    duration: '3 meses',
    level: 'Iniciante',
    color: 'from-emerald-500',
    popular: false,
  }
];

export default function Formations() {
  const [selectedFormation, setSelectedFormation] = useState<typeof formations[0] | null>(null);

  return (
    <section id="formacoes" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Nossas Formações</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Escolha o caminho ideal para o seu momento de carreira.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 perspective-1000">
          {formations.map((formation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -30, z: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
              className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-1 overflow-hidden transform-style-3d hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="h-full bg-[#0d111a] rounded-[22px] p-8 flex flex-col relative z-10">
                {formation.popular && (
                  <div className="absolute top-0 right-8 transform -translate-y-1/2">
                    <div className="bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                      MAIS ESCOLHIDO
                    </div>
                  </div>
                )}

                <div className={cn("w-12 h-1 bg-gradient-to-r to-transparent mb-6 rounded-full", formation.color)} />
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                  {formation.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-8">
                  {formation.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Clock size={16} className="text-gray-500" />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <BarChart size={16} className="text-gray-500" />
                    <span>{formation.level}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedFormation(formation)}
                  className="w-full py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold flex items-center justify-center gap-2 transition-colors group/btn"
                >
                  <span>Saiba mais</span>
                  <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFormation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-bg/80 backdrop-blur-xl"
            onClick={() => setSelectedFormation(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#121620] border border-white/10 p-8 rounded-3xl shadow-2xl max-w-lg w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedFormation(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className={cn("w-16 h-2 bg-gradient-to-r to-transparent mb-6 rounded-full", selectedFormation.color)} />
              
              <h3 className="text-3xl font-bold text-white mb-2">{selectedFormation.title}</h3>
              <p className="text-gray-400 mb-8">{selectedFormation.description}</p>
              
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Nome completo</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors" placeholder="João da Silva" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors" placeholder="joao@exemplo.com" />
                </div>
                <button className="w-full py-4 mt-4 bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-[1.02] transition-transform">
                  Garantir minha vaga
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
