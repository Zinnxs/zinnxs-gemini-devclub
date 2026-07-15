import { motion } from 'motion/react';
import { BookOpen, Video, Users, Briefcase } from 'lucide-react';
import { cn } from '../lib/utils';

const pillars = [
  {
    icon: BookOpen,
    title: 'Formação Completa',
    description: 'Do zero ao deploy. Projetos reais, código limpo e arquitetura escalável.',
    color: 'from-blue-500/20 to-brand-cyan/20',
    iconColor: 'text-brand-cyan',
    borderColor: 'group-hover:border-brand-cyan/50'
  },
  {
    icon: Video,
    title: 'Mentoria ao Vivo',
    description: 'Encontros semanais com engenheiros seniores para destravar seu código e carreira.',
    color: 'from-brand-purple/20 to-fuchsia-500/20',
    iconColor: 'text-brand-purple',
    borderColor: 'group-hover:border-brand-purple/50'
  },
  {
    icon: Users,
    title: 'Comunidade',
    description: 'Networking real. Conecte-se com milhares de devs que estão na mesma jornada que você.',
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    borderColor: 'group-hover:border-emerald-400/50'
  },
  {
    icon: Briefcase,
    title: 'Empregabilidade',
    description: 'Preparação para entrevistas, revisão de currículo e indicação direta para parceiros.',
    color: 'from-brand-gold/20 to-orange-500/20',
    iconColor: 'text-brand-gold',
    borderColor: 'group-hover:border-brand-gold/50'
  }
];

export default function About() {
  return (
    <section id="sobre" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Muito mais que uma <br className="hidden md:block" />escola de programação
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nós não vendemos cursos. Nós entregamos um ecossistema completo desenhado para transformar você no profissional que as empresas disputam.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2",
                  pillar.borderColor
                )}
              >
                {/* Background gradient effect on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                  pillar.color
                )} />

                <div className="mb-6">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                    pillar.iconColor
                  )}>
                    <Icon size={28} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-gray-400 leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
