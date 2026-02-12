import { useEffect, useState } from 'react';
import { Scrollama as ScrollamaRoot, Step } from 'react-scrollama';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Acme Studio',
    period: '2024 - Present',
    details: 'Built and maintained React interfaces with accessibility and performance in mind.',
  },
  {
    role: 'Software Engineer',
    company: 'Northstar Labs',
    period: '2022 - 2024',
    details: 'Developed product features across web and backend services for customer-facing workflows.',
  },
  {
    role: 'Junior Developer',
    company: 'Pixel Works',
    period: '2021 - 2022',
    details: 'Implemented UI components and collaborated on bug fixing and release hardening.',
  },
];

const backgroundColors = ['#0f172a', '#1f2937', '#3f1d2e'];

interface StepEnterPayload {
  data?: unknown;
}

const Scrollama = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);

  const activeExperience = experiences[activeStep] ?? experiences[0];

  useEffect(() => {
    setAnimateIn(false);
    const animationFrame = window.requestAnimationFrame(() => {
      setAnimateIn(true);
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [activeStep]);

  const onStepEnter = ({ data }: StepEnterPayload) => {
    if (typeof data === 'number') {
      setActiveStep(data);
    }
  };

  return (
    <section
      className="relative min-h-screen transition-colors duration-700"
      style={{ backgroundColor: backgroundColors[activeStep] ?? backgroundColors[0] }}
    >
      <div className="pointer-events-none sticky top-0 z-10 flex h-screen items-center justify-center px-4">
        <article
          className={`w-full max-w-3xl rounded-2xl border border-white/20 bg-black/25 p-8 text-center text-white shadow-2xl backdrop-blur-sm transition-all duration-500 ease-out md:p-12 ${
            animateIn ? 'translate-x-0 opacity-100' : 'translate-x-14 opacity-0'
          }`}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-200">{activeExperience.period}</p>
          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">{activeExperience.role}</h2>
          <p className="mt-3 text-lg text-zinc-100 md:text-2xl">{activeExperience.company}</p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-100 md:text-xl">
            {activeExperience.details}
          </p>
        </article>
      </div>

      <ScrollamaRoot offset={0.5} onStepEnter={onStepEnter}>
        {experiences.map((item, index) => (
          <Step data={index} key={`${item.company}-${item.period}`}>
            <div className="h-screen w-full" />
          </Step>
        ))}
      </ScrollamaRoot>

      <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-white/75 md:text-sm">
        <p>SCROLL</p>
      </div>
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.15em] text-white/75 md:text-sm">
        <p>
          {activeStep + 1} / {experiences.length}
        </p>
      </div>
      <div className="h-[20vh]" />
    </section>
  );
};

export default Scrollama;
