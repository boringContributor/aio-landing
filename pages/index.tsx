import { Contact } from "../components/sections/contact";
import { Hero } from "../components/sections/hero";
import { Partner } from "../components/sections/partner";
import { Portfolio } from "../components/sections/portfolio";
import { Team } from "../components/sections/team";
import { Images } from "../components/sections/images";
import { Blog } from "../components/sections/blog";

export default function Page() {
  return (
    <>
      <Hero />
      <Images />
      <Blog />
      <Team />
      <Portfolio />
      <Partner />
      <Contact />
    </>
  )
}
