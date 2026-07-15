import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const metrics = [
  { value: 12000, suffix: '+', label: 'Alunos formados', color: 'text-white' },
  { value: 98, suffix: '%', label: 'Empregabilidade', color: 'text-brand-cyan' },
  { value: 500, suffix: '+', label: 'Empresas parceiras', color: 'text-brand-purple' },
  { value: 92, suffix: '', label: 'NPS', color: 'text-brand-gold' },
];

export default function Numbers() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="relative z-10 bg-black/20 border-t border-white/5 py-6">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center flex-1">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className={`text-2xl md:text-3xl font-black ${metric.color}`}>
                  {inView ? (
                    <CountUp end={metric.value} duration={2.5} useEasing={true} separator="." />
                  ) : '0'}
                  {metric.suffix}
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden lg:block w-px h-12 bg-white/10"></div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-gray-400">Vagas abertas na comunidade hoje</span>
          </div>

        </div>
      </div>
    </section>
  );
}
