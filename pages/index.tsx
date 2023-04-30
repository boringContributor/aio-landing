import { Hero } from "../components/hero";
import { Partner } from "../components/partner";
import { Team } from "../components/team";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
        <Hero />
        <Team />
        <Partner />
    </div>
  )
}
