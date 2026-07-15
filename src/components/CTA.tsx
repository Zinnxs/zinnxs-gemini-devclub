import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-32 relative z-10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-brand-purple/20 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* Internal gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-gold opacity-50" />

          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white/10 rounded-2xl">
              <Sparkles className="w-8 h-8 text-brand-gold" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Sua vaga no mercado tech começa <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">aqui.</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Junte-se a mais de 12 mil profissionais que já transformaram suas carreiras com o DevClub. As vagas da próxima turma estão abertas.
          </p>

          <motion.a
            href="#formacoes"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-brand-bg font-bold text-lg rounded-full overflow-hidden transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] inline-block"
          >
            <span className="relative z-10">Quero ser um Dev Completo</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-cyan opacity-0 group-hover:opacity-20 transition-opacity" />
            
            {/* Particles emitting from button (simplified CSS effect) */}
            <div className="absolute -inset-2 rounded-full border border-white/30 scale-105 opacity-0 group-hover:animate-ping" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
