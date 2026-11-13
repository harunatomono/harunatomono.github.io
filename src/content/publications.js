// Content for the publications page.
//
// To add an entry, copy one from the list below into the right section.
// Fields:
//   type      'article' | 'abstract' | 'patent'   (see entryTypes; controls the tag label and accent color)
//   title     entry title
//   authors   list of names, exactly as they should print. Your own name (person.citationName in
//             site.js) is highlighted automatically.
//   venue     journal / conference name (for patents: the assignee)
//   year      shown next to the venue in the card header
//   citation  the volume/pages/identifier part of the citation
//   status    optional; replaces "venue • year" in the card header (e.g. 'patent pending')
//   doi       optional; adds a "doi: ..." link
//   links     optional extra links: [{ label, href }]

// Tag label and accent color (a palette name from theme.js) for each entry type.
export const entryTypes = {
  article: { label: 'article', accent: 'accent2' },
  abstract: { label: 'abstract', accent: 'accent5' },
  patent: { label: 'intellectual property', accent: 'accent3' },
};

export const publicationSections = [
  {
    title: 'publications',
    entries: [
      {
        type: 'abstract',
        title:
          'Abstract 1978: Copy number analysis of regulatory regions reveal recurrent ' +
          'promoter/enhancer somatic copy number alterations across >8,000 TCGA samples.',
        authors: [
          'Tomono H', 'Bao C', 'Kowalewski A', 'Lehotzky D', 'Solan R', 'Leventhal M',
          'Corchete Sanchez LA', 'Heiman DI', 'Van Seters S', 'Belkin S', 'Wiseman S', 'Danysh BP',
          'Stewart C', 'Swamy VN', 'Wang G', 'Loinaz X', 'Everton Z', 'Lee GH', 'Lee WC', 'Park H',
          'Kim R', 'Ju YS', 'Rheinbay E', 'Getz G', 'Cherniack AD', 'Meyerson ML', 'Beroukhim R',
        ],
        venue: 'AACR Annual Meeting (Cancer Research)',
        year: '2026',
        citation: '2026;86(7 Suppl):Abstract nr 1978',
        doi: '10.1158/1538-7445.AM2026-1978',
      },
      {
        type: 'article',
        title: 'Sevabertinib, a Reversible HER2 Inhibitor with Activity in Lung Cancer.',
        authors: [
          'Siegel F', 'Siegel S', 'Kotýnková K', 'Uzunbas GK', 'Korr D', 'Tomono H',
          'Andersen S', 'Denney D', 'Berger M', 'Schulze VK', 'Lewis TA', 'Kaplan B', 'Golfier S',
          'Mortier J', 'Hillig RC', 'Boemer U', 'Petersen K', 'Eis K', 'Williams S', 'Rüttinger D',
          'Cherniack AD', 'Loong HH', 'Goto K', 'Grassi P', 'Meyerson M', 'Greulich H',
        ],
        venue: 'Cancer Discovery',
        year: '2026',
        citation: '2026 Jan 12;16(1):81-94',
        doi: '10.1158/2159-8290.CD-25-0605',
      },
      {
        type: 'article',
        title: 'Host cell protein detection via surfactant-assisted acid precipitation.',
        authors: ['Tomono H', 'Su Y', 'Adaniya S', 'Zhao B', 'Xiao H', 'Li N'],
        venue: 'Journal of Pharmaceutical Sciences',
        year: '2025',
        citation: '2025 Nov;114(11):104008',
        doi: '10.1016/j.xphs.2025.104008',
      },
      {
        type: 'article',
        title:
          'Plasma and Kidney Proteome Profiling Combined with Laser Capture Microdissection Reveal Large Increases in Immunoglobulins with Age.',
        authors: ['Chan LJG', 'Olsson N', 'Preciado López M', 'Hake K', 'Tomono H', 'Veras MA', 'McAllister FE'],
        venue: 'Proteomes',
        year: '2024',
        citation: '2024;12(2):16',
        doi: '10.3390/proteomes12020016',
      },
    ],
  },
  {
    title: 'patents',
    entries: [
      {
        type: 'patent',
        title: 'Size exclusion chromatography for characterizing host cell proteins.',
        authors: ['Xiao H', 'Li N', 'Zhao B', 'Tomono H', 'Hu M', 'Molden R', 'Hu Y', 'Huang Y', 'Qiu H'],
        venue: 'Regeneron Pharmaceuticals, Inc.',
        status: 'patent pending',
        citation: 'U.S. Patent Application 20230279046',
        links: [{ label: 'patent: US20230279046A1', href: 'https://patents.google.com/patent/US20230279046A1/en' }],
      },
    ],
  },
];
