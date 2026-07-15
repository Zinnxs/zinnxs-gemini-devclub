import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Terminal, Code, Cpu } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Aurora / Glow Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-brand-purple rounded-full blur-[150px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -left-[5%] w-[500px] h-[500px] bg-brand-cyan rounded-full blur-[150px] mix-blend-screen"
        />
        {/* Grid pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
      >
        <div className="flex flex-col items-start gap-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-cyan uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs">A formação que o mercado tech confia</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white"
          >
            Onde programadores <br className="hidden md:block"/>
            viram <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-gold">protagonistas</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-md leading-relaxed"
          >
            Do zero ao sênior, com mentorias ao vivo e a comunidade que mais cresce no Brasil. A melhor formação, com um toque de ousadia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <a href="#formacoes" className="group flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-opacity-90 transition-all">
              <span>Quero ser um Dev Completo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex -space-x-3 hidden sm:flex">
              <div className="w-10 h-10 rounded-full border-2 border-brand-bg bg-gray-600 overflow-hidden"><img src={`https://i.pravatar.cc/100?img=1`} alt="avatar" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-brand-bg bg-gray-500 overflow-hidden"><img src={`https://i.pravatar.cc/100?img=2`} alt="avatar" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-brand-bg bg-gray-400 flex items-center justify-center text-[10px] font-bold text-white z-10">+12k</div>
            </div>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative hidden lg:flex flex-col justify-center gap-6 h-full py-12"
        >
          {/* Floating Card 1: Formation */}
          <div className="absolute top-0 right-10 w-64 p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl transform -rotate-3 z-20">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-brand-purple rounded-xl">
                <Terminal size={24} className="text-white" />
              </div>
              <span className="text-[10px] font-bold bg-brand-purple/20 text-brand-purple px-2 py-1 rounded">PREMIUM</span>
            </div>
            <h3 className="font-bold text-lg mb-1 text-white">Full Stack Master</h3>
            <p className="text-xs text-gray-400 mb-4">900h de conteúdo prático e real.</p>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-brand-purple"></div>
            </div>
          </div>

          {/* Interactive Case Study: Before/After */}
          <div className="w-[400px] ml-auto backdrop-blur-xl bg-black/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl z-10 relative mt-16">
            <div className="p-4 flex items-center justify-between border-b border-white/10 bg-white/5">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Case de Sucesso</span>
              <div className="flex items-center gap-2">
                 <span className="text-[10px] text-gray-400">ANTES</span>
                 <div className="w-8 h-4 bg-brand-cyan rounded-full relative">
                   <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
                 </div>
                 <span className="text-[10px] text-brand-cyan font-bold">DEPOIS</span>
              </div>
            </div>
            <div className="p-6 flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden border border-white/20 shrink-0">
                 <img src={`https://i.pravatar.cc/100?img=12`} className="w-full h-full object-cover" alt="User" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-xl text-white truncate">Lucas Almeida</h4>
                <p className="text-brand-cyan text-sm font-semibold truncate">Software Engineer no PicPay</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                  <span className="line-through">R$ 1.800</span>
                  <ArrowRight size={12} className="shrink-0" />
                  <span className="font-bold text-sm text-green-400">R$ 9.200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tutor Teaser */}
          <div className="absolute -bottom-8 right-0 w-56 p-4 backdrop-blur-lg bg-[#F59E0B]/5 border border-[#F59E0B]/20 rounded-2xl flex items-center gap-3 transform rotate-2 shadow-xl">
             <div className="w-10 h-10 rounded-full bg-gray-600 border border-[#F59E0B]/30 overflow-hidden shrink-0">
               <img src={`https://i.pravatar.cc/100?img=15`} className="w-full h-full object-cover" alt="User" />
             </div>
             <div className="min-w-0">
               <p className="text-[10px] uppercase font-bold text-[#F59E0B] truncate">Instrutor Chefe</p>
               <p className="text-sm font-bold text-white truncate">Rodolfo Mori</p>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
