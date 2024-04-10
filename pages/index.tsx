import { ContactSection } from "../components/sections/contact";
import { PartnerSection } from "../components/sections/partner";
import { Blog } from "../components/sections/blog";
import { getCmsData } from "../lib/api";
import { InferGetServerSidePropsType } from "next";
import { Intro } from "@/components/sections/intro";
import Member from "@/components/sections/members";
import Courses from "@/components/sections/courses";
import Presentation from "@/components/sections/presentation";
import Coaching from "@/components/sections/coaching";
import Workshop from "@/components/sections/workshop";

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
      presentations: resp.presentations,
      coachings: resp.coachings,
      seminars: resp.seminars
    }
  }
}

export default function Page(ssr: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Intro description={ssr.hero.introduction.raw} />
      <Member  team={ssr.team}/>
      <Presentation presentation={ssr.presentations}/>
      <Courses courses={ssr.courses} />
        <Workshop  seminars={ssr.seminars} />
      
      <Coaching coaching={ssr.coachings}/>
      <Blog articles={ssr.articles}/>
      <PartnerSection partner={ssr.partner} />
      <ContactSection contact={ssr.contact}/>
    </>
  )
}
