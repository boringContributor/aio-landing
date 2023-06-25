import { ContactSection } from "../components/sections/contact";
import { Hero } from "../components/sections/hero";
import { PartnerSection } from "../components/sections/partner";
import { PortfolioSection } from "../components/sections/portfolio";
import { TeamSection } from "../components/sections/team";
import { Images } from "../components/sections/images";
import { Blog } from "../components/sections/blog";
import { getCmsData } from "../lib/api";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const resp = await getCmsData();

  return {
    props: {
      hero: resp.introductions[0],
      images: resp.images[0].list,
      team: resp.teams,
      portfolio: resp.portfolios,
      contact: resp.contacts[0],
      partner: resp.partners,
      articles: resp.articles
    }
  }
}
export default function Page(ssr: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Hero image={ssr.hero.introductionImage.url} description={ssr.hero.introduction.raw} />
      {/* <Images urls={ssr.images.map(img => img.url) } /> */}
      <Blog articles={ssr.articles} />
      <TeamSection team={ssr.team}/>
      <PortfolioSection portfolio={ssr.portfolio}/>
      <PartnerSection partner={ssr.partner} />
      <ContactSection contact={ssr.contact}/>
    </>
  )
}
