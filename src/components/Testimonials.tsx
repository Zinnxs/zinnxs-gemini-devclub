import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
import { cn } from '../lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Marina Costa",
    quote: "O DevClub mudou minha vida. Aprendi do zero e em 8 meses estava contratada. Hoje meu salário é 5x maior.",
    company: "Uber",
    before: { role: "Atendente de Telemarketing", salary: "R$ 1.500", image: "https://i.pravatar.cc/300?img=47" },
    after: { role: "Software Engineer", salary: "R$ 8.500", image: "https://i.pravatar.cc/300?img=45" }
  },
  {
    id: 2,
    name: "Lucas Almeida",
    quote: "Saiu do zero, construiu 5 projetos e foi contratado. A metodologia e o suporte dos mentores fizeram toda diferença.",
    company: "PicPay",
    before: { role: "Estoquista", salary: "R$ 1.200", image: "https://i.pravatar.cc/300?img=11" },
    after: { role: "Front-End Pleno", salary: "R$ 6.200", image: "https://i.pravatar.cc/300?img=12" }
  },
  {
    id: 3,
    name: "Carla Mendes",
    quote: "Nunca imaginei que fosse possível. O DevClub acreditou em mim e hoje trabalho remoto para o exterior.",
    company: "Startup US",
    before: { role: "Vendedora", salary: "R$ 2.000", image: "https://i.pravatar.cc/300?img=35" },
    after: { role: "Full Stack Dev", salary: "US$ 4.000", image: "https://i.pravatar.cc/300?img=32" }
  },
  {
    id: 4,
    name: "João Pedro",
    quote: "Os projetos práticos me deram portfólio e confiança para a entrevista. A transição foi muito rápida.",
    company: "Stone",
    before: { role: "Motoboy", salary: "R$ 1.800", image: "https://i.pravatar.cc/300?img=52" },
    after: { role: "Back-End Developer", salary: "R$ 7.000", image: "https://i.pravatar.cc/300?img=53" }
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showAfter, setShowAfter] = useState<Record<number, boolean>>({});

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleState = (id: number) => {
    setShowAfter(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Histórias reais de <span className="text-brand-purple">transformação</span>
          </h2>
          <p className="text-gray-400 text-lg">Pessoas comuns que aceitaram o desafio e reescreveram seu futuro.</p>
        </motion.div>

        <div className="hidden md:flex gap-4">
          <button onClick={() => scroll('left')} className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scroll('right')} className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar px-6 pb-12 snap-x snap-mandatory"
        style={{ scrollPaddingLeft: '1.5rem' }}
      >
        {testimonials.map((testimonial, index) => {
          const isAfter = showAfter[testimonial.id] ?? false;
          const current = isAfter ? testimonial.after : testimonial.before;

          return (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] snap-center shrink-0 flex flex-col bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:-translate-y-2 group"
            >
              {/* Header: Photo & Info */}
              <div className="flex items-center gap-4 mb-6 relative h-20">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={isAfter ? 'after-img' : 'before-img'}
                    initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={cn(
                      "w-16 h-16 rounded-full border-2 overflow-hidden shrink-0",
                      isAfter ? "border-brand-purple shadow-[0_0_15px_rgba(139,92,246,0.5)]" : "border-gray-500 grayscale"
                    )}
                  >
                    <img src={current.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-col flex-grow h-full justify-center">
                  <h3 className="text-lg font-bold text-white leading-tight">{testimonial.name}</h3>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isAfter ? 'after-info' : 'before-info'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className={cn("text-sm font-medium", isAfter ? "text-brand-cyan" : "text-gray-400")}>
                        {current.role}
                      </p>
                      <p className="text-xs text-gray-500 font-mono mt-1">{current.salary}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-400 leading-relaxed flex-grow italic mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Bottom Actions & Switch */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                {isAfter && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 px-3 py-1.5 rounded-full"
                  >
                    <Briefcase size={14} className="text-brand-purple" />
                    {testimonial.company}
                  </motion.div>
                )}
                {!isAfter && <div />} {/* Spacer */}

                <button 
                  onClick={() => toggleState(testimonial.id)}
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-colors relative overflow-hidden"
                >
                  <span className={cn("text-xs font-bold z-10 transition-colors", !isAfter ? "text-white" : "text-gray-500")}>Antes</span>
                  
                  {/* Toggle Switch UI */}
                  <div className="w-10 h-5 bg-black/50 rounded-full relative shadow-inner p-0.5">
                    <motion.div
                      className={cn(
                        "w-4 h-4 rounded-full shadow-md",
                        isAfter ? "bg-gradient-to-br from-brand-purple to-brand-cyan" : "bg-gray-400"
                      )}
                      animate={{ x: isAfter ? 20 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </div>
                  
                  <span className={cn("text-xs font-bold z-10 transition-colors", isAfter ? "text-white" : "text-gray-500")}>Depois</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
