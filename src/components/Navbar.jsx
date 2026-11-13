import { fadeIn } from '../lib/animation';
import { navLinks, person } from '../content/site';
import { StarIcon } from './Icons';

export default function Navbar({ onNavigate, animate }) {
  const fade = fadeIn(animate, 0, 'header-fade relative isolate sticky top-0 z-50 flex justify-between items-center py-8 px-6 md:px-12');

  return (
    <nav {...fade}>
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="text-xl font-medium tracking-tight font-serif hover:opacity-70 transition-opacity cursor-pointer flex items-start border-0 bg-transparent p-0"
      >
        <span className="relative">
          {person.firstName} {person.lastName}
          <StarIcon className="absolute top-0 -right-3.5 w-3.5 h-3.5" />
        </span>
      </button>

      <div className="flex gap-6 md:gap-8 text-sm md:text-base font-medium font-mono text-muted lowercase">
        {navLinks.map(({ label, route }) => (
          <button
            key={route}
            type="button"
            onClick={() => onNavigate(route)}
            className="interactive-link cursor-pointer border-0 bg-transparent p-0"
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
