import { useMemo, useState } from 'react';
import type { Project } from '../../types/project';
import Vinyl from './Vinyl';

const projects: Project[] = [
  {
    name: 'Wevis: Thailand Election 2026',
    description:
      'This project made to provide the information about election such as candidate, how to vote and others. I mainly contribute in section of candidate searching.',
    skills: ['React.js'],
    role: 'Contributor',
    thumbnail_url: '/portfolio/dev/project/thailand-election-2026.png',
    source_url: 'https://github.com/wevisdemo/thailand-election-2026',
    demo_url: 'https://election69.wevis.info/',
  },
  {
    name: 'Wevis: Democracy in School',
    description:
      'Web application to educate student about the democracy. In this web the have 2 sections, first is education section for the student, and the second is the quiz and opinion sharing. This project kind of fun for me, to make a quiz and education content that I have never made before. And I can feel to value of this education project. This project had used in the various real school classes to teach the children about democracy.',
    skills: ['React.js', 'Scrollama'],
    role: 'Main Contributor',
    thumbnail_url: '/portfolio/dev/project/democracy-in-school.png',
    source_url: 'https://github.com/wevisdemo/democracy-in-school',
    demo_url: 'https://wevis.info/democracyinschool',
  },
  {
    name: 'Wevis: Bangkok Election 2022',
    description:
      'Civic information platform tracking the 2022 Bangkok gubernatorial and Bangkok Council elections (22 May 2022). It provides candidate profiles, policies, real-time results, voting guides, election rules, and social listening data. The project was created to inform Bangkok voters about candidates and election processes, with additional related articles and tools to help citizens understand and participate in the democratic process. I had contributed in candidates section',
    skills: ['React.js'],
    role: 'Contributor',
    thumbnail_url: '/portfolio/dev/project/bkk-election-2022.png',
    source_url: 'https://github.com/wevisdemo/bkk-election-2022',
    demo_url: 'https://bkkelection2022.wevis.info/',
  },
  {
    name: 'Wevis: Dream Constitution',
    description:
      'This project is look like a discussion board to discuss about political that every people can views the comments and topics. There has part of admin and users, authorized by the Firebase authentication and manage the role by Firebase.',
    skills: ['React.js', 'Drag and Drop', 'Firebase storage'],
    role: 'Main Contributor',
    thumbnail_url: '/portfolio/dev/project/dreamcon.png',
    source_url: 'https://github.com/wevisdemo/dreamcon',
    demo_url: 'https://dreamcon.wevis.info/',
  },
  {
    name: 'Wevis: Senate 67',
    description:
      'Website to get to know information about senate election at 2024. There have instruction, voting result, candidate information, and others.',
    skills: ['Vue.js', 'Astro'],
    role: 'Contributor',
    thumbnail_url: '/portfolio/dev/project/senate67.png',
    source_url: 'https://github.com/wevisdemo/senate67',
    demo_url: 'https://senate67.com/',
  },
  {
    name: 'Wevis: Thailand Election 2023',
    description:
      'Website to provide information about Thailand election 2023 such as instruction, candidates, past work in each party, party policies, and others. I contribute in section of policy shopping, that user can come to browsing about the policies of each parties',
    skills: ['React.js'],
    role: 'Contributor',
    thumbnail_url: '/portfolio/dev/project/thailand-election-2023.png',
    source_url: 'https://github.com/wevisdemo/thailand-election-2023',
    demo_url: 'https://election66.wevis.info/',
  },
  {
    name: 'Clone Instagram',
    description:
      'This project, I tried to practice about system design and mock the instagram features which have following, auth, profile, news-feed, uploading, and notification. Used Golang for back-end and React for front-end',
    skills: ['React.js', 'Golang', 'Google Auth', 'Mysql', 'Kafka', 'Websocket', 'AWS S3 Cloud Storage'],
    role: 'Owner',
    thumbnail_url: '/portfolio/dev/project/instagram.png',
    source_url: 'https://github.com/petchill/clone-instagram',
  },
];

export default function ProjectSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedProject = useMemo(() => projects[selectedIndex] ?? projects[0], [selectedIndex]);

  return (
    <section
      className="relative min-h-screen h-full bg-fixed bg-center bg-cover bg-no-repeat flex flex-col"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/portfolio/dev/Vinyl-background.png)',
      }}
    >
      <h1 className="text-5xl md:text-6xl 2xl:text-8xl leading-[0.9] tracking-tight font-libreCas px-[16px] pt-[40px] md:p-[40px] 2xl:pt-[60px] 2xl:px-[60px] text-center md:text-left">
        PROJECT
      </h1>
      <div className="relative max-h-screen h-full flex flex-col md:flex-row gap-10 md:gap-8 px-4 py-10 md:px-10 md:py-12 2xl:px-[60px] justify-between">
        <article className="h-auto md:w-[calc(100%-280px)] max-w-[1240px] order-2 overflow-scroll rounded-2xl border border-white/20 text-left md:order-1 bg-black/80">
          <div className="relative h-40 w-full md:h-56">
            <img
              src={selectedProject.thumbnail_url}
              alt={`${selectedProject.name} cover`}
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
          <div className="p-4 md:p-10">
            <h1 className="mt-4 text-4xl leading-[1] font-libreCas md:text-6xl">{selectedProject.name}</h1>
            <p className="mt-4 text-lg text-zinc-200">Role: {selectedProject.role ?? '-'}</p>

            <p className="mt-8 text-base leading-relaxed text-zinc-100 md:text-lg">{selectedProject.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {selectedProject.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/30 px-3 py-1 text-sm text-zinc-100">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm md:text-base">
              {selectedProject.demo_url && (
                <a
                  className="rounded-full border border-white/30 px-4 py-2 transition-colors hover:bg-white hover:text-black"
                  href={selectedProject.demo_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
              {selectedProject.source_url && (
                <a
                  className="rounded-full border border-white/30 px-4 py-2 transition-colors hover:bg-white hover:text-black"
                  href={selectedProject.source_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        </article>

        <aside className="order-1 shrink-0 flex flex-row overflow-x-auto overflow-y-hidden md:overflow-x-hidden md:overflow-y-scroll  p-4 md:order-2 md:flex-col md:mx-auto md:items-center rounded-full border-white border-[2px] items-center">
          {/* <aside className="order-1 shrink-0 md:w-[280px] h-[180px] md:h-full w-full flex flex-row md:flex-col items-center overflow-x-scroll overflow-y-hidden md:overflow-x-hidden md:overflow-y-scroll py-4 md:order-2 md:items-center rounded-full border-white border-[2px]"></aside> */}
          {projects.map((project, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={`project.name-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`shrink-0 rounded-full p-1 transition-all duration-300 ${
                  isSelected
                    ? 'z-20 scale-110 opacity-100 ring-2 ring-white/80'
                    : '-ml-4 first:ml-0 md:-mt-15 md:ml-0 md:first:mt-0 scale-95 opacity-75 hover:opacity-95'
                }`}
                aria-pressed={isSelected}
                aria-label={`Select project ${project.name}`}
              >
                <Vinyl
                  backgroundImage={project.thumbnail_url}
                  className={`${isSelected ? 'w-[142px] md:w-[210px] lg:w-[230px]' : 'w-[120px] md:w-[170px] lg:w-[190px]'}`}
                  spinning={isSelected}
                />
              </button>
            );
          })}
        </aside>
      </div>
    </section>
  );
}
