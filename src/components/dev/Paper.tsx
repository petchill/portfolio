interface PaperProps {
  title: string;
  thumbnailUrl: string;
  href?: string;
  className?: string;
}

export default function Paper({ title, thumbnailUrl, href, className = '' }: PaperProps) {
  const content = (
    <article
      className={`group relative w-full max-w-[320px] overflow-hidden rounded-[3px] border p-3 text-left shadow-[0_14px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-4 w-4 -translate-x-1/2 rounded-full border border-black/15 bg-[#2e2e2e] shadow-[0_1px_2px_rgba(0,0,0,0.35)]" />
      <div className="relative mt-4 overflow-hidden border border-[2px] border-black/20 bg-black/10 rounded-[4px]">
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-40 w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/25" />
      </div>
      <h3 className="mt-3 line-clamp-2 text-lg leading-tight font-semibold ">{title}</h3>
    </article>
  );

  if (!href) return content;

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block w-full max-w-[320px]">
      {content}
    </a>
  );
}
