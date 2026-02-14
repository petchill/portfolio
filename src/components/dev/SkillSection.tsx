const skillGroups = [
  {
    category: 'Usual (Confident / Use in last 6 months)',
    skills: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Golang',
      'MySQL',
      'Mongo',
      'Docker',
      'Firebase',
      'SOLID',
      'Clean Architecture',
    ],
    color: '#66d9ef',
  },
  {
    category: 'A Bit Rusty (Used to use daily or on production)',
    skills: [
      'Vue.js',
      'Node.js',
      'Express.js',
      'Kubernetes',
      'GCP',
      'Redis',
      'Firebase',
      'Gitlab',
      'ArgoCD',
      'Nginx',
      'DigitalOcean',
      'Agile',
    ],
    color: '#ffbe76',
  },
  {
    category: 'Tried (Known/tried them but never build it seriously)',
    skills: ['Java', 'C#', 'Svelte', 'Nest.js', 'Jest', 'D3.js', 'AWS'],
    color: '#ff7979',
  },
  {
    category: 'Learning / Interesting',
    skills: ['Python', 'AI Engineering', 'Kafka', 'Langchain'],
    color: '#a29bfe',
  },
];

export default function SkillSection() {
  const sectorSize = 360 / skillGroups.length;
  const radarSlices = skillGroups.map((group, index) => {
    const startDeg = index * sectorSize;
    const endDeg = startDeg + sectorSize;
    return `${group.color}33 ${startDeg}deg ${endDeg}deg`;
  });

  const placedSkills = skillGroups.flatMap((group, groupIndex) => {
    const startDeg = -90 + groupIndex * sectorSize;
    const endDeg = startDeg + sectorSize;
    const anglePadding = 14;
    const firstAngle = startDeg + anglePadding;
    const lastAngle = endDeg - anglePadding;
    const spread = Math.max(lastAngle - firstAngle, 1);
    const total = group.skills.length;

    return group.skills.map((skill, skillIndex) => {
      const ratio = total <= 1 ? 0.5 : skillIndex / (total - 1);
      const angle = firstAngle + spread * ratio;
      const ring = 16 + ((skillIndex % 4) + 1) * 8;
      const x = 50 + Math.cos((angle * Math.PI) / 180) * ring;
      const y = 50 + Math.sin((angle * Math.PI) / 180) * ring;

      return {
        key: `${group.category}-${skill}`,
        skill,
        color: group.color,
        x,
        y,
      };
    });
  });

  return (
    <section className="overflow-x-hidden relative min-h-screen bg-[#18191d] px-4 py-10 md:px-10 md:py-12 2xl:px-[60px]">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl 2xl:text-8xl leading-[0.9] tracking-tight font-libreCas text-white">
          SKILLS
        </h1>
      </div>

      <div className="flex flex-col md:flex-row  items-start gap-8">
        <div className="mx-auto flex w-full md:max-w-[40%] items-center justify-center">
          <div className="relative aspect-square w-full rounded-full border border-white/20 bg-[#121317]">
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: `conic-gradient(${radarSlices.join(', ')})` }}
            />
            <div className="pointer-events-none absolute inset-[8%] rounded-full border border-white/20" />
            <div className="pointer-events-none absolute inset-[24%] rounded-full border border-white/20" />
            <div className="pointer-events-none absolute inset-[40%] rounded-full border border-white/20" />
            <div className="pointer-events-none absolute left-1/2  h-[100%] w-px -translate-x-1/2 bg-white/20" />
            <div className="pointer-events-none absolute top-1/2 h-px w-[100%] -translate-y-1/2 bg-white/20" />
            <div className="pointer-events-none absolute inset-0 animate-[spin_6s_linear_infinite] rounded-full">
              <div className="absolute left-1/2 top-1/2 h-[2px] w-[44%] -translate-y-1/2 origin-left bg-gradient-to-r from-[#6dfbe4]/80 to-transparent" />
            </div>
            <div className="absolute rotate-[-50deg] left-[0%] top-[10%] -translate-x-[15%] font-bold">Learning</div>
            <div className="absolute rotate-[50deg] right-[0%] top-[10%] -translate-x-[20%] font-bold">Usual</div>
            <div className="absolute rotate-[-230deg] right-[0%] bottom-[10%] translate-x-[20%] font-bold">
              A Bit Rusty
            </div>
            <div className="absolute rotate-[230deg] left-[0%] bottom-[10%] -translate-x-[10%] font-bold">Tried</div>

            {placedSkills.map((item) => (
              <span
                key={item.key}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-black/45 px-2 py-[2px] text-[10px] leading-none text-white md:text-[11px]"
                style={{ left: `${item.x}%`, top: `${item.y}%`, boxShadow: `0 0 0 1px ${item.color}33` }}
              >
                {item.skill}
              </span>
            ))}

            <div className="absolute inset-[46%] rounded-full border border-[#6dfbe4] bg-[#0b1e1d]" />
            <div className="pointer-events-none absolute inset-[49%] rounded-full bg-[#6dfbe4]" />
          </div>
        </div>

        <div className="space-y-4">
          {skillGroups.map((group) => {
            const count = group.skills.length;
            return (
              <article key={group.category} className="rounded-xl border border-white/15 bg-white/5 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: group.color }} />
                    <h2 className="text-lg font-semibold text-white">{group.category}</h2>
                  </div>
                  <p className="text-sm text-zinc-300">{count} skills</p>
                </div>
                <p className="mt-2 text-sm text-zinc-200">{group.skills.join(' • ')}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
