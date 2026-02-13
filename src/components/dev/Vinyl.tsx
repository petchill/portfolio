interface VinylProps {
  backgroundImage: string;
  className?: string;
  spinning?: boolean;
}

const Vinyl = ({ backgroundImage, className, spinning = false }: VinylProps) => {
  return (
    <div
      className={`relative aspect-square ${className} ${
        spinning ? 'motion-safe:animate-[spin_3s_linear_infinite]' : ''
      }`}
    >
      <div
        className="absolute inset-0 rounded-full shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitMaskImage: 'radial-gradient(circle, transparent 10px, black 10px 100%)',
          maskImage: 'radial-gradient(circle, transparent 10px, black 10px 100%)',
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, rgba(0,0,0,0.1) 0 2px, transparent 2px 100%), repeating-radial-gradient(circle at center, rgba(10, 10, 10, 0.25) 0 4px, rgba(8, 8, 8, 0.49) 4px 7px, rgba(16, 16, 16, 0.25) 7px 9px)',
          }}
        />
      </div>
      <div
        className="absolute left-1/2 top-1/2 h-[34%] w-[34%]  -translate-x-1/2 -translate-y-1/2 rounded-full border border-white p-[6px]"
        style={{
          WebkitMaskImage: 'radial-gradient(circle, transparent 10px, black 10px 100%)',
          maskImage: 'radial-gradient(circle, transparent 10px, black 10px 100%)',
        }}
      >
        <div className="h-full w-full rounded-full bg-black" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white" />
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_36%)]" />
    </div>
  );
};

export default Vinyl;
