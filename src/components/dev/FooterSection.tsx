export default function FooterSection() {
  return (
    <footer className="border-t border-white/20 bg-[#121316] px-4 py-10 text-white md:px-10 2xl:px-[60px]">
      <div className="mx-auto flex w-full max-w-[2048px] flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-3xl font-libreCas md:text-4xl">Songpon Ninwong (Petch)</h2>
          <p className="mt-3 text-zinc-300">
            Email:{' '}
            <a className="text-white! underline!" href="mailto:songpon111333@gmail.com">
              songpon111333@gmail.com
            </a>
          </p>

          <div className="mt-3 flex flex-wrap gap-3">
            <a href="https://github.com/petchill" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" alt="GitHub badge" />
            </a>
            <a href="https://medium.com/@songpon111333" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white" alt="Medium badge" />
            </a>
            <a href="https://www.linkedin.com/in/songpon-ninwong/" target="_blank" rel="noreferrer">
              <img
                src="https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white"
                alt="LinkedIn badge"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
