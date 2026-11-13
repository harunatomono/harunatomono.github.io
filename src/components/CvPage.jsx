import { person } from '../content/site';

export default function CvPage() {
  return (
    <section className="px-4 md:px-12 py-10 md:py-14 max-w-6xl mx-auto min-h-[calc(100svh-8rem)]">
      <div className="w-full overflow-hidden rounded-xl border border-[color:var(--border-default)]">
        <iframe
          title={`${person.firstName} ${person.lastName} cv`}
          src={person.cvPath}
          className="h-[calc(100svh-12rem)] min-h-[560px] w-full"
        />
      </div>
    </section>
  );
}
