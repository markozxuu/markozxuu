
const siteMeta = {
    title: "Brian Ketelsen",
    description: "Brian Ketelsen is a developer advocate, keynote speaker, author, and open source practitioner.",
    copyright: "Brian Ketelsen, CC-BY-SA",
    author: {
        name: "Brian Ketelsen",
        email: "me@brian.dev",
        twitter: "https://twitter.com/bketelsen",
        mastodon: "https://tty0.social/@bketelsen",
        instagram: "https://instagram.com/bketelsen",
        github: "https://github.com.com/bketelsen",
        linkedin: "https://linkedin.com/in/brianketelsen",
        twitch: "https://twitch.tv/bketelsen",
        youtube: "https://youtube.com/@bketelsen",
    },
    siteUrl: "https://brian.dev"
}
 export const resume = [
    {
      company: 'Amazon',
      title: 'Principal Developer Advocate',
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Microsoft',
      title: 'Principal Cloud Developer Advocate',
      start: '2017',
      end: '2022',
    },
    {
      company: 'XOR Data Exchange',
      title: 'CIO',
      start: '2014',
      end: '2016',
    },
    {
      company: 'Clarity Services, Inc.',
      title: 'COO',
      start: '2008',
      end: '2014',
    },
  ]
export const projects = [
  {
    name: 'Fleek',
    description:
      'Install and manage all the tools you need to be productive.',
    link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
  },
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
  },
  {
    name: 'Captain Hook',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
  },
  {
    name: 'Kubernetes',
    description:
      'Production-Grade Container Scheduling and Management',
    link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
  },
  {
    name: 'Go',
    description:
      'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
  },


]


export default siteMeta;