
const siteMeta = {
    title: "Markoz Peña",
    description:
    "Frontend engineer focused on building performant, scalable web applications with React and Next.js. Passionate about clean architecture, developer experience, and long-term thinking.",    copyright: "Markoz Peña",
    author: {
        name: "Markoz Peña",
        email: "markdrew53@gmail.com",
        x: "https://x.com/markozxuu",
        github: "https://github.com/markozxuu",
        linkedin: "https://www.linkedin.com/in/markozpena/",
    },
    siteUrl: "https://markozxuu.vercel.app"
}
 export const resume = [
    {
      company: 'Foris.AI',
      logo: '/logos/foris.png',
      title: 'Frontend Engineer',
      start: 'Abr 2023',
      end: 'Sept 2025',
    },
    {
      company: 'Terapify',
      logo: '/logos/terapify.png',
      title: 'Front-End Developer',
      start: 'Abr 2022',
      end: 'Nov 2022',
    },
    {
      company: 'Scape',
      logo: '/logos/scape.png',
      title: 'Software Engineering',
      start: 'Dic 2022',
      end: 'Mar 2022',
    },
    {
      company: 'wOS',
      logo: '/logos/getwos.png',
      title: 'Software Engineering',
      start: 'Ago 2021',
      end: 'Nov 2021',
    },
    {
      company: 'Diametra Labs',
      logo: '/logos/diametra.png',
      title: 'Front-End Developer',
      start: 'Jun 2020',
      end: 'Ago 2021',
    }
  ]
export const projects = [
  {
    name: 'Vercel CLI',
    logo: '/projects/vercel.png',
    description:
      'Migrated multiple CLI commands to TypeScript and implemented a res.redirect() helper for the Node runtime, improving server-side response ergonomics within the Vercel core repository.',
    link: { href: 'https://github.com/vercel/vercel/pull/4947', label: 'github.com/vercel/vercel' },
  },
  {
    name: 'Next.js',
    logo: '/projects/nextjs.png',
    description:
      'Improved redirect error messaging and contributed refinements related to server response handling and static file serving.',
    link: { href: 'https://github.com/vercel/next.js/pull/15844', label: 'github.com/vercel/next.js' },
  },
  {
    name: 'Hyper',
    logo: '/projects/hyper.png',
    description:
      'Contributed feature development, search functionality, UI refinements, plugin documentation updates, and ecosystem improvements including work related to the Hyper Store distribution experience.',
    link: { href: 'https://github.com/vercel/hyper', label: 'github.com/vercel/hyper' },
  },
  {
    name: 'SWR',
    logo: '/projects/swr.png',
    description:
      'Led Spanish internationalization efforts and improved documentation, translations, and content clarity across the SWR site.',
    link: { href: 'https://github.com/vercel/swr-site/tree/main', label: 'github.com/vercel/swr-site' },
  },
]


export default siteMeta;