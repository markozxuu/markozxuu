import ExperienceItem from '../experience-item/experience-item'

const EXPERIENCE = [
  {
    id: '1',
    date: 'Currently',
    title: 'Frontend Enginner, Foris AI',
    description:
      'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
    link: '#',
  },
  {
    id: '2',
    date: 'March 2022',
    title: 'Marketing UI design in Figma',
    description:
      'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
  },
  {
    id: '3',
    date: 'April 2022',
    title: 'E-Commerce UI code in Tailwind CSS',
    description:
      'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
  },
]

const Experience = () => (
  <ol className="relative border-s border-gray-200 ml-3">
    {EXPERIENCE.map((experience) => (
      <li className="mb-10 ms-4" key={experience.id}>
        <ExperienceItem {...experience} />
      </li>
    ))}
  </ol>
)

export default Experience
