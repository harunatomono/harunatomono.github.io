import { useState } from 'react';

import AboutAndNews from './components/AboutAndNews';
import CvPage from './components/CvPage';
import Footer from './components/Footer';
import HomeHero from './components/HomeHero';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import PublicationsPage from './components/PublicationsPage';
import ScrollHint from './components/ScrollHint';
import { useIsAtTop } from './hooks/useIsAtTop';
import { useLoaderSequence } from './hooks/useLoaderSequence';
import { ANIMATION_SPEED, LOADER_PHASE } from './lib/animation';
import { themeVariables } from './lib/theme';

// URL hashes that skip the intro animation (e.g. someone opening /#cv directly).
const HASH_TO_ROUTE = { '#publications': 'publications', '#cv': 'cv', '#about': 'home' };

function HomePage({ animate }) {
  return (
    <>
      <HomeHero animate={animate} />
      <AboutAndNews animate={animate} />
    </>
  );
}

export default function App() {
  // Decide once, on first load, whether to play the intro.
  const [initialRoute] = useState(() => HASH_TO_ROUTE[window.location.hash]);
  const playIntro = initialRoute === undefined;

  const [route, setRoute] = useState(initialRoute ?? 'home');
  const [animateHome, setAnimateHome] = useState(playIntro);
  const [loaderPhase, skipLoader] = useLoaderSequence(playIntro);
  const isAtTop = useIsAtTop();

  const navigate = (nextRoute) => {
    skipLoader();
    setRoute(nextRoute);
    if (nextRoute === 'home') setAnimateHome(false);
    window.location.hash = nextRoute;
    window.scrollTo(0, 0);
  };

  const showScrollHint = route === 'home' && loaderPhase === LOADER_PHASE.DONE && isAtTop;

  return (
    <div className="site-shell min-h-screen font-sans" style={{ ...themeVariables, '--animation-speed': ANIMATION_SPEED }}>
      <Loader phase={loaderPhase} />
      <div className="relative z-10">
        <Navbar onNavigate={navigate} animate={animateHome} />
        <main>
          {route === 'home' && <HomePage animate={animateHome} />}
          {route === 'publications' && <PublicationsPage />}
          {route === 'cv' && <CvPage />}
        </main>
        {showScrollHint && <ScrollHint />}
        <Footer />
      </div>
    </div>
  );
}
