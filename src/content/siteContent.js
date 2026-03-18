// edit this file to change site copy, colors, and sections.

export const siteContent = {
    theme: {
        // define editable accent and neutral slots here.
        palette: {
            accent1: '#bef264',
            accent1Dark: '#7bb722',
            accent2: '#f9a8d4',
            accent2Dark: '#f472b6',
            accent3: '#fde68a',
            accent3Dark: '#fcd34d',
            accent4: '#2563eb',
            accent4Dark: '#1d4ed8',
            neutral1: '#fafaf9',
            neutral2: '#fafafa',
            neutral3: '#f5f5f5',
            neutral4: '#e5e5e5',
            neutral5: '#d1d5db',
            neutral6: '#a3a3a3',
            neutral7: '#737373',
            neutral8: '#525252',
            neutral9: '#262626',
            neutral10: '#171717',
            neutral11: '#000000',
        },
        page: {
            background: 'neutral1',
            text: 'neutral10',
            selectionBackground: 'accent1',
            selectionText: 'neutral10',
        },
        text: {
            muted: 'neutral8',
            subtle: 'neutral6',
        },
        border: {
            default: 'neutral4',
            soft: 'neutral3',
            underline: 'neutral4',
            news: 'neutral5',
            newsDot: 'neutral11',
        },
        notes: {
            hero: {
                background: 'accent1',
                text: 'neutral10',
            },
            sticky: {
                background: 'accent2',
                fold: 'accent2Dark',
                text: 'neutral10',
            },
            contact: {
                background: 'accent3',
                text: 'neutral9',
            },
        },
        loader: {
            phase1Background: 'accent1',
            phase2Background: 'accent2',
            phase3Background: 'accent3',
            text: 'neutral10',
        },
        tags: {
            background: 'neutral3',
            text: 'neutral7',
        },
        footer: {
            background: 'neutral2',
            text: 'neutral9',
        },
        links: {
            hover: 'accent4',
        },
    },
    person: {
        firstName: 'haruna',
        lastName: 'tomono',
        displayName: 'haruna tomono',
        email: 'htomono@broadinstitute.org',
        location: 'Cambridge, MA',
        cvHref: '/tomono-haruna_cv.pdf',
        cvTitle: 'haruna tomono cv',
    },
    navigation: {
        publicationsLabel: 'publications',
        cvLabel: 'cv',
    },
    hero: {
        // set emphasis: true on any segment you want to emphasize.
        headline: [
            { text: 'Haruna is a ' },
            { text: 'computational biologist', emphasis: true, italic: true },
            { text: ' bridging wet and dry labs to analyze ' },
            { text: 'cancer-related genome data', emphasis: true },
            { text: '.' },
        ],
        stickyNote: 'Computational Associate at the Broad Institute of MIT and Harvard.',
    },
    sections: {
        aboutLabel: 'about',
        newsLabel: 'news',
    },
    about: {
        paragraphs: [
            [
                { text: 'This website is under construction!!!' }
            ],
            [
                { text: 'I am an associate computational biologist analyzing cancer-related genome data. I graduated from ' },
                { text: 'Caltech', highlight: true, href: 'https://www.caltech.edu' },
                { text: ' with a BS in Bioengineering and a Minor in Neurobiology, and am currently conducting research at the ' },
                { text: 'Broad Institute', highlight: true, href: 'https://www.broadinstitute.org' },
                { text: ' with Drs. Rameen Beroukhim and Matthew Meyerson.' },
            ],
            [
                { text: 'My work focuses on computational biology methods development, biological data visualization, and multi-omics. With extensive experience in MS-based proteomics, data analysis, and mammalian cell culture, I strive to build stronger wet and dry lab collaborations for data-driven biological research.' },
            ],
            [
                { text: 'Beyond the lab, I explore the intersections of human and non-human connections with the environment through photography and graphic design.' },
            ],
        ],
    },
    newsUpdates: [
        {
            date: 'Jan 2026',
            contentSegments: [
                { text: 'Excited to share our latest work on sevabertinib, a reversible HER2 inhibitor for non-small cell lung cancer, published in ' },
                { text: 'Cancer Discovery', href: 'https://doi.org/10.1158/2159-8290.CD-25-0605' },
                { text: '.' },
            ],
        },
        {
            date: 'Aug 2024',
            content: 'Moved to Cambridge, MA and joined the Broad Institute of MIT and Harvard as a Computational Associate in the Beroukhim and Meyerson Labs.',
        },
        {
            date: 'June 2024',
            content: 'Graduated from Caltech with a B.S. in Bioengineering and a Minor in Neurobiology!',
        },
        {
            date: 'Jan 2024',
            content: 'New publication in Proteomes detailing laser-capture microdissection LC-MS workflows in aging kidney subpopulations.',
        },
    ],
    // add more sections here for reviews, preprints, or other categories.
    publicationSections: [
        {
            title: 'publications',
            items: [
                {
                    accent: 'accent2',
                    label: 'article',
                    title: 'Sevabertinib, a Reversible HER2 Inhibitor with Activity in Lung Cancer.',
                    authors: ['Siegel F', 'Siegel S', 'Kotýnková K', 'Karsli Uzunbas G', 'Korr D', 'Tomono H', 'Andersen S', 'Denney D', 'Berger M', 'Schulze VK', 'Lewis TA', 'Kaplan B', 'Golfier S', 'Mortier J', 'Hillig RC', 'Boemer U', 'Petersen K', 'Eis K', 'Williams S', 'Rüttinger D', 'Cherniack AD', 'Loong HH', 'Goto K', 'Grassi P', 'Meyerson M', 'Greulich H'],
                    journal: {
                        name: 'Cancer Discovery',
                        meta: '2026',
                        citation: '2026 Jan 12;16(1):81-94',
                    },
                    links: [
                        {
                            label: 'doi: 10.1158/2159-8290.CD-25-0605',
                            href: 'https://doi.org/10.1158/2159-8290.CD-25-0605',
                        },
                    ],
                },
                {
                    accent: 'accent2',
                    label: 'article',
                    title: 'Host cell protein detection via surfactant-assisted acid precipitation.',
                    authors: ['Tomono H', 'Su Y', 'Adaniya S', 'Zhao B', 'Xiao H', 'Li N'],
                    journal: {
                        name: 'Journal of Pharmaceutical Sciences',
                        meta: '2025',
                        citation: '2025 Nov;114(11):104008',
                    },
                    links: [
                        {
                            label: 'doi: 10.1016/j.xphs.2025.104008',
                            href: 'https://doi.org/10.1016/j.xphs.2025.104008',
                        },
                    ],
                },
                {
                    accent: 'accent2',
                    label: 'article',
                    title: 'Plasma and Kidney Proteome Profiling Combined with Laser Capture Microdissection Reveal Large Increases in Immunoglobulins with Age.',
                    authors: ['Chan LJG', 'Olsson N', 'Preciado López M', 'Hake K', 'Tomono H', 'Veras MA', 'McAllister FE'],
                    journal: {
                        name: 'Proteomes',
                        meta: '2024',
                        citation: '2024;12(2):16',
                    },
                    links: [
                        {
                            label: 'doi: 10.3390/proteomes12020016',
                            href: 'https://doi.org/10.3390/proteomes12020016',
                        },
                    ],
                },
            ],
        },
        {
            title: 'patents',
            items: [
                {
                    accent: 'accent3',
                    label: 'intellectual property',
                    meta: 'patent pending',
                    title: 'Size exclusion chromatography for characterizing host cell proteins.',
                    summaryWidth: 'max-w-3xl',
                    authors: ['Xiao H', 'Li N', 'Zhao B', 'Tomono H', 'Hu M', 'Molden R', 'Hu Y', 'Huang Y', 'Qiu H'],
                    patent: {
                        assignee: 'Regeneron Pharmaceuticals, Inc.',
                        citation: 'U.S. Patent Application 20230279046',
                    },
                },
            ],
        },
    ],
    footerLinks: [
        {
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/harunatomono',
        },
        {
            label: 'GitHub',
            href: 'https://github.com/harunatomono',
        },
        {
            label: 'Google_Scholar',
            href: 'https://scholar.google.com/citations?user=lztHqWEAAAAJ&hl=en',
        },
    ],
};