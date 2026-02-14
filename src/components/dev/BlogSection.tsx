import { useEffect, useState } from 'react';
import Paper from './Paper';
import type { BlogCard, MediumFeedResponse, MediumItem } from '../../types/blog';

const TEXT_COLORS = ['text-black'];
const BG_COLORS = [
  'bg-linear-to-br from-[#5e5e61] via-[#6d6d71] to-[#dcdcdc]',
  'bg-linear-to-br from-[#dcdcdc] via-[#7a7a7a] to-[#7b7b80]',
];
const ROTATIONS = ['rotate-[-2deg]', 'rotate-[2deg]', 'rotate-[-1deg]', 'rotate-[1.5deg]'];
const BLOG_FEED_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@songpon111333';

const extractThumbnail = (item: MediumItem) => {
  if (item.thumbnail) return item.thumbnail;
  const fromDescription = item.description?.match(/<img[^>]+src="([^">]+)"/i)?.[1];
  return fromDescription ?? '/portfolio/dev/project/thailand-election-2026.png';
};

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadBlogs = async () => {
      try {
        const response = await fetch(BLOG_FEED_URL);
        if (!response.ok) return;

        const data: MediumFeedResponse = await response.json();
        if (data.status !== 'ok' || !data.items?.length) return;

        const mapped = data.items.slice(0, 8).map((item, index) => ({
          title: item.title,
          href: item.link,
          thumbnailUrl: extractThumbnail(item),
          rotate: ROTATIONS[index % ROTATIONS.length],
          bgColor: BG_COLORS[index % BG_COLORS.length],
          textColor: TEXT_COLORS[index % TEXT_COLORS.length],
        }));

        if (isMounted) {
          setBlogs(mapped);
        }
      } catch {
        // Keep fallback data when API is unavailable.
      }
    };

    void loadBlogs();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      className="relative min-h-screen px-4 py-10 md:px-10 md:py-12 2xl:px-[60px] bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/portfolio/dev/cork-board.png)',
      }}
    >
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl 2xl:text-8xl leading-[0.9] tracking-tight font-libreCas text-white">
          BLOG
        </h1>
        <p className="mt-3 text-[#dbdbdb]">
          See more at{' '}
          <a className="text-white! font-bold underline!" href="https://medium.com/@songpon111333" target="_blank">
            Medium
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 place-items-center">
        {blogs.map((blog) => (
          <Paper
            key={blog.title}
            title={blog.title}
            thumbnailUrl={blog.thumbnailUrl}
            href={blog.href}
            className={`mx-auto lg:mx-0 ${blog.rotate} ${blog.bgColor} ${blog.textColor} border-black`}
          />
        ))}
      </div>
    </section>
  );
}
