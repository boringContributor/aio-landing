export const Hero = () => {
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
                className="break-all mt-6 text- leading-8 text-gray-600 animate-fade-up"
                style={{ animationDelay: "0.25s", animationFillMode: "backwards" }}
              >
                Als Inhaber einer Physiotherapie Praxis dürfen wir jeden Tag erfahren, dass die Ressource Mensch unser wichtigstes Gut ist. Gesund zu bleiben und sich persönlich oder auch als Unternehmen weiter zu entwickeln ist heutzutage unablässig.
                Bei uns ist der Name Programm. Mit unserer langjährigen Erfahrung und einem großen Netzwerk an hervorragenden Therapeuten und Coaches können wir den Bereich Gesundheit mit all seinen Facetten sei es Fitness, Entspannung, Bewegung, Ernährung oder Life Style bedienen.
                Getreu unserem Motto <span className="text-red-700">Ihre Gesundheit, unsere Motivation</span> möchten wir Ihnen gerne helfen mehr Gesundheit, Leistungsfähigkeit und Bewusstsein in Ihr Leben zu integrieren.
                Deshalb finden Sie in unserem vielfältigen Portfolio verschiedenste Möglichkeiten für Ihre Firma, Ihren Verein oder für Sie selbst.
                Bestimmt passt eines unserer Angebote zu Ihnen.
                <br />
                <a href="#kontakt" className="hover:underline text-sm font-semibold leading-6 text-red-700">
                  Kontaktieren Sie uns einfach!<span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <img
              src={'/team.jpg'} sizes="50vw" className="w-auto rounded-lg animate-fade-up" alt="Team Foto"
              style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
