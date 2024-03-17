import { ContactSection } from "../components/sections/contact";
import { Hero } from "../components/sections/hero";
import { PartnerSection } from "../components/sections/partner";
import { PortfolioSection } from "../components/sections/portfolio";
import { TeamSection } from "../components/sections/team";
import { Images } from "../components/sections/images";
import { Blog } from "../components/sections/blog";
import { getCmsData } from "../lib/api";
import { InferGetServerSidePropsType } from "next";
import { Intro } from "@/components/sections/intro";
import Member from "@/components/sections/members";
import Courses from "@/components/sections/courses";
import Presentation from "@/components/sections/presentation";

export const getServerSideProps = async () => {
  const resp = await getCmsData();

  return {
    props: {
      hero: resp.introductions[0],
      images: resp.images[0].list,
      team: resp.teams,
      courses: resp.courses.sort((a, b) => a.order - b.order),
      contact: resp.contacts[0],
      partner: resp.partners,
      articles: resp.articles,
      presentations: resp.presentations
    }
  }
}

export default function Page(ssr: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Intro description={ssr.hero.introduction.raw} />
      {/* <Hero image={ssr.hero.introductionImage?.url} description={ssr.hero.introduction.raw} /> */}
      <Member  team={ssr.team}/>
      {/* <TeamSection team={ssr.team}/> */}
      <Courses courses={ssr.courses} />
      {/* <Features portfolio={ssr.portfolio} /> */}
      <Presentation presentation={ssr.presentations}/>
      {/* <FeatureOverview portfolio={ssr.portfolio}/> */}
      {/* <Images urls={ssr.images.map(img => img.url) } /> */}
      <Blog articles={ssr.articles}/>
      <PartnerSection partner={ssr.partner} />
      <ContactSection contact={ssr.contact}/>
    </>
  )
}
