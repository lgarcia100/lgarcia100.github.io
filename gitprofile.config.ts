// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lgarcia100', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['lgarcia100/Section-Report', 'lgarcia100/MicrobiomeTutorial'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Invertebrate Zoology Presentation on Acanthocephalan Species',
          description:
            'This project was a dissection of a study on the effects of different pharmaceautical treatment of parasitic acanthocephalans in squirrel monkeys',
          imageUrl:
            'https://github.com/lgarcia100/lgarcia100.github.io/raw/main/Screenshot%202025-04-30%20090735.png',
          link: 'https://github.com/lgarcia100/lgarcia100.github.io/raw/main/Acanthocephalan%20Slides%20Invertebrate%20Zoology%20.pdf',
        },
        {
          title: 'Organic Chemistry Final Presentation on Dipeptide Identification based on Lab Isolation',
          description:
            'Demonstration of proficiency in interpreting lab results to determine the sturcture of a specific unknown given',
          imageUrl:
            'https://github.com/lgarcia100/lgarcia100.github.io/raw/main/Screenshot%202025-04-30%20091011.png',
          link: 'https://github.com/lgarcia100/lgarcia100.github.io/raw/main/Dipeptide%20Lab%20Report%20-%20Luis%20Garcia%2C%20Priscilla%20Garcia.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Luis Garcia Projects',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ariful-alam',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.arifszn.com',
    phone: '',
    email: 'lgarcia4272@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/lgarcia100/lgarcia100.github.io/raw/main/LuisGarciaCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PCR',
    'Bioinformatics',
    'Nephrectomy',
  ],
  experiences: [
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'Bachelor Degree in Biological Sciences',
      from: '2021',
      to: '2026',
    },
  ],
  publications: [
    {
      title: 'The Whole Genome Sequence of Atlantibacter subterranea Isolated From Uranium-contaminated Sediment',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Adrianna Gonzalez, Sofia Amaral, Luis Garcia, Samantha Prince, Komal Takhar',
      link: 'https://github.com/lgarcia100/lgarcia100.github.io/raw/main/MRA%20Paper%20Rough%20Draft%20.pdf',
      description:
        'This is a manuscript in submission.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'luxury',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
