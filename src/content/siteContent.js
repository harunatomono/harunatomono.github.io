// edit this file to change site copy, colors, and sections.

export const siteContent = {
    theme: {
        // define editable accent and neutral slots here.
        palette: {
            accent1: '#c6df8b',
            accent1Dark: '#8ba550',
            accent2: '#ffa7b0',
            accent2Dark: '#e44d5c',
            accent3: '#feab6c',
            accent3Dark: '#cd732e',
            accent4: '#66bde0',
            accent4Dark: '#4093b4',
            neutral1: '#faf9e9',
            neutral2: '#faf9e9',
            neutral3: '#f5efdc',
            neutral4: '#ebdebd',
            neutral5: '#dbc794',
            neutral6: '#b79663',
            neutral7: '#967648',
            neutral8: '#75582f',
            neutral9: '#503a1f',
            neutral10: '#362712',
            neutral11: '#211808',
        },
        page: {
            background: 'neutral1',
            text: 'neutral9',
            selectionBackground: 'accent1',
            selectionText: 'neutral10',
        },
        text: {
            muted: 'neutral8',
            subtle: 'neutral7',
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
        cvHref: '/tomono-haruna_cv-public.pdf',
        cvTitle: 'haruna tomono cv',
    },
    navigation: {
        publicationsLabel: 'publications',
        cvLabel: 'cv',
    },
    hero: {
        // set emphasis: true on any segment you want to emphasize.
        headline: [
            { text: 'Haruna is an aspiring ' },
            { text: 'bioinformatics researcher', emphasis: true },
            { text: ' currently working as a computational associate at the Broad Institute.' },
        ],
        stickyNote: 'She is analyzing cancer genomes, taking lots of pictures, and trying out new restaurants + cafes.',
    },
    sections: {
        aboutLabel: 'about',
        newsLabel: 'news',
    },
    about: {
        paragraphs: [
            [
                { text: 'I am a computational associate at the Broad Institute and Dana-Farber Cancer Institute in the labs of ' },
                { text: 'Dr. Rameen Beroukhim', highlight: true, href: 'https://beroukhimlab.org/' },
                { text: ' and ' },
                { text: 'Dr. Matthew Meyerson', highlight: true, href: 'https://labs.dana-farber.org/meyersonlab/' },
                { text: '. My work focuses on developing methods for and analyzing recurrent somatic copy number alterations in cancer. Overall, I hope to develop computational methods and data visualizations that bridge the gap between the bench and big data.' },
            ],
            [
                { text: 'In 2024, I received my B.S. in Bioengineering and Minor in Neurobiology from Caltech, where I worked in ' },
                { text: 'Dr. Tsui-Fen Chou\'s lab', highlight: true, href: 'https://tfchoulab.caltech.edu/' },
                { text: ' with Will Rosencrans. Previously, I was a research intern at Calico Life Sciences and Regeneron Pharmaceuticals.' }
            ],
            [
                { text: 'Beyond the lab, I explore the intersections of human and non-human connections with the environment through ' },
                { text: 'photography', highlight: true, href: 'https://photosbyharuna.mypixieset.com/' },
                { text: ' and graphic design.' },
            ],
        ],
    },
    newsUpdates: [
        {
            date: 'Apr 2026',
            contentSegments: [
                { text: 'I presented my work for The Cancer Genome Atlas\' whole-genome sequencing project at AACR 2026. It was great to learn more about cutting edge cancer research and explore San Diego :)' },
            ],
        },
        {
            date: 'Jan 2026',
            contentSegments: [
                { text: 'Excited to share some of my work with the Meyerson Lab on sevabertinib, a reversible HER2 inhibitor for lung cancer, published in ' },
                { text: 'Cancer Discovery', italic: true, href: 'https://doi.org/10.1158/2159-8290.CD-25-0605' },
                { text: '.' },
            ],
        },
        {
            date: 'Nov 2025',
            content: [
                { text: 'My first ever first-author paper on a surfactant-assisted acid precipitation method is published in the ' },
                { text: 'Journal of Pharmaceutical Sciences', italic: true, href: 'https://doi.org/10.1016/j.xphs.2025.104008' },
                { text: '!!' }
            ],
        },
        {
            date: 'Aug 2024',
            content: 'I moved to Cambridge, MA and joined the Broad Institute as a Computational Associate in the Beroukhim and Meyerson Labs.',
        },
        {
            date: 'June 2024',
            content: 'I graduated from Caltech with a B.S. in Bioengineering and a Minor in Neurobiology!',
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
                    links: [
                        {
                            label: 'patent: US20230279046A1',
                            href: 'https://patents.google.com/patent/US20230279046A1/en'
                        }
                    ]
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