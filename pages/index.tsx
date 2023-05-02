import { Contact } from "../components/sections/contact";
import { Hero } from "../components/sections/hero";
import { Images } from "../components/sections/images";
import { Partner } from "../components/sections/partner";
import { Portfolio } from "../components/sections/portfolio";
import { Team } from "../components/sections/team";


const Maintanance = () => {
    return (
      <div className="overflow-hidden sm:py-16">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="md:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h1 
                  className="text-center mt-2 text-3xl font-bold tracking-tighter text-gray-900 sm:text-5xl animate-fade-up"
                  style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
                >
                  <span className="text-red-800">A</span>ll <span className="text-red-800">I</span>n <span className="text-red-800">O</span>ne Gesundheitsmanagement
                </h1>
                <p 
                  className="break-all mt-6 text-lg leading-8 text-gray-600 animate-fade-up"
                  style={{ animationDelay: "0.25s", animationFillMode: "backwards" }}
                >
                  Die Seite ist aktuell in Bearbeitung und wird in Kürze verfügbar sein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}
export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-40">
      <Maintanance />
        {/* <Hero />
        <Images/>
        <Team />
        <Portfolio />
        <Partner />
        <Contact /> */}
    </div>
  )
}
