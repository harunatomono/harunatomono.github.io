import { fadeIn } from '../lib/animation';
import { about, news } from '../content/home';
import RichText from './RichText';

const LINK_CLASS = 'underline underline-offset-4';
const HEADING_CLASS = 'text-3xl font-serif font-medium underline underline-offset-8 section-heading';

export default function AboutAndNews({ animate }) {
  return (
    <section id="about" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div {...fadeIn(animate, 4, 'md:col-span-7 flex flex-col gap-8')}>
          <h2 className={`${HEADING_CLASS} flex items-center gap-4`}>{about.heading}</h2>
          <div className="flex flex-col gap-6 leading-relaxed text-lg font-sans">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>
                <RichText text={paragraph} linkClassName={LINK_CLASS} />
              </p>
            ))}
          </div>
        </div>

        <div {...fadeIn(animate, 5, 'md:col-span-5 flex flex-col gap-8')}>
          <h2 className={HEADING_CLASS}>{news.heading}</h2>
          <div className="flex flex-col gap-8">
            {news.items.slice(0, news.maxItems).map((item) => (
              <div key={item.date} className="news-item flex flex-col gap-1">
                <span className="news-date text-xs uppercase tracking-widest text-subtle font-bold font-mono">{item.date}</span>
                <p className="text-sm leading-snug font-sans">
                  <RichText text={item.text} linkClassName={LINK_CLASS} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
