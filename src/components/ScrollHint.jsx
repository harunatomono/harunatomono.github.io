import { ChevronDownIcon } from './Icons';

/** Bobbing chevron at the bottom of the home page that scrolls to the about section. */
export default function ScrollHint() {
  const scrollToAbout = () => {
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      aria-label="scroll down"
      onClick={scrollToAbout}
      className="scroll-hint fixed bottom-6 left-1/2 z-40 -translate-x-1/2 bg-transparent border-0 p-1 cursor-pointer"
    >
      <ChevronDownIcon />
    </button>
  );
}
