import { Contact } from "../components/sections/contact";
import { Hero } from "../components/sections/hero";
import { Partner } from "../components/sections/partner";
import { Portfolio } from "../components/sections/portfolio";
import { Team } from "../components/sections/team";


export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-40">
      <Hero/>
      {/* <Images/> */}
      <Team />
      <Portfolio />
      <Partner />
      <Contact />
    </div>
  )
}
