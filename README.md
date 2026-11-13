# haruna's personal website

React + Vite + Tailwind site (home, publications, CV) deployed via Github Pages. Animation inspired by an old portfolio version by [Emmi Wu](https://www.emmiwu.com/)!

## updating content

| To change…                                   | Edit                                |
| -------------------------------------------- | ----------------------------------- |
| Name, email, location, nav links, footer links | `src/content/site.js`             |
| Hero, about paragraphs, news items            | `src/content/home.js`               |
| Publications and patents                      | `src/content/publications.js`       |
| Colors                                        | `src/content/theme.js`              |
| CV                                            | replace `public/<cv file>.pdf` (path set in `site.js`) |

Text in `home.js` supports light markup: `[link](https://...)`, `**highlight**`, `*italic*`.

To add a news item, add an object to the top of `news.items`. To add a publication, copy an entry in `publications.js` (fields are documented at the top of that file).

## project layout

```
.
├── index.html                  # page <title>, favicon link
├── vite.config.js
├── tailwind.config.js
├── public/
│   ├── favicon.svg
│   └── tomono-haruna_cv-public.pdf
└── src/
    ├── main.jsx                # entry point
    ├── App.jsx                 # routing + intro state
    ├── content/                # all editable content (see above)
    │   ├── site.js
    │   ├── home.js
    │   ├── publications.js
    │   └── theme.js
    ├── components/             # page sections
    │   ├── Loader.jsx          # intro animation
    │   ├── Navbar.jsx
    │   ├── HomeHero.jsx
    │   ├── AboutAndNews.jsx
    │   ├── PublicationsPage.jsx
    │   ├── CvPage.jsx
    │   ├── Footer.jsx
    │   ├── ScrollHint.jsx
    │   ├── RichText.jsx        # renders the **/*/[]() markup
    │   └── Icons.jsx
    ├── hooks/
    │   ├── useLoaderSequence.js
    │   └── useIsAtTop.js
    ├── lib/
    │   ├── animation.js        # ANIMATION_SPEED and loader timings
    │   └── theme.js            # theme -> CSS variables
    └── styles/
        ├── index.css           # tailwind entry
        ├── components.css
        └── animations.css
```

Intro animation speed: `ANIMATION_SPEED` in `src/lib/animation.js`.

## develop

```
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
```

Pushing to `main` deploys via `.github/workflows/deploy.yml`.
