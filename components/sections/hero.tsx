import Balancer from 'react-wrap-balancer'

export const Hero = () => {
  return (
    <section className="sm:py-6" aria-label='Einleitung'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 my-5">
              <h1
                className="text-center mt-2 text-3xl font-bold tracking-tighter text-gray-900 sm:text-5xl animate-fade-up"
                style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
              >
                <Balancer><span className="text-red-800">A</span>ll <span className="text-red-800">I</span>n <span className="text-red-800">O</span>ne Gesundheitsmanagement</Balancer>
              </h1>
              <p
                className="text-center mt-6 text- leading-8 text-gray-600 animate-fade-up"
                style={{ animationDelay: "0.25s", animationFillMode: "backwards" }}
              >
                <Balancer>
                  Als Inhaber einer Physiotherapie Praxis dürfen wir jeden Tag erfahren, dass die Ressource Mensch unser wichtigstes Gut ist. Gesund zu bleiben und sich persönlich oder auch als Unternehmen weiter zu entwickeln ist heutzutage unablässig.
                  Bei uns ist der Name Programm. Mit unserer langjährigen Erfahrung und einem großen Netzwerk an hervorragenden Therapeuten und Coaches können wir den Bereich Gesundheit mit all seinen Facetten sei es Fitness, Entspannung, Bewegung, Ernährung oder Life Style bedienen.
                  Getreu unserem Motto <span className="text-red-700">Ihre Gesundheit, unsere Motivation</span> möchten wir Ihnen gerne helfen mehr Gesundheit, Leistungsfähigkeit und Bewusstsein in Ihr Leben zu integrieren.
                  Deshalb finden Sie in unserem vielfältigen Portfolio verschiedenste Möglichkeiten für Ihre Firma, Ihren Verein oder für Sie selbst.
                  Bestimmt passt eines unserer Angebote zu Ihnen.
                </Balancer>
                <br />
                <a href="#kontakt" className="hover:underline text-sm font-semibold leading-6 text-red-700">
                  Kontaktieren Sie uns einfach!<span aria-hidden="true">→</span>
                </a>
              </p>
      </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
              src={'/team.jpg'} sizes="50vw" className="w-auto rounded-lg animate-fade-up" alt="Team Foto"
              style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
            />
        </div>
    </section>
  )
}
