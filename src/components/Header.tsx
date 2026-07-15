import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Code2, Menu, X } from 'lucide-react';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStudentAreaModal, setShowStudentAreaModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Empresas', href: '#empresas' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Formações', href: '#formacoes' },
    { name: 'Mentoria', href: '#mentoria' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-4 bg-brand-bg/60 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-6 bg-transparent border-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group relative z-50">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center font-bold text-lg text-white">
              D
            </div>
            <span className="font-bold text-xl tracking-tighter text-white">
              Dev<span className="text-brand-cyan">Club</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-brand-purple group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={(e) => { e.preventDefault(); setShowStudentAreaModal(true); }} className="px-4 py-2 text-sm font-semibold border border-white/10 rounded-full hover:bg-white/5 transition-all text-white">
              Área do Aluno
            </button>
            <button onClick={(e) => { e.preventDefault(); setShowSignupModal(true); }} className="px-6 py-2 text-sm font-bold bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 transition-transform text-white">
              Quero ser Dev
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, pointerEvents: "auto" },
          closed: { opacity: 0, y: "-100%", pointerEvents: "none" }
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 bg-brand-bg/95 backdrop-blur-2xl pt-24 px-6 md:hidden flex flex-col gap-8 z-40"
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-4 mt-auto pb-12">
           <button onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); setShowStudentAreaModal(true); }} className="w-full text-center py-4 text-base font-semibold rounded-2xl border border-white/10 text-white block">
              Área do Aluno
            </button>
            <button onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); setShowSignupModal(true); }} className="w-full text-center py-4 text-base font-semibold rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white block">
              Quero ser Dev
            </button>
        </div>
      </motion.div>
      {/* Student Area Modal */}
      <AnimatePresence>
        {showStudentAreaModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowStudentAreaModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm bg-[#13151a] border border-white/10 p-6 rounded-3xl shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setShowStudentAreaModal(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                <X size={20} />
              </button>
              
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Code2 className="text-gray-400 w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Em desenvolvimento</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A nova Área do Aluno está sendo reformulada para entregar uma experiência ainda mais incrível. Em breve, novidades!
              </p>
              
              <button 
                onClick={() => setShowStudentAreaModal(false)}
                className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors text-sm"
              >
                Entendi
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Signup Modal */}
      <AnimatePresence>
        {showSignupModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowSignupModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#13151a] border border-white/10 p-8 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-gold" />
              
              <button 
                onClick={() => setShowSignupModal(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Vire a chave em 2026</h3>
              <p className="text-gray-400 text-sm mb-6">
                Garanta sua vaga na próxima turma do DevClub e comece sua jornada para se tornar um Dev Full-Stack.
              </p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowSignupModal(false); }}>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Nome completo</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com.br" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="(00) 00000-0000" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all text-sm"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 mt-2 bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-brand-purple/20 text-sm"
                >
                  Garantir Minha Vaga
                </button>
                
                <p className="text-center text-[10px] text-gray-500 mt-4">
                  *Esta é uma simulação de formulário de inscrição.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
