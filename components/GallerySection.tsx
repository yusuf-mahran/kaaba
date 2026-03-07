import * as motion from 'motion/react-client';
import AnimatedImg from './utils/AnimatedImg';

export default function GallerySection() {
  const images = [
    {
      id: 1,
      span: 'md:col-span-1 md:row-span-2',
      src: '/gallery/mecca-view.jpg',
      alt: 'Mecca View',
    },
    {
      id: 2,
      span: 'md:col-span-2 md:row-span-1',
      src: '/gallery/kaaba-tawaf.webp',
      alt: 'Kaaba Tawaf',
    },
    {
      id: 3,
      span: 'md:col-span-1 md:row-span-1',
      src: '/gallery/madina-mosque.webp',
      alt: 'Madinah Mosque',
    },
    {
      id: 4,
      span: 'md:col-span-1 md:row-span-1',
      src: '/gallery/pilgrims-praying.jpg',
      alt: 'Pilgrims Praying',
    },
    {
      id: 5,
      span: 'md:col-span-2 md:row-span-2',
      src: '/gallery/arafat-mountain.jpg',
      alt: 'Arafat Mountain',
    },
    {
      id: 6,
      span: 'md:col-span-1 md:row-span-1',
      src: '/gallery/zamzam-water.webp',
      alt: 'Zamzam Water',
    },
    {
      id: 7,
      span: 'md:col-span-1 md:row-span-1',
      src: '/gallery/mina-tents.jpg',
      alt: 'Mina Tents',
    },
  ];

  return (
    <section id="journey" className="mb-28 mt-28">
      <div className="mb-12 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black uppercase tracking-tight text-text-primary md:text-5xl"
        >
          Memorable Journeys
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg text-text-secondary"
        >
          Glimpses of spiritual serenity from our past Hajj and Umrah tours.
          Placeholder images for future memories.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
        {images.map((img, i) => (
          <AnimatedImg
            key={img.id}
            src={img.src}
            alt={img.alt}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`${img.span}`}
          />
        ))}
      </div>
    </section>
  );
}
