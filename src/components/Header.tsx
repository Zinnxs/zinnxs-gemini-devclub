import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { cn } from '../lib/utils';
import { Code2, Menu, X } from 'lucide-react';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Formações', href: '#formacoes' },
    { name: 'Para Empresas', href: '#empresas' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
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
            <button className="px-4 py-2 text-sm font-semibold border border-white/10 rounded-full hover:bg-white/5 transition-all text-white">
              Área do Aluno
            </button>
            <button className="px-6 py-2 text-sm font-bold bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 transition-transform text-white">
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
           <button className="w-full py-4 text-base font-semibold rounded-2xl border border-white/10 text-white">
              Área do Aluno
            </button>
            <button className="w-full py-4 text-base font-semibold rounded-2xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white">
              Quero ser Dev
            </button>
        </div>
      </motion.div>
    </motion.header>
  );
}
