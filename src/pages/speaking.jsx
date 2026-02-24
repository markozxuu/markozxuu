import { NextSeo } from 'next-seo';
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import  siteMeta from '@/data/siteMeta'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
    <NextSeo
      title="Speaking - Brian Ketelsen"
      description={siteMeta.description}
      canonical="https://brian.dev/speaking"
      openGraph={{
        url: 'https://brian.dev/speaking',
        images: [
          {
            url: `https://og.brian.dev/api/og?title=Speaking&desc=I’ve spoken at events all around the world and been interviewed for many podcasts.`,
            width: 1200,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],
        siteName: 'brian.dev',
      }}
    />
      <SimpleLayout
title="I’ve spoken at national engineering events."
intro="My talks focus on practical architecture decisions, trade-offs, and lessons learned from building production systems."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
          <Appearance
  href="https://ccoss.org/speakers/markoz-pena/"
  title="Modern Frontend & Deployment with Vercel"
  description="Technical session on modern frontend architecture and deployment workflows, presented in collaboration with ▲Vercel. Focused on performance, developer experience, and production-ready patterns."
  event="CCOSS — Guadalajara, Mexico (2019, with Vercel)"
  cta="View details"
/>

<Appearance
  href="#"
  title='What is "Static Site Generation"?'
  description="Opening talk for Google Developers Group Guadalajara’s online event. A deep dive into Static Site Generation within the Jamstack ecosystem and its role in modern frontend architectures."
  event="Google Developers Group Guadalajara — Online (2020)"
  cta="View event"
/>

<Appearance
  href="https://flisol.info/FLISOL2019/Mexico/Veracruz"
  title="Server-Side Rendering vs Client-Side Rendering"
  description="A practical comparison between SSR and CSR, covering performance trade-offs, SEO implications, and architectural considerations in real-world frontend applications."
  event="FLISOL Veracruz (2019)"
  cta="View event"
/>

          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
