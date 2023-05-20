import { Contact } from "../components/sections/contact";
import { Images } from "../components/sections/images";
import { Partner } from "../components/sections/partner";
import { Portfolio } from "../components/sections/portfolio";
import { Team } from "../components/sections/team";
import { HeroV2 } from "../components/sections/herov2";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-40">
      <HeroV2/>
      <Images/>
      <Team />
      <Portfolio />
      <Partner />
      <Contact />
    </div>
  )
}
