// Content for the home page: hero, about, and news.
//
// Any text below can use a little inline markup:
//   [link text](https://example.com)   -> link
//   **text**                           -> highlighted
//   *text*                             -> italic
// They can be combined, e.g.  **[Dr. Someone](https://example.com)**

export const hero = {
  headline:
    'Haruna is an aspiring *bioinformatics researcher* and a first-year PhD student in the Biological and Medical Informatics program at UCSF.',
  stickyNote: 'She is exploring SF, taking photos, and learning about cool genomics and methods research!',
};

export const about = {
  heading: 'about',
  // One string per paragraph.
  paragraphs: [
    'I am a first-year PhD student at UCSF in the Biological and Medical Informatics (BMI) program. ' +
      'My research interests are in 3D genome architecture and regulatory genomics, but am open to exploring methods development in other omics spaces.',

    'Previously, I was a computational associate at the Broad Institute and Dana-Farber Cancer Institute in the labs of ' +
      '**[Dr. Rameen Beroukhim](https://beroukhimlab.org/)** and **[Dr. Matthew Meyerson](https://labs.dana-farber.org/meyersonlab/)**. ' +
      'My work focused on developing methods for and analyzing recurrent somatic genome rearrangements in cancer.',

    'In 2024, I received my B.S. in Bioengineering and Minor in Neurobiology from Caltech, where I worked in ' +
      "**[Dr. Tsui-Fen Chou's lab](https://tfchoulab.caltech.edu/)** with Will Rosencrans. " +
      'I was also a research intern at Calico Life Sciences and Regeneron Pharmaceuticals.',

    'Beyond the lab, I explore the intersections of human and non-human connections with the environment through ' +
      '**[photography](https://photosbyharuna.mypixieset.com/)**, and am training for my first ever half marathon.',
  ],
};

export const news = {
  heading: 'news',
  // Only the newest `maxItems` are shown. Keep the list newest-first.
  maxItems: 5,
  items: [
    {
      date: 'Sep 2026',
      text:
        "I've made my cross-country move from Boston to San Francisco, and started my first year at UCSF in the BMI program. " +
        'Thank you to everyone at the Broad and Dana-Farber for an inspiring 2 years.',
    },
    {
      date: 'Apr 2026',
      text:
        "I presented my work for The Cancer Genome Atlas' whole-genome sequencing project at AACR 2026. " +
        'It was great to see all the recent breakthroughs in cancer biology and explore San Diego :)',
    },
    {
      date: 'Jan 2026',
      text:
        'Excited to share some of my work with the Meyerson Lab on sevabertinib, a reversible HER2 inhibitor for lung cancer, published in ' +
        '*[Cancer Discovery](https://doi.org/10.1158/2159-8290.CD-25-0605)*.',
    },
    {
      date: 'Nov 2025',
      text:
        'My first ever first-author paper on a surfactant-assisted acid precipitation method, developed during my time at Regeneron, was published in the ' +
        '*[Journal of Pharmaceutical Sciences](https://doi.org/10.1016/j.xphs.2025.104008)*!!',
    },
    {
      date: 'Aug 2024',
      text:
        'I moved to Cambridge, MA and joined the Broad Institute as a Computational Associate in the Beroukhim and Meyerson Labs. ' +
        'Looking forward to learning about and working on cutting edge cancer research.',
    },
    {
      date: 'June 2024',
      text: 'I graduated from Caltech with a B.S. in Bioengineering and a Minor in Neurobiology!',
    },
  ],
};
